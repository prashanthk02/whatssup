import React from "react";
import { Link } from 'react-router-dom'

import "../../styles/footer.scss"

export default function Footer() {
  return (
    <div className="footer">
      <h3>
        <Link className="link" to={'/'}>
          Home
        </Link>
      </h3>
      <h3>About</h3>
      <h3>Contact</h3>
    </div>
  );
}