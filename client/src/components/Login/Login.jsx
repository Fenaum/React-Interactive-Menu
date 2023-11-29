import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom"; 
import UserForm from "./UserForm.jsx";
import "./User.css";
import fetchMenuItems from "../../utils/menuService";
const { postUserLogin } = fetchMenuItems;

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");
    if (savedUsername && savedPassword) {
      handleLogin(savedUsername, savedPassword);
    }
  }, []);

  const handleLogin = async (username, password) => {
    try {
      const user = await postUserLogin(username, password);
      // handle successful login here
      // for example, you can redirect the user to their dashboard
      navigate.push("/dashboard"); // Redirect to the "/dashboard" route
    } catch (err) {
      // handle error here
      // for example, you can show an error message to the user
    }
  };

  return (
    <>
      <UserForm
        onSubmit={() => handleLogin(username, password)}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        formType="login"
      />
      <Link to="/signup" >
        <h2>Register here</h2>
      </Link>
    </>
  );
}
