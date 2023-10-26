import { useEffect, useState } from "react";
import Addproduct from "../addproduct/Addproduct";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AddDosage from "../dosage/AddDosage";
import "./Product.css";
import EditCategory from "../appcategory/edit-category";
import AddCategory from "../appcategory/add-category";

const Product = () => {
  const [data, setdata] = useState([]);
  const [addShow, setAddShow] = useState(false);
  const [categoryShow, setCategoryShow] = useState(false);

  const [addDosage, setAddDosage] = useState(false);

  const token = window.localStorage.getItem("token");

  const getProduct = async () => {
    // axios url link change
    await axios.get("https://admin.xaridor.com/api/Product/List?CategoryId=6740004e-2192-408a-9b7f-b3518ab468de",{headers: { Authorization: `Bearer ${token}` }})
      .then(res => setdata(res.data.data.items))
      .catch(err => console.log(err))
  };

  console.log(data);

  useEffect(() => {
    getProduct();
  }, [setdata])

  const handleDelete = (e) => {
    axios
      .delete(`https://admin.xaridor.com/api/Product/${e}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
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
            <AddDosage
              activeT={addDosage}
              close={() => CloseModal(setAddDosage)}
            />
            <Addproduct
              activeT={addShow}
              close={() => CloseModal(setAddShow)}
            />
            <AddCategory
              activeT={categoryShow}
              close={() => CloseModal(setCategoryShow)}
            />
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
              {data.map((e, idx) => (
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
