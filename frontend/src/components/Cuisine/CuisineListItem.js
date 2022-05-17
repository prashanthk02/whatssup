import axios from "axios";
import { useState, useEffect } from "react";
import Instructions from "./Instructions";
import Ingredients from "./Ingredients";

import "../../styles/cuisine.scss"

export default function CuisineListItem({ singleRecipe }) {
  const [instructions, SetInstructions] = useState("");
  const [ingredients, setIngredients] = useState("");

  function getInstructions() {
    axios
      .get(`https://api.spoonacular.com/recipes/${singleRecipe.id}/analyzedInstructions?apiKey=${process.env.REACT_APP_API_KEY}`)
      .then((response) => {
        const result = response.data;
        SetInstructions({result});
      })
      .catch(() => {console.log('err')}); 
  }

  function getIngredients() {
    axios
      .get(`https://api.spoonacular.com/recipes/${singleRecipe.id}/ingredientWidget.json?apiKey=${process.env.REACT_APP_API_KEY}`)
      .then((response) => {
        const result = response.data;
        setIngredients({result});
      })
      .catch(() => {console.log('err')});
  }

  return(
    <article className="recipeBox">
      <h1 className="recipeBox--title">{singleRecipe.title}</h1>
      <img src={singleRecipe.image} alt={singleRecipe.title} />
      <button onClick={getInstructions}>Steps</button>
      {instructions && <Instructions instructions={instructions} />}
      <button onClick={getIngredients}>Ingredients</button>
      {ingredients && <Ingredients ingredients={ingredients} />}
    </article>
  );
}