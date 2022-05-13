import React from "react";

import "../../styles/search.scss"

export default function Search() {
  return (
    <div className="search--box">
      <label>Search Recipe: </label>
      <input type="text" className="search" placeholder="potato,tomato" />
      <button className="search--btn">Find Recipe</button>
    </div>
  );
}