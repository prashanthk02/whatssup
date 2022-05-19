import React from "react";
import { useContext } from "react"
import { userContext } from "../../providers/AuthProvider";
import { NavLink } from "react-router-dom";

import "../../styles/navbar.scss"
import Login from "./Login";
import SignUp from "./SignUp";

export default function Navbar() {

  const { user, setUser } = useContext(userContext);
  return (
    <div className="nav">
      <NavLink to={'/'}>
        <h2 className="nav--title"> What's Supp? </h2>
      </NavLink>
      {user.mode === "" && <button onClick={() => setUser(prev => ({ ...prev, mode: "SignIn"}))}>Login</button>}
      {user.mode === "" && <button onClick={() => setUser(prev => ({ ...prev, mode: "SignUp"}))}>Sign up</button>}
      {(user.mode === "SignIn" || user.mode === "SignUp") && <Login />}
      {( user.mode === "SignUp") && <SignUp  />}
    </div>
  );
}