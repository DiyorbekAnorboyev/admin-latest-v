import axios from "axios";
import React from "react";
import { useState } from "react";

const AddCategory = ({ activeT, close }) => {
  const [name, setName] = useState("");

  const token = window.localStorage.getItem("token");
  const formData = new FormData();
  formData.append("name", name);

  const AddCategory = () => {
    fetch("https://admin.xaridor.com/api/Category", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        close();
      });
  };

  return (
    <div className={activeT ? "showProduct" : "hideProduct"}>
      <div className="credit ">
        <div className="d-flex justify-content-between">
          <h5>Category qo'shish</h5>
        </div>

        <div className="row d-flex justify-content-between">
          <div className="inputs  col">
            <label>Category nomi</label>
            <input
              type="text"
              className="form-control"
              placeholder="Mahsulot nomi"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
            onClick={() => AddCategory()}
          >
            QO'SHISH
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
