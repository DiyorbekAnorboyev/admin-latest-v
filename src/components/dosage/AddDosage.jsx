import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  getDosageFailure,
  getDosageStart,
  getDosageSuccess,
} from "../redux/slice/dosage";
import dosageService from "../service/dosage";

const AddDosage = ({ activeT, close }) => {
  const [name, setname] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getDosageStart());
    try {
      await dosageService.postDosage({ name });
      const data = await dosageService.getDosage();
      dispatch(getDosageSuccess(data.data.items));
      close();
      setname("");
    } catch (error) {
      dispatch(getDosageFailure());
    }
  };

  return (
    <div>
      <div className={activeT ? "showProduct" : "hideProduct"}>
        <div className="credit ">
          <div className="d-flex justify-content-between">
            <h5>Miqdor qo'shish</h5>
          </div>
          <div className="row d-flex justify-content-between">
            <div>
              <div className="row d-flex justify-content-between">
                <div className="inputs  col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Miqdor nomi"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between mt-3 gap-3">
            <button
              onClick={() => close()}
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

export default AddDosage;
