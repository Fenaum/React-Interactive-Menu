import { useNavigate } from "react-router-dom";
import menuService from "../../utils/menuService";
const { postUserLogout } = menuService;

export default function ManagerDashboard({
  user,
  setUser,
  setLastLoginLogoutTime,
}) {
  const navigate = useNavigate();

  function handleClick(event) {
    event.preventDefault();
    postUserLogout(user)
      .then((user) => {
        console.log(user, "successfully logged out");
        setUser(null);
        setLastLoginLogoutTime(Date.now());
        navigate("/");
      })
      .catch((err) => {
        console.error(err, { message: "error logging user off" });
      });
  }

  return (
    <>
      <div>Manager Dashboard</div>
      <button onClick={handleClick}>Log Out</button>
    </>
  );
}
