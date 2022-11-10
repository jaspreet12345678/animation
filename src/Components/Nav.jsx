import React from "react";
import { Link } from "react-router-dom"
import "../App.css"
import SignUp from './Signup';

const Nav = () => {
  return (
    <nav>
      <ul style={{ display: "flex" }}>
        <li style={{ listStyle: "none", margin: "23px" }}>
          <Link to="/">Products</Link>
        </li>
        <li style={{ listStyle: "none", margin: "23px" }}>
          <Link to="/add">Add Products</Link>
        </li>
        <li style={{ listStyle: "none", margin: "23px" }}>
          <Link to="/update">Update Products</Link>
        </li>
        <li style={{ listStyle: "none", margin: "23px" }}>
          <Link to="/logout">Logout</Link>
        </li>
        <li style={{ listStyle: "none", margin: "23px" }}>
          <Link to="/profile">Profile</Link>
        </li>
        <li style={{ listStyle: "none", margin: "23px" }}>
          <Link to="/signup">SignUp</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
