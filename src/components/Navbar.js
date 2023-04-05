import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import { SignedIn, UserButton } from "@clerk/clerk-react";
import "../index.css"

const Navbar = ({ username, loggedIn }) => {
  return (
    <div id="navbarMain">
      <div id="navLeft">
        <Link to="/">
          <img id="logo" src={logo} alt="SchuranAndSons" />
        </Link>
        <h1>Schuran and Sons</h1>
      </div>
      <div id="navRight">
        {(username && loggedIn) && <h4>Welcome Back, {username}</h4>}
        <Link to="/">Home</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/Login">Login/Register</Link>
        <Link to="/Shop">Shop</Link>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
