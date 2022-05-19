import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import '../styles/page.scss'

export default function Searched() {
	const [searchedRecipes, setSearchedRecipes] = useState([]);
	let params = useParams();

	function getSearched(ingredients) {
		axios.get(
			`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_API_KEY}&ingredients=${ingredients}&number=18`
		)
    .then((response) => {
      const recipes = response.data;
		  setSearchedRecipes(recipes);
    })
    .catch(() => {console.log('err')});
	};

	useEffect(() => {
		getSearched(params.search);
	}, [params.search]);

	return (
    <div>
      <h1 className='result--title'> Recipes based on {params.search}</h1>

      <div className='result--items' >
        {searchedRecipes.map(recipe => {
          return (
            <div className='result--card' key={recipe.id}>
              <Link className='link' to={`/recipe/${recipe.id}`}>
                <img src={recipe.image} alt={recipe.title} />
                <h4>{recipe.title}</h4>
              </Link>
            </div>
          );
        })}
      </div>

    </div>
	);
}
