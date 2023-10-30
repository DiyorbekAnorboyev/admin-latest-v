import { useEffect, useState } from "react";
import axios from "axios";
import AddDosage from "../dosage/AddDosage";
import { useDispatch, useSelector } from "react-redux";
import {
  getDosageFailure,
  getDosageStart,
  getDosageSuccess,
} from "../redux/slice/dosage";
import dosageService from "../service/dosage";
import EditDosage from "./editDosage";
import Loading from "../loading/loading";
function Dosage() {
  const { dosageData, isLoading } = useSelector((state) => state.dosage);
  const [addDosage, setAddDosage] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [id, setId] = useState(0);

  const token = window.localStorage.getItem("token");

  const dispatch = useDispatch();

  const getDosage = async () => {
    try {
      const data = await dosageService.getDosage();
      dispatch(getDosageSuccess(data.data.items));
    } catch (error) {
      dispatch(getDosageFailure());
    }
  };

  useEffect(() => {
    getDosage();
  }, []);

  const handleDelete = async (e) => {
    try {
      await dosageService.deleteDosage(e);
      const data = await dosageService.getDosage();
      dispatch(getDosageSuccess(data.data.items));
    } catch (error) {
      dispatch(getDosageFailure());
    }
  };

  const onDosage = () => {
    setAddDosage(!addDosage ? true : false);
  };

  const CloseModal = (a) => {
    return a(false);
  };

  const onEdit = (id) => {
    setEditShow(!editShow);
    setId(id);
  };

  return isLoading ? (
    <Loading dataName={"Miqdorlar"} />
  ) : (
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
            <AddDosage
              activeT={addDosage}
              close={() => CloseModal(setAddDosage)}
            />
            <EditDosage
              activeT={editShow}
              close={() => CloseModal(setEditShow)}
              id={id}
            />
          </div>

          <h5>Miqdor</h5>
          <div className="d-flex  gap-3 ">
            <button className="btn btn-primary mt-1" onClick={onDosage}>
              Miqdor qo'shish
            </button>
          </div>
        </div>
        <div className="tabl mt-2">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">№</th>
                <th scope="col">O'lchov birligi</th>
                <th scope="col">-</th>
              </tr>
            </thead>
            <tbody>
              {dosageData.map((e, idx) => (
                <tr key={idx} className="table-secondary">
                  <th scope="row ">{e.id}</th>
                  <td>{e.name}</td>
                  <td>
                    <div className="d-flex gap-1">
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => handleDelete(e.id)}
                      >
                        delete
                      </button>
                      <button
                        className="btn btn-outline-success"
                        onClick={() => onEdit(idx)}
                      >
                        edit
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dosage;
