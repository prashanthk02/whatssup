import React from "react";

import SearchResultsListItem from "./SearchResultsListItem";

export default function SearchResults(recipe) {
  console.log('recipe---3', recipe);
  
  return (
    <section>
      <h3>List</h3>
      {/* {recipe.map((r) => {
        return <SearchResultsListItem key={r.id} singleRecipe={r} />;
      })} */}

    </section>
  );
}