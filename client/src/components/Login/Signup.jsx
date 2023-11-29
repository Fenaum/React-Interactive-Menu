import { useState } from "react";
import { useNavigate } from "react-router-dom";
import menuService from "../../utils/menuService"
import UserForm from "./UserForm";
const { postUserRegistration } = menuService

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {

  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send a POST request to your server
      const response = await postUserRegistration();
    } catch (err) {
      console.error("Failed to register")
      alert("Failed to register user. Please try again later.");
    };
    setUsername(response);
  };

  return (
    <UserForm 
    username={username}
    password={password}
    email={email}
    role={role}
    formType="signup"
    onChange={handleChange}
    />
  );
}