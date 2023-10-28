import axios from "./api";

const dosageService = {
  async getDosage() {
    const { data } = await axios.get("/Dosage/List");
    return data;
  },
  async postDosage(dosage) {
    const { data } = await axios.post("Dosage", dosage);
    return data;
  },
  async editDosage(dosage) {
    const { data } = await axios.put("/Dosage", dosage);
    return data;
  },
  async deleteDosage(id) {
    const { data } = await axios.delete(`/Dosage/${id}`);
    return data;
  },
};

export default dosageService;
