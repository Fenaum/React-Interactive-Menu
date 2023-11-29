import { useState, useEffect } from "react";
import UserForm from "./UserForm";
import "./User.css";
import { postUserLogin } from "../../utils/menuService";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
    } catch (err) {
      // handle error here
      // for example, you can show an error message to the user
    }
  };

  return (
    <UserForm
      onSubmit={() => handleLogin(username, password)}
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
    />
  );
}
