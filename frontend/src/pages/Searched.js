import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function Searched() {
	const [searchedRecipes, setSearchedRecipes] = useState([]);
	let params = useParams();

	function getSearched(ingredients) {
		axios.get(
			`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_API_KEY}&ingredients=${ingredients}`
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
			{searchedRecipes.map(recipe => {
				return (
					<Link to={`/recipe/${recipe.id}`}>
						<div key={recipe.id}>
							<img src={recipe.image} alt={recipe.title} />
							<h4>{recipe.title}</h4>
						</div>
					</Link>
				);
			})}
		</div>
	);
}
