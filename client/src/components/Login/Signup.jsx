import { useState } from "react";
import { useNavigate } from "react-router-dom";
import menuAPI from "../../utils/menuService";
import UserForm from "./UserForm";
const { postUserRegistration } = menuAPI;

export default function Signup({ setLastLoginLogoutTime }) {
  const [formState, setFormState] = useState({
    username: "",
    password: "",
    email: "",
    role: "",
  });

  const navigate = useNavigate();

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
      // Send a POST request to your server
      const user = await postUserRegistration(formState);
      console.log(user);
      setLastLoginLogoutTime(Date.now());
      switch (user.role) {
        case "manager":
          navigate('/manager-dashboard')
          break;
          case "employee":
          navigate('/employee-dashboard')
          break;
          case "user":
          navigate('/user-dashboard')
          break;
        default:
      }
    } catch (err) {
      console.error("Failed to register");
      alert("Failed to register user. Please try again later.");
      throw err;
    }
  };

  return (
    <div className="login-container">
      <UserForm
        username={formState.username}
        password={formState.password}
        email={formState.email}
        role={formState.role}
        formType="signup"
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
