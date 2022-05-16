import React from "react";

export default function SearchResultsListItem(singleRecipe) {

  return (
    <article className="recipeBox">
      <h1 className="recipeBox--title">{singleRecipe.title}</h1>
      <img src={singleRecipe.image} alt={singleRecipe.title} />
    </article>
  );
}