import React, { useEffect, useState } from "react";
import "./Addproduct.css";
import AddIcon from "../../components/constants/AddIcon.jpg";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductsFailure,
  getProductsStart,
  getProductsSuccess,
} from "../redux/slice/product";
import ProductService from "../service/product";

const Addproduct = ({ activeT, close }) => {
  const { dosageData } = useSelector((state) => state.dosage);
  const { categories } = useSelector((state) => state.category);
  const [name, setname] = useState("");
  const [file, setfile] = useState(null);
  const [code, setcode] = useState("");
  const [categoryId, setcategoryId] = useState(categories[0].id);
  const [dosageId, setdosageId] = useState(dosageData[0].id);
  const [companyName, setcompanyName] = useState("");

  const dispatch = useDispatch();
  const formData = new FormData();
  formData.append("file", file);
  formData.append("name", name);
  formData.append("code", code);
  formData.append("categoryId", categoryId);
  formData.append("dosageId", dosageId);
  formData.append("manufacturer", companyName);

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setfile(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getProductsStart());
    try {
      await ProductService.postProduct(formData);
      const data = await ProductService.getProducts();
      dispatch(getProductsSuccess(data.data.items));
      close();
    } catch (error) {
      dispatch(getProductsFailure());
      console.log(error);
    }
  };

  return (
    <div>
      <div className={activeT ? "showProduct" : "hideProduct"}>
        <div className="credit ">
          <div className="d-flex justify-content-between">
            <h5>Mahsulot qo'shish</h5>
          </div>
          <div className="row d-flex justify-content-between">
            <div className="inputs  col">
              <label>Mahsulot turi</label>
              <select
                className="form-control"
                value={categoryId}
                onChange={(e) => setcategoryId(e.target.value)}
              >
                {categories.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="inputs  col">
              <label>Mahsulot nomi</label>
              <input
                type="text"
                className="form-control"
                placeholder="Mahsulot nomi"
                onChange={(e) => setname(e.target.value)}
              />
            </div>
          </div>
          <div className="row d-flex justify-content-between">
            <div className="inputs mt-2 col">
              <label>O'lchov birligi</label>
              <select
                className="form-control"
                value={dosageId}
                onChange={(e) => setdosageId(e.target.value)}
              >
                {dosageData.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="inputs mt-2 col">
              <label>Mahsulot kodi</label>
              <input
                type="number"
                className="form-control"
                placeholder="123456"
                onChange={(e) => setcode(e.target.value)}
              />
            </div>
          </div>
          <div className=" row d-flex justify-content-between">
            <div className="w-50">
              <label for="file-upload" className="w-100 rounded">
                <h6>Rasmni yuklang</h6>
                <img height={75} src={file ? file : AddIcon} alt="file" />
                <input
                  className="d-none"
                  id="file-upload"
                  type="file"
                  onChange={(e) => handleFileChange(e)}
                />
              </label>
            </div>
            <div className="inputs mt-2 w-50 col">
              <label>Ishlab chiqaruvchi</label>
              <input
                type="text"
                className="form-control"
                placeholder="Ishlab chiqaruvchi nomi"
                onChange={(e) => setcompanyName(e.target.value)}
              />
            </div>
          </div>
          <div className=" row d-flex justify-content-between"></div>
          <div className="d-flex justify-content-between mt-3 gap-3">
            <button
              onClick={close}
              type="submit"
              className="w-50 btn btn-outline-primary btn-modal"
            >
              BEKOR QILISH{" "}
            </button>
            <button
              className="w-50 btn btn-primary btn-modal"
              onClick={handleSubmit}
            >
              QO'SHISH
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addproduct;
