import axios from "./api";

const CategoryService = {
  async getCategory() {
    const { data } = await axios.get("/Category/List");
    return data;
  },
  async postCategory(name) {
    const { data } = await axios.post("/Category", name);
    return data;
  },
  async editCategory(category) {
    const { data } = await axios.put("/Category", category);
    return data;
  },
  async deleteCategory(id) {
    const { data } = await axios.delete(`/Category/${id}`);
    return data;
  },
};

export default CategoryService;
