import { useEffect, useState } from "react";
import axios from "axios";
import AddDosage from "../dosage/AddDosage";
import AddCategory from "./add-category";
import EditCategory from "./edit-category";

function Categories() {
  const [data, setdata] = useState([]);
  const [addDosage, setAddDosage] = useState(false);
  const [id, setId] = useState(0);
  const [editShow, setEditShow] = useState(false);
  const [categoryId, setCategoryId] = useState("");
  const [name, setName] = useState("");

  const token = window.localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("https://admin.xaridor.com/api/Category/List", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setdata(res.data.data.items))
      .catch((err) => console.log(err));
  }, [setdata]);

  const handleDelete = (e) => {
    axios
      .delete(`https://admin.xaridor.com/api/Dosage/${e}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

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
  useEffect(() => {
    getCategory();
  }, []);

  const onDosage = () => {
    setAddDosage(!addDosage ? true : false);
  };

  const onEdit = (id) => {
    setId(id);
    setEditShow(!editShow);
  };

  const CloseModal = (a) => {
    return a(false);
  };

  const deleteCategory = () => {
    fetch(`https://admin.xaridor.com/api/Category/${categoryId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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
            <AddCategory
              activeT={addDosage}
              close={() => CloseModal(setAddDosage)}
            />
            <EditCategory
              activeT={editShow}
              close={() => CloseModal(setEditShow)}
              id={id}
            />
          </div>

          <h5>Category</h5>
          <div className="d-flex  gap-3 ">
            <button className="btn btn-primary mt-1" onClick={onDosage}>
              Category qo'shish
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
              {data.map((e, idx) => (
                <tr key={idx} className="table-secondary">
                  <th scope="row ">{e.id}</th>
                  <td>{e.name}</td>
                  <td>
                    <div className="d-flex gap-1">
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => deleteCategory()}
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

export default Categories;
