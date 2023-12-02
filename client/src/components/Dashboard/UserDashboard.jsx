import { useNavigate } from "react-router-dom";
import menuService from "../../utils/menuService";
const { postUserLogout } = menuService;

export default function UserDashboard({ setUser, setLastLoginLogoutTime }) {
  const navigate = useNavigate();

  function handleClick(event) {
    event.preventDefault();
    postUserLogout()
      .then((user) => {
        console.log(user, "successfully logged out");
        setLastLoginLogoutTime(Date.now());
        navigate("/");
      })
      .catch((err) => {
        console.error(err, { message: "error logging user off" });
      });
  }

  return (
    <>
      <div>User Dahsboard</div>
      <button onClick={handleClick}>Log Out</button>
    </>
  );
}
