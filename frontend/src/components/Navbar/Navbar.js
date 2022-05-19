import React from "react";
import { Link } from "react-router-dom";
import { HiHome } from 'react-icons/hi'
import { useContext } from "react"
import { userContext } from "../../providers/AuthProvider";

import "../../styles/navbar.scss"
import Login from "./Login";
import SignUp from "./SignUp";

export default function Navbar() {

  const { user, setUser } = useContext(userContext);
  return (
    <div className="nav">
      <Link className="link" to={'/'}>
        <h2 className="nav--title"> What's Supp? </h2>
      </Link>

      <Link className="link" to={'/'}>
        <HiHome />
      </Link>
      
      {user.activeUser === false && user.mode === "" && <button onClick={() => setUser(prev => ({ ...prev, mode: "SignIn"}))}>Login</button>}
      {user.activeUser === false && user.mode === "" && <button onClick={() => setUser(prev => ({ ...prev, mode: "SignUp"}))}>Sign up</button>}
      {(user.mode === "SignIn" || user.mode === "SignUp") && <Login />}
      { user.mode !== "SignIn" && user.mode === "SignUp" && <SignUp  />}
    </div>
  );
}