import React, { useState } from "react";

import "../../styles/search.scss"

export default function Search() {
  const [search, setSearch] = useState("")
  return (
    <div className="search--box">

      <form autoComplete="off" onSubmit={(e) => e.preventDefault()}>
        <label>What you have: </label>
        <input type="text" className="search" placeholder="potato,tomato" />
      </form>
      <button type="button" className="search--btn">Find Recipe</button>

    </div>
  );
}