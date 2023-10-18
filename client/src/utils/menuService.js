import axios from "axios"; 

const fetchMenuItems = {
  async fetchEntree() {
    try {
      const response = await axios.get("http://localhost:5000/menu/entrees");
      return response.data;
    } catch (err) {
      console.error('Failed to load Entree Items:', err);
      throw err;
    }
  },
  async fetchAppetizer() {
    try {
      const response = await axios.get("http://localhost:5000/menu/appetizers");
      return response.data;
    } catch (err) {
      console.error('Failed to load Entree Items:', err);
      throw err;
    }
  }
};

export default fetchMenuItems;

