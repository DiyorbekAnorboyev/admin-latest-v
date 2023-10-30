import { BrowserRouter, Route, Routes } from "react-router-dom";
import Adminpage from "./components/adminpage/Adminpage";
import Markets from "./components/markets/Markets";
import Product from "./components/Product/Product";
import Login from "./components/login/Login";
import Dosage from "./components/dosage/Dosage";
import Categories from "./components/appcategory/categories";
import { useDispatch } from "react-redux";
import "./App.css";
import {
  getProductsFailure,
  getProductsStart,
  getProductsSuccess,
} from "./components/redux/slice/product";
import ProductService from "./components/service/product";
import { useEffect } from "react";
import {
  getCategoryFailure,
  getCategoryStart,
  getCategorySuccess,
} from "./components/redux/slice/category";
import CategoryService from "./components/service/category";
import {
  getDosageFailure,
  getDosageStart,
  getDosageSuccess,
} from "./components/redux/slice/dosage";
import dosageService from "./components/service/dosage";

function App() {
  const dispatch = useDispatch();

  const getProducts = async () => {
    dispatch(getProductsStart());
    try {
      const data = await ProductService.getProducts();
      dispatch(getProductsSuccess(data.data.items));
    } catch (error) {
      dispatch(getProductsFailure());
    }
  };
  const getCategories = async () => {
    dispatch(getCategoryStart());
    try {
      const data = await CategoryService.getCategory();
      dispatch(getCategorySuccess(data.data.items));
    } catch (error) {
      dispatch(getCategoryFailure());
    }
  };
  const getDosage = async () => {
    dispatch(getDosageStart());
    try {
      const data = await dosageService.getDosage();
      dispatch(getDosageSuccess(data.data.items));
    } catch (error) {
      dispatch(getDosageFailure());
    }
  };

  useEffect(() => {
    getCategories();
    getProducts();
    getDosage();
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/adminpage" element={<Adminpage />} />
          <Route
            path="/adminpage/markets"
            element={<Adminpage activePage={<Markets />} />}
          />
          <Route
            path="/adminpage/products"
            element={<Adminpage activePage={<Product />} />}
          />
          <Route
            path="/adminpage/category"
            element={<Adminpage activePage={<Categories />} />}
          />
          <Route
            path="/adminpage/dosage"
            element={<Adminpage activePage={<Dosage />} />}
          />
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
