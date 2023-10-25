import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom/dist";

const Login = () => {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [token, settoken] = useState("");
  const navigate = useNavigate();

  const dataUser = {
    userName: name,
    password: password,
  };

  console.log(token);

  // Mirzayev_020

  const handleLogin = async (e) => {
    e.preventDefault();
    await axios
      .post("https://admin.xaridor.com/api/Account/Login", dataUser)
      .then((res) => settoken(res.data.data.token))
      .catch((err) => console.log(err));
    await window.localStorage.setItem("token", `${token}`);
    if (token) {
      navigate("/adminpage/products");
    }
  };

  return (
    <div>
      <main class="form-signin w-25 my-5 py-5 m-auto">
        <form>
          <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

          <div class="form-floating">
            <input
              type="text"
              className="form-control"
              onChange={(e) => setname(e.target.value)}
              placeholder="username"
            />
            <label for="floatingInput">Username</label>
          </div>
          <div class="form-floating my-3">
            <input
              type="text"
              className="form-control"
              onChange={(e) => setpassword(e.target.value)}
              placeholder="password"
            />
            <label for="floatingPassword">Password</label>
          </div>

          <button onClick={handleLogin} className="btn btn-primary w-100">
            Submit
          </button>
        </form>
      </main>
    </div>
  );
};

export default Login;
