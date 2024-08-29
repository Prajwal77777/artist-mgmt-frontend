import React from "react";
import {
  FaTh,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaSignOutAlt,
} from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/user",
      name: "User",
      icon: <FaUserAlt />,
    },
    {
      path: "/artist",
      name: "Artist",
      icon: <FaRegChartBar />,
    },
    {
      path: "/songs",
      name: "Songs",
      icon: <FaCommentAlt />,
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div
          className="col-auto col-md-2 px-sm-2 px-0 bg-dark sidebar d-flex flex-column justify-content-between"
          style={{ minHeight: "100vh" }}
        >
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-3 text-white">
            <a
              href="/"
              className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
              <span className="fs-5 d-none d-sm-inline">Menu</span>
            </a>
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start w-100"
              id="menu"
            >
              {menuItem.map((item, index) => (
                <li className="nav-item w-100" key={index}>
                  <NavLink
                    to={item.path}
                    className="nav-link align-middle px-3 py-2 text-white rounded-3 d-flex align-items-center"
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? "#0d6efd" : "transparent",
                      color: "white",
                      transition: "background-color 0.3s ease",
                      width: "100%",
                      padding: "10px 15px",
                    })}
                  >
                    {item.icon}
                    <span className="ms-3 d-none d-md-inline">{item.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="px-3 pb-3 w-100">
            <button
              onClick={handleLogout}
              className="btn btn-danger w-100 d-flex align-items-center justify-content-center"
              style={{ padding: "10px 15px" }}
            >
              <FaSignOutAlt className="me-2" />
              Logout
            </button>
          </div>
        </div>
        <div className="col py-3">
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
