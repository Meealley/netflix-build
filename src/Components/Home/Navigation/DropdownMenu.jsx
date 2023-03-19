import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../store/auth-context";
import "./DropdownMenu.css";

const DropdownMenu = () => {
  const ctx = useContext(AuthContext);

  return (
    <div>
      <div className="dropdownprofile">
        <ul className="lists">
          <li>Profile</li>
          <li>settings</li>
          <li>
            <Link to="/" onClick={ctx.onLogout}>
              logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;
