import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom"; 
import UserForm from "./UserForm.jsx";
import "./User.css";
import fetchMenuItems from "../../utils/menuService";
const { postUserLogin } = fetchMenuItems;

export default function Login({ setLastLoginLogoutTime }) {
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");
    if (savedUsername && savedPassword) {
      handleLogin(formState);
    }
  }, []);

  const handleChange = (event) => {
    const { name } = event.target;
    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await postUserLogin(formState);
      console.log(user);
      setLastLoginLogoutTime(Date.now());
      // handle successful login here
      // for example, you can redirect the user to their dashboard
      switch (user.role) {
        case "manager":
          navigate("/manager-dashboard");
          break;
        case "employee":
          navigate("/employee-dashboard");
          break;
        case "user":
          navigate("/user-dashboard");
          break;
        default:
      }
    } catch (err) {
      // handle error here
      // for example, you can show an error message to the user
      console.error("Failed to log in");
      alert("Failed to log in user. Please try again later.");
      throw err;
    }
  };

  return (
    <>
      <UserForm
        onSubmit={() => handleLogin(username, password)}
        username={formState.username}
        password={formState.password}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formType="login"
      />
      <Link to="/signup">
        <h2>Register here</h2>
      </Link>
    </>
  );
}
