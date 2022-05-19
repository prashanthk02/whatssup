import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HiHome } from 'react-icons/hi'

import "../../styles/navbar.scss"
import Login from "./Login";
import SignUp from "./SignUp";

export default function Navbar() {
  const [mode, setMode] = useState("")
  return (
    <div className="nav">
      <Link className="link" to={'/'}>
        <h2 className="nav--title"> What's Supp? </h2>
      </Link>

      <Link className="link" to={'/'}>
        <HiHome />
      </Link>
      
      {mode === "" && <button onClick={() => setMode("SignIn")}>Login</button>}
      {mode === "" && <button onClick={() => setMode("SignUp")}>Sign up</button>}
      {(mode === "SignIn" || mode === "SignUp") && <Login mode={mode} setMode={setMode} />}
      {( mode === "SignUp") && <SignUp mode={mode} setMode={setMode} />}
    </div>
  );
}