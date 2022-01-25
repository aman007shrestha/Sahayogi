import React, { useContext } from "react";
import "./Sidebar.css";
import { SidebarData } from "./SidebarData";
import { Link } from "react-router-dom";
import { DetailContext } from "../../App";
import LogoutIcon from "@mui/icons-material/Logout";
const Sidebar = () => {
  //  conditionally render logout/login
  const { loginStatus } = useContext(DetailContext);
  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        {SidebarData.map((val, key) => {
          return (
            <li className="row" key={key}>
              <Link to={val.path}>
                <div id="icon">{val.icon}</div>
                <div id="title">{val.title}</div>
              </Link>
            </li>
          );
        })}
        <li className="row">
          {loginStatus === false ? (
            <Link to="/login">
              <div id="icon"></div>
              <div id="title">Login</div>
            </Link>
          ) : (
            <Link to="logout">
              <div id="icon">
                <LogoutIcon />
              </div>
              <div id="title">Logout</div>
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
