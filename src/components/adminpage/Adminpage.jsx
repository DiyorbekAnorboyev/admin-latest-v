import React from "react";
import "./Adminpage.css";
import haridor from "../../components/constants/Group 2.svg";
import { DokonIcon } from "../constants/dokonIcon";
import { useLocation, Link } from "react-router-dom";

const Adminpage = ({ activePage }) => {
  const location = useLocation();
  return (
    <div className="">
      <div className="over-s">
        <div className="d-flex w-100 justify-content-between gap-2 over">
          <div>
            <img src={haridor} height={30} />
          </div>
          <div className=" d-flex gap-2 mx-5">
            <input
              className="form-control"
              type="Type in href search"
              name=""
              id=""
              placeholder="Qidirish"
            />
            <button className="btn btn-outline-primary">Qidiruv</button>
          </div>
        </div>
      </div>
      <div className="d-flex w-100">
        <div className="side">
          <Link to="/adminpage/markets">
            <div
              className={
                location.pathname === "/adminpage/markets"
                  ? "active-nav mt-1 pt-1 "
                  : "hovers mt-1  pt-1"
              }
            >
              <DokonIcon
                fill={
                  location.pathname === "/adminpage/markets" ? "blue" : "grey"
                }
              />
              <p>Do'konlar</p>
            </div>
          </Link>
          <Link to="/adminpage/products">
            <div
              className={
                location.pathname === "/adminpage/products"
                  ? "active-nav mt-1 pt-1 "
                  : "hovers mt-1  pt-1"
              }
            >
              <DokonIcon
                fill={
                  location.pathname === "/adminpage/products" ? "blue" : "grey"
                }
              />
              <p>Mahsulotlar</p>
            </div>
          </Link>
          <Link to="/adminpage">
            <div
              className={
                location.pathname === "/adminpage"
                  ? "active-nav mt-1 pt-1 "
                  : "hovers mt-1  pt-1"
              }
            >
              <DokonIcon
                fill={location.pathname === "/adminpage" ? "blue" : "grey"}
              />
              <p>Ruxsat berish</p>
            </div>
          </Link>
          <Link to="/adminpag">
            <div
              className={
                location.pathname === "/adminpag"
                  ? "active-nav mt-1 pt-1 "
                  : "hovers mt-1  pt-1"
              }
            >
              <DokonIcon
                fill={location.pathname === "/adminpag" ? "blue" : "grey"}
              />
              <p>Hisbot</p>
            </div>
          </Link>
          <Link to="/adminpage/category">
            <div
              className={
                location.pathname === "/adminpage/category"
                  ? "active-nav mt-1 pt-1 "
                  : "hovers mt-1  pt-1"
              }
            >
              <DokonIcon
                fill={
                  location.pathname === "/adminpage/category" ? "blue" : "grey"
                }
              />
              <p>Category</p>
            </div>
          </Link>
          <Link to="/adminpage/dosage">
            <div
              className={
                location.pathname === "/adminpage/dosage"
                  ? "active-nav mt-1 pt-1 "
                  : "hovers mt-1  pt-1"
              }
            >
              <DokonIcon
                fill={
                  location.pathname === "/adminpage/dosage" ? "blue" : "grey"
                }
              />
              <p>Miqdori</p>
            </div>
          </Link>
        </div>
        <div className="w-100">{activePage}</div>
      </div>
    </div>
  );
};

export default Adminpage;
