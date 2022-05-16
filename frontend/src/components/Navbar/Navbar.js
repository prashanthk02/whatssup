import React from "react";

import "../../styles/navbar.scss"
import Login from "./Login";

export default function Navbar() {
  return (
    <div className="nav">
      <h2 className="nav--title"> What's Supp? </h2>
      <Login />
    </div>
  );
}