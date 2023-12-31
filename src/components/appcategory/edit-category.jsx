import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getCategoryFailure,
  getCategoryStart,
  getCategorySuccess,
} from "../redux/slice/category";
import CategoryService from "../service/category";

const EditCategory = ({ activeT, close, id }) => {
  const [name, setName] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const dispatch = useDispatch();

  const getCategory = async () => {
    const { data } = await CategoryService.getCategory();
    setName(data.items[id]?.name);
    setCategoryId(data.items[id]?.id);
  };

  const editCategory = async () => {
    dispatch(getCategoryStart());
    try {
      await CategoryService.editCategory({ name, id: categoryId });
      const data = await CategoryService.getCategory();
      dispatch(getCategorySuccess(data.data.items));
      close();
    } catch (error) {
      dispatch(getCategoryFailure());
    }
  };

  useEffect(() => {
    getCategory();
  }, [activeT]);

  return (
    <div className={activeT ? "showProduct" : "hideProduct"}>
      <div className="credit ">
        <div className="d-flex justify-content-between">
          <h5>Categoriyani o'zgartirish</h5>
        </div>

        <div className="row d-flex justify-content-between">
          <div className="inputs  col">
            <label>Category nomi</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Mahsulot nomi"
            />
          </div>
        </div>
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
            onClick={() => editCategory()}
          >
            O'zgartirish
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditCategory;
