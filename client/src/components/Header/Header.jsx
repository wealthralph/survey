import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../utilities/slices/authSlice";
import Payment from "../Payment";

const Header = () => {
  const user = useSelector(selectUser);
  

  const renderContent = () => {
    switch (user) {
      case null:
        return <li>still deciding</li>;
      case false:
        return (
          <li>
            <a href="/auth/google">Login with google</a>
          </li>
        );
      default:
        return [
          <li><Payment/></li>,
          <li>{user?.credits}</li>,
          <li>
            <a href="/api/logout">Log Out</a>
          </li>

        ]
        
    }
  };

  return (
    <nav className="nav--wrapper">
      <div className="nav--container">
        <Link to={user ? '/surveys' : '/'}> Survey </Link>
        <ul className="nav--links">
          {renderContent()}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
