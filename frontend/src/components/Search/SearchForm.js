import React, { useState } from "react";
import axios from "axios";

import "../../styles/search.scss"

export default function Search() {
  const [ingredients, setIngredients] = useState("")
  const [recipe, setRecipe] = useState(null)

  function handleChange(e) {
    setIngredients(e.target.value);
  }

  function getByIngredients() {
    axios
      .get(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_API_KEY}&ingredients=${ingredients}`)
      .then((response) => {
        const result = response.data.results;
        setRecipe({result});
      })
      .catch(() => {console.log('err')});
  }

  return (
    <div className="search--box">

      <form autoComplete="off" onSubmit={(e) => e.preventDefault()}>
        <label>What you have: </label>
        <input type="text" className="search" placeholder="potato,tomato" onChange={handleChange} />
      </form>
      <button type="button" className="search--btn" onClick={getByIngredients}>Find Recipe</button>

    </div>
  );
}