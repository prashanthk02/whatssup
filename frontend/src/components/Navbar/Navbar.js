import React from "react";

import "../../styles/navbar.scss"
import Login from "./Login";
import SignUp from "./SignUp";

export default function Navbar() {
  return (
    <div className="nav">
      <h2 className="nav--title"> What's Supp? </h2>
      <Login />
      <SignUp />
    </div>
  );
}