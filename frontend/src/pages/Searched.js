import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Searched() {
	const [searchedRecipes, setSearchedRecipes] = useState([]);
	let params = useParams();

	const getSearched = async name => {
		const data = await fetch(
			`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
		);
		const recipes = await data.json();
		setSearchedRecipes(recipes.results);
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
