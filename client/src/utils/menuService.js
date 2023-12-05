import axios from "axios";

const fetchMenuItems = {
  async fetchEntree() {
    try {
      const response = await axios.get("http://localhost:5000/menu/entrees");
      return response.data;
    } catch (err) {
      console.error("Failed to load Entree Items:", err);
      throw err;
    }
  },

  async addEntree(entreeData) {
    try {
      const response = await axios.post(
        "http://localhost:5000/entrees/",
        entreeData,
        { withCredentials: true }
      );
      return response.data;
    } catch (err) {
      console.error("Failed to add entree:", err);
      throw err;
    }
  },

  async updateEntree(id, entreeData) {
    try {
      const response = await axios.put(
        `http://localhost:5000/entrees/${id}`,
        entreeData,
        { withCredentials: true }
      );
      return response.data;
    } catch (err) {
      console.error("Failed to update entree:", err);
      throw err;
    }
  },

  async deleteEntree(id) {
    try {
      const response = await axios.delete(
        `http://localhost:5000/entrees/${id}`,
        { withCredentials: true }
      );
      return response.data;
    } catch (err) {
      console.error("Failed to delete entree:", err);
      throw err;
    }
  },
  
  async fetchAppetizer() {
    try {
      const response = await axios.get("http://localhost:5000/menu/appetizers");
      return response.data;
    } catch (err) {
      console.error("Failed to load Entree Items:", err);
      throw err;
    }
  },
  
  async addAppetizer(entreeData) {
    try {
      const response = await axios.post(
        "http://localhost:5000/appetizers/",
        entreeData,
        { withCredentials: true }
      );
      return response.data;
    } catch (err) {
      console.error("Failed to add entree:", err);
      throw err;
    }
  },

  async updateAppetizer(id, entreeData) {
    try {
      const response = await axios.put(
        `http://localhost:5000/appetizers/${id}`,
        entreeData,
        { withCredentials: true }
      );
      return response.data;
    } catch (err) {
      console.error("Failed to update entree:", err);
      throw err;
    }
  },

  async deleteAppetizer(id) {
    try {
      const response = await axios.delete(
        `http://localhost:5000/appetizers/${id}`,
        { withCredentials: true }
      );
      return response.data;
    } catch (err) {
      console.error("Failed to delete entree:", err);
      throw err;
    }
  },

  async fetchUser() {
    try {
      const response = await axios.get(
        "http://localhost:5000/service/user/profile",
        { withCredentials: true }
      );
      return response.data;
    } catch (err) {
      if (err.response && err.response.status === 401) {
        console.log("No user is currently logged in");
      } else {
        console.log("Failed to load user information:", err);
      }
      throw err;
    }
  },

  async postUserLogin(userData) {
    try {
      const response = await axios.post(
        "http://localhost:5000/service/user/login",
        userData,
        { withCredentials: true }
      );
      return response.data;
    } catch (err) {
      console.error("Failed to post user login:", err);
      console.error("Error details:", err.response.data);
      throw err;
    }
  },

  async postUserRegistration(userData) {
    try {
      const response = await axios.post(
        "http://localhost:5000/service/user/register",
        userData,
        { withCredentials: true }
      );
      return response.data;
    } catch (err) {
      console.error("Failed to post user registration:", err);
      throw err;
    }
  },

  async postUserLogout(userData) {
    try {
      const response = await axios.post(
        "http://localhost:5000/service/user/logout",
        userData,
        { withCredentials: true }
      );
      return response.data;
    } catch (err) {
      console.error("Failed to post user logout:", err);
      throw err;
    }
  },
};

export default fetchMenuItems;
