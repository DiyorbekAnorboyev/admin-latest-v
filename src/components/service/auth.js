import axios from "./api";

const AuthService = {
  async postUser(user) {
    const { data } = await axios.post("Account/Login", user);
    return data;
  },
};

export default AuthService;
