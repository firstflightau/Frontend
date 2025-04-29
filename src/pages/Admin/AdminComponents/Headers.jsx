import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo/logo.png";
import { logout } from "../../../redux/slices/login/loginSlice";
import { useDispatch } from "react-redux";

const Headers = ({ isCollapsed }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    console.log("clickend");
    sessionStorage.clear("");
    dispatch(logout());
    navigate("/");
  };

  return (
    <header
      className={`bg-white transition-all duration-300 shadow-sm sticky w-full  top-0 z-10`}
    >
      <div className="flex w-full items-center justify-between h-16 px-8">
        <div className="flex items-center w-full justify-between">
          <div className="logo">
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className="changeLogo w-[80%] sm:w-[80%]"
              />
            </Link>
          </div>
          <button
            onClick={() => handleLogout()}
            className="bg-secondary-6000 text-white px-4 py-2 rounded hover:bg-secondary-700"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Headers;
