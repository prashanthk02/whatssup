import React from "react";
import { useState } from "react";

import "../../styles/navbar.scss"
import Login from "./Login";

export default function Navbar() {
  const [mode, setMode] = useState("")
  return (
    <div className="nav">
      <h2 className="nav--title"> What's Sup? </h2>
      <div className="nav--login_signup">
        {mode == "" && <button onClick={() => setMode("SignIn")}>Login</button>}
        <span>/</span>
        {mode == "" && <button onClick={() => setMode("SignUp")}>Sign up</button>}
        {(mode == "SignIn" || mode == "SignUp") && <Login mode={mode} setMode={setMode}/>}
      </div>
    </div>
  );
}