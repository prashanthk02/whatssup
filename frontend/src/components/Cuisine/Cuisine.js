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
      <form>
        <label className="cusisine--label">Search By Cuisine: </label>
        <select placeholder="Thai" className="cuisine--form" onChange={handleChange}>
          <option value="African" className="cuisine--option">African</option>
          <option value="American" className="cuisine--option">American</option>
          <option value="Caribbean" className="cuisine--option">Caribbean</option>
          <option value="Chinese" className="cuisine--option">Chinese</option>
          <option value="French" className="cuisine--option">French</option>
          <option value="Greek" className="cuisine--option">Greek</option>
          <option value="Indian" className="cuisine--option">Indian</option>
          <option value="Italian" className="cuisine--option">Italian</option>
          <option value="Japanese" className="cuisine--option">Japanese</option>
          <option value="Mexican" className="cuisine--option">Mexican</option>
          <option value="Middle Eastern" className="cuisine--option">Middle Eastern</option>
          <option value="Thai" className="cuisine--option">Thai</option>
        </select>
      </form>
      <button onClick={getCuisine} >GET</button>
      {recipe && <CuisineList recipe={recipe} />}
    </div>
  );
}