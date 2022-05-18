import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import "../../styles/navbar.scss"
import Login from "./Login";
import SignUp from "./SignUp";

export default function Navbar() {
  const [mode, setMode] = useState("")
  return (
    <div className="nav">
      <NavLink className="link" to={'/'}>
        <h2 className="nav--title"> What's Supp? </h2>
      </NavLink>
      {mode === "" && <button onClick={() => setMode("SignIn")}>Login</button>}
      {mode === "" && <button onClick={() => setMode("SignUp")}>Sign up</button>}
      {(mode === "SignIn" || mode === "SignUp") && <Login mode={mode} setMode={setMode} />}
      {( mode === "SignUp") && <SignUp mode={mode} setMode={setMode} />}
    </div>
  );
}