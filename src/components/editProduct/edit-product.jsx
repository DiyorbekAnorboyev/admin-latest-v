import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  getProductsFailure,
  getProductsStart,
  getProductsSuccess,
} from "../redux/slice/product";
import ProductService from "../service/product";

const EditProduct = ({ activeT, close, id }) => {
  const { dosageData } = useSelector((state) => state.dosage);
  const { categories } = useSelector((state) => state.category);
  const { products } = useSelector((state) => state.product);
  const [name, setname] = useState(products[id].productName);
  const [file, setfile] = useState(products[id].picturePath);
  const [exfile, setexfile] = useState(null);
  const [code, setcode] = useState(products[id].code);
  const [categoryId, setcategoryId] = useState(products[id].categoryId);
  const [dosageId, setdosageId] = useState(products[id].dosageId);
  const [companyName, setcompanyName] = useState(products[id].manufacturer);
  const [isNewFile, setIsNewFile] = useState(false);

  const dispatch = useDispatch();
  const formData = new FormData();
  formData.append("Id", products[id].id);
  formData.append("file", file);
  formData.append("name", name);
  formData.append("code", code);
  formData.append("categoryId", categoryId);
  formData.append("dosageId", dosageId);
  formData.append("manufacturer", companyName);
  formData.append("isNewFile", isNewFile);

  const handleFileChange = (event) => {
    setfile(event.target.files[0]);
    if (event.target.files && event.target.files[0]) {
      setexfile(URL.createObjectURL(event.target.files[0]));
    }
    setIsNewFile(!isNewFile);
  };

  const editBtn = async () => {
    dispatch(getProductsStart());
    try {
      await ProductService.editProduct(formData);
      const data = await ProductService.getProducts();
      dispatch(getProductsSuccess(data.data.items));
      close();
    } catch (error) {
      console.log(error);
      dispatch(getProductsFailure());
    }
  };

  return (
    <div>
      <div className={activeT ? "showProduct" : "hideProduct"}>
        <div className="credit ">
          <div className="d-flex justify-content-between">
            <h5>Mahsulot o'zgartirish</h5>
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
                value={name}
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
                value={code}
                onChange={(e) => setcode(e.target.value)}
              />
            </div>
          </div>
          <div className=" row d-flex justify-content-between">
            <div className="w-50">
              <label for="file-upload" className="w-100 rounded">
                <h6>Rasmni yuklang</h6>
                <img
                  height={75}
                  src={exfile ? exfile : `https://admin.xaridor.com/${file}`}
                  alt="file"
                />
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
                value={companyName}
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
              onClick={() => editBtn()}
            >
              O'ZGARTIRISH
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
