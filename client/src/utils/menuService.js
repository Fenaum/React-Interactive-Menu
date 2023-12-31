import axios from "axios";

const menuAPI = {
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
        "http://localhost:5000/menu/entrees",
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
        `http://localhost:5000/menu/entrees/${id}`,
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
        `http://localhost:5000/menu/entrees/${id}`,
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
      console.error("Failed to load appetizer Items:", err);
      throw err;
    }
  },

  async addAppetizer(appetizerData, imageFile) {
    try {
      const formData = new FormData();
      Object.keys(appetizerData).forEach((key) => {
        formData.append(key, appetizerData[key]);
      });
      if (imageFile) {
        formData.append("image", imageFile);
      }

      const response = await axios.post(
        "http://localhost:5000/menu/appetizers",
        formData,
        { withCredentials: true }
      );
      return response.data;
    } catch (err) {
      console.error("Failed to add appetizer:", err);
      throw err;
    }
  },

  async updateAppetizer(id, appetizerData, imageFile) {
    try {
      const formData = new FormData();
      Object.keys(appetizerData).forEach((key) => {
        formData.append(key, appetizerData[key]);
      });
      if (imageFile) {
        formData.append("image", imageFile);
      }

      const response = await axios.put(
        `http://localhost:5000/menu/appetizers/${id}`,
        formData,
        { withCredentials: true }
      );
      return response.data;
    } catch (err) {
      console.error("Failed to update appetizer:", err);
      throw err;
    }
  },

  async deleteAppetizer(id) {
    try {
      const response = await axios.delete(
        `http://localhost:5000/menu/appetizers/${id}`,
        { withCredentials: true }
      );
      return response.data;
    } catch (err) {
      console.error("Failed to delete appetizer:", err);
      throw err;
    }
  },

  async fetchDessert() {
    try {
      const response = await axios.get("http://localhost:5000/menu/desserts");
      return response.data;
    } catch (err) {
      console.error("Failed to load dessert Items:", err);
      throw err;
    }
  },

  async addDessert(dessertData) {
    try {
      const response = await axios.post(
        "http://localhost:5000/menu/desserts",
        dessertData,
        { withCredentials: true }
      );
      return response.data;
    } catch (err) {
      console.error("Failed to add dessert:", err);
      throw err;
    }
  },

  async updateDessert(id, dessertData) {
    try {
      const response = await axios.put(
        `http://localhost:5000/menu/desserts/${id}`,
        dessertData,
        { withCredentials: true }
      );
      return response.data;
    } catch (err) {
      console.error("Failed to update dessert:", err);
      throw err;
    }
  },

  async deleteDessert(id) {
    try {
      const response = await axios.delete(
        `http://localhost:5000/menu/desserts/${id}`,
        { withCredentials: true }
      );
      return response.data;
    } catch (err) {
      console.error("Failed to delete dessert:", err);
      throw err;
    }
  },

  async fetchAllWine() {
    try {
      const response = await axios.get(
        "http://localhost:5000/menu/drinks/wine",
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (err) {
      console.error("Failed to load wine items:", err);
      throw err;
    }
  },

  async fetchAllCocktail() {
    try {
      const response = await axios.get(
        "http://localhost:5000/menu/drinks/cocktail",
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (err) {
      console.error("Failed to load cocktail items:", err);
      throw err;
    }
  },

  async fetchAllCoffee() {
    try {
      const response = await axios.get(
        "http://localhost:5000/menu/drinks/coffee",
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (err) {
      console.error("Failed to load coffee items:", err);
      throw err;
    }
  },

  async fetchAllNonAlcoholic() {
    try {
      const response = await axios.get(
        "http://localhost:5000/menu/drinks/nonalcoholic",
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (err) {
      console.error("Failed to load non-alcoholic items:", err);
      throw err;
    }
  },

  async addDrink(drinkData, category) {
    try {
      const response = await axios.post(
        `http://localhost:5000/menu/drinks/${category}`,
        drinkData,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (err) {
      console.error("Failed to add drink item:", err);
      throw err;
    }
  },

  async updateDrink(drinkData, id, category) {
    try {
      const response = await axios.put(
        `http://localhost:5000/menu/drinks/${category}/${id}`,
        drinkData,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (err) {
      console.error("Failed to update drink item:", err);
      throw err;
    }
  },

  async deleteDrink(category, id) {
    try {
      const response = await axios.delete(
        `http://localhost:5000/menu/drinks/${category}/${id}`,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (err) {
      console.error("Failed to delete drink item:", err);
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

export default menuAPI;
