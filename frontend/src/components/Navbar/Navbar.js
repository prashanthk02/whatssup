import React from "react";
import { Link } from "react-router-dom";
import { HiHome } from 'react-icons/hi'
import { useContext } from "react"
import { userContext } from "../../providers/AuthProvider";
import { GiSpoon } from 'react-icons/gi'

import "../../styles/navbar.scss"
import Login from "./Login";
import SignUp from "./SignUp";

export default function Navbar() {

  const { user, setUser } = useContext(userContext);  

  return (
    <div className="nav">   
      <div>
        <Link className="link" to={'/'}>
          <h2 className="nav--title"> What's Sup? <GiSpoon /> </h2>
        </Link>
      </div>

      <Link className="link-home" to={'/'}>
        <HiHome />
      </Link>

      <div className="nav--options">
        {(user.mode === "SignUp" || user.mode === "SignIn" || user.mode === "" ) && user.activeUser === false && <button className="loginicon" onClick={() => setUser(prev => ({ ...prev, mode: "SignIn"}))}>Login</button>}
      
        {(user.mode === "SignUp" || user.mode === "SignIn" || user.mode === "") && user.activeUser === false && <button className="signupicon" onClick={() => setUser(prev => ({ ...prev, mode: "SignUp"}))}>Sign up</button>}

      </div>

      {user.mode === "SignIn" && <Login />}
      {user.mode === "SignUp" && <SignUp />}


    </div>
  );
}