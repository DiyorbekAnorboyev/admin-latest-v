import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const EditCategory = ({ activeT, close, id }) => {
  const [name, setName] = useState("");
  const [categoryId, setCategoryId] = useState("");

  const getCategory = async () => {
    const { data } = await axios.get(
      "https://admin.xaridor.com/api/Category/List",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    setName(data.data.items[id].name);
    setCategoryId(data.data.items[id].id);
  };
  const token = window.localStorage.getItem("token");

  const editCategory = () => {
    fetch("https://admin.xaridor.com/api/Category", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name, id: categoryId }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        close();
      });
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
