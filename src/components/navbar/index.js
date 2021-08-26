import React, { useContext } from "react";
import logo from "../../assets/images/logo.png";
import "./navbar.css";
import app from "../../base";
import { AuthContext } from "../../Auth";

const Navigation = () => {
  const { currentUser } = useContext(AuthContext);
  // console.log(currentUser);

  if (
    window.location.pathname === "/login" ||
    window.location.pathname === "/register"
  ) {
    return null;
  }
  return (
    <nav>
      <div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <img src={logo} alt="" />
      <div>
        {currentUser ? (
          <button onclick={() => app.auth().signOut()}>Sign out</button>
        ) : (
          <>
            <button>Log in</button>
            <button>Sign up</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
