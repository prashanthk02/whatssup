import React, {useState} from "react";
import axios from "axios";

import CuisineList from './CuisineList'

export default function Cuisine() {
  const [cuisine, setCuisine] = useState('');
  const [recipe, setRecipe] = useState(null)

  function handleChange(e) {
    setCuisine(e.target.value);
  }

  function getCuisine() {
    axios
      .get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${cuisine}`)
      .then((response) => {
        const result = response.data.results;
        setRecipe({result});
      })
      .catch(() => {console.log('err')});
  }

  return (
    <div className="cuisine">
      <form className="cuisine--form">
        <input placeholder="Thai" onChange={handleChange} />
      </form>
      <button onClick={getCuisine} >GET</button>
      {recipe && <CuisineList recipe={recipe} />}
    </div>
  );
}