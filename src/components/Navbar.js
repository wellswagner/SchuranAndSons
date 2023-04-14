import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { SignedIn, UserButton, useUser } from "@clerk/clerk-react";
import "../index.css"
import instagramIcon from "../images/instagramIcon.png"
const Navbar = ({ username, loggedIn }) => {
  const { user } = useUser()
  return (
    <>
      <div id="navbarMain">
        <div id="navLeft">
          <Link to="/">
            <img id="logo" src={logo} alt="SchuranAndSons" />
          </Link>
          <h1>Schuran and Sons</h1>
        </div>
        <div id="navRight">
          <SignedIn>
            <h3 id="welcomeBanner">Welcome Back, {user.username}! </h3>
          </SignedIn>
          {(username && loggedIn) && <h4>Welcome Back, {username}</h4>}
          <a href="https://instagram.com/schuran_and_sons/" rel="external" target="_blank">
            <img id="instagramLink" src={instagramIcon} alt="instagramIcon" />
          </a>
          <Link to="/">Home</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/Shop">Shop</Link>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div >
    </>
  );
};

export default Navbar;


