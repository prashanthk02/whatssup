import { useState, useEffect } from "react";

export default function CuisineListItem({ singleRecipe }) {
  const [image, setimage] = useState('');

  return(
    <article>
      <h1>{singleRecipe.title}</h1>
      <img src={singleRecipe.image} />
    </article>
  );
}