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
  },

  async fetchUser() {
    try {
      const response = await axios.get(
        "http://localhost:5000/service/user/profile"
      );
      return response.data;
    } catch (err) {
      console.log("Failed to load user information:", err);
      throw err;
    }
  },

  async postUserLogin() {
    try {
      const response = await axios.post(
        "http://localhost:5000/service/user/login",
        {
          username,
          password,
        }
      );
      return response.data;
    } catch (err) {
      console.error("Failed to post user login:", err);
      throw err;
    }
  },

  async postUserRegistration() {
    try {
      const response = await axios.post(
        "http://localhost:5000/service/user/register",
        {
          username,
          password,
          email,
          role,
        }
      );
      return response.data;
    } catch (err) {
      console.error("Failed to post user registration:", err);
      throw err;
    }
  },

  async postUserLogout() {
    try {
      const response = await axios.post(
        "http://localhost:5000/service/userlogout"
      );
      return response.data;
    } catch (err) {
      console.error("Failed to post user logout:", err);
      throw err;
    }
  }
};

const fetchUser = async function() {
  try {
    const response = await axios.get('http://localhost:5000/service/user/profile');
    return response.data;
  } catch (err) {
    console.log('Failed to load user information:', err);
    throw err;
  }
}

const postUserLogin = async function (username, password,) {
  try {
    const response = await axios.post("http://localhost:5000/service/user/login", {
      username,
      password,
    });
    return response.data;
  } catch (err) {
    console.error("Failed to post user login:", err);
    throw err;
  }
};

const postUserRegistration = async function (username, password, email, role) {
  try {
    const response = await axios.post("http://localhost:5000/service/user/register", {
      username,
      password,
      email,
      role,
    });
    return response.data;
  } catch (err) {
    console.error("Failed to post user registration:", err);
    throw err;
  }
};

const postUserLogout = async function () {
  try {
    const response = await axios.post("http://localhost:5000/service/userlogout");
    return response.data;
  } catch (err) {
    console.error("Failed to post user logout:", err);
    throw err;
  }
};

export default fetchMenuItems;

