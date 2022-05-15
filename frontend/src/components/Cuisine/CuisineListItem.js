import { useState, useEffect } from "react";

import "../../styles/cuisine.scss"

export default function CuisineListItem({ singleRecipe }) {

  return(
    <article className="recipeBox">
      <h1 className="recipeBox--title">{singleRecipe.title}</h1>
      <img src={singleRecipe.image} alt={singleRecipe.title} />
    </article>
  );
}