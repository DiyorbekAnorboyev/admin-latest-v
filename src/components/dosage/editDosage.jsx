import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import {
  getDosageFailure,
  getDosageStart,
  getDosageSuccess,
} from "../redux/slice/dosage";
import dosageService from "../service/dosage";

const EditDosage = ({ activeT, close, id }) => {
  const [name, setName] = useState("");
  const [dosageId, setDosageId] = useState("");
  const dispatch = useDispatch();

  const getDosage = async () => {
    const { data } = await dosageService.getDosage();
    setName(data.items[id]?.name);
    setDosageId(data.items[id]?.id);
  };

  const EditDosage = async () => {
    dispatch(getDosageStart());
    try {
      await dosageService.editDosage({ name, id: dosageId });
      const data = await dosageService.getDosage();
      dispatch(getDosageSuccess(data.data.items));
      close();
    } catch (error) {
      dispatch(getDosageFailure());
    }
  };

  useEffect(() => {
    getDosage();
  }, [activeT]);

  return (
    <div className={activeT ? "showProduct" : "hideProduct"}>
      <div className="credit ">
        <div className="d-flex justify-content-between">
          <h5>Miqdorni o'zgartirish</h5>
        </div>

        <div className="row d-flex justify-content-between">
          <div className="inputs  col">
            <label>Miqdor nomi</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Miqdor nomi"
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
            onClick={() => EditDosage()}
          >
            O'zgartirish
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditDosage;
