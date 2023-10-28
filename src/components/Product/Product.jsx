import { useEffect, useState } from "react";
import Addproduct from "../addproduct/Addproduct";
import "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import ProductService from "../service/product";
import {
  getProductsFailure,
  getProductsStart,
  getProductsSuccess,
} from "../redux/slice/product";

const Product = () => {
  const { products } = useSelector((state) => state.product);
  console.log(products);
  const [addShow, setAddShow] = useState(false);
  const dispatch = useDispatch();

  const token = window.localStorage.getItem("token");

  const getProduct = async () => {
    dispatch(getProductsStart());
    try {
      const data = await ProductService.getProducts();
      dispatch(getProductsSuccess(data.data.items));
    } catch (error) {
      dispatch(getProductsFailure());
    }
  };

  useEffect(() => {
    getProduct();
  }, [products]);

  useEffect(() => {
    getProduct();
  }, []);

  const handleDelete = async (e) => {
    await ProductService.deleteProduct(e);
    const data = await ProductService.getProducts();
    dispatch(getProductsSuccess(data.data.items));
  };

  const onAdd = () => {
    setAddShow(!addShow ? true : false);
  };

  const CloseModal = (a) => {
    return a(false);
  };
  return (
    <div>
      <div className="all-markets">
        {token ? (
          ""
        ) : (
          <h4 className="bg-danger">
            Aka login qiling <a href="/">Login uchun</a>
          </h4>
        )}

        <div className="d-flex justify-content-between ">
          <div>
            {addShow && (
              <Addproduct
                activeT={addShow}
                close={() => CloseModal(setAddShow)}
              />
            )}
          </div>

          <h5>Mahsulotlar</h5>
          <div className="d-flex  gap-3 ">
            <button className="btn btn-primary mt-1 mx-1" onClick={onAdd}>
              Mahsulotlar qo'shish
            </button>
          </div>
        </div>
        <div className="tabl mt-2">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">№</th>
                <th scope="col">Mahsulot turi</th>
                <th scope="col">Mahsulot Nomi</th>
                <th scope="col">Shtrix</th>
                <th scope="col">O'lchov birligi</th>
                <th scope="col">Ishlab chiqaruvchi nomi</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {/* */}
              {products.map((e, idx) => (
                <tr key={idx} className="table-secondary">
                  <th scope="row ">{e.id.slice(0, 3)}</th>
                  <td>{e.categoryName}</td>
                  <td>{e.productName}</td>
                  <td>{e.code}</td>
                  <td>{e.dosageName}</td>
                  <td>{e.manufacturer}</td>
                  <td>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => handleDelete(e.id)}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Product;
