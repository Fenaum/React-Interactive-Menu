import { useState } from "react";
import { useNavigate } from "react-router-dom";
import menuService from "../../utils/menuService"
import UserForm from "./UserForm";
const { postUserRegistration } = menuService;

export default function Signup() {
  const [formState, setFormState] = useState({
    username: "",
    password: "",
    email: "",
    role: ""
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name } = event.target
    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: event.target.value
    }))
  };
  
  console.log(formState);
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send a POST request to your server
      const response = await postUserRegistration(formState);
      navigate('/user-dashboard');
    } catch (err) {
      console.error("Failed to register")
      alert("Failed to register user. Please try again later.");
      throw err;
    };
  };

  return (
    <UserForm 
    username={formState.username}
    password={formState.password}
    email={formState.email}
    role={formState.role}
    formType="signup"
    handleChange={handleChange}
    handleSubmit={handleSubmit}
    />
  );
}