import axios from "./api";

const ProductService = {
  async getProducts() {
    const { data } = await axios.get(
      "https://admin.xaridor.com/api/Product/List"
    );
    return data;
  },
  async postProduct(product) {
    const { data } = await axios.post(
      "https://admin.xaridor.com/api/Product",
      product
    );
    return data;
  },
  async deleteProduct(id) {
    const { data } = await axios.delete(`/Product/${id}`);
    return data;
  },
  async editProduct(product) {
    const { data } = await axios.put(`/Product`, product);
    return data;
  },
};

export default ProductService;
