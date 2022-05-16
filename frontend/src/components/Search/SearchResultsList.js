import React from "react";

import SearchResultsListItem from "./SearchResultsListItem";

export default function SearchResults({recipe}) {
  console.log('recipe+++++', recipe);
  
  return (
    <section>
      <h1>List</h1>
      {recipe.results.map((r) => {
        return <SearchResultsListItem key={r.id} singleRecipe={r} />;
      })}

    </section>
  );
}