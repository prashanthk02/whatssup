import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Cuisine() {
	const [cuisine, setCuisine] = useState([]);

	let params = useParams();

	const getCuisine = async name => {
		const data = await fetch(
			`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
		);
		const recipes = await data.json();
		setCuisine(recipes.results);
	};

	useEffect(() => {
		getCuisine(params.type);
	}, [params.type]);

	return (
		<div>
			{cuisine.map(recipe => {
				return (
					<div key={recipe.id}>
						<Link to={`/recipe/${recipe.id}`}>
							<img src={recipe.image} alt={recipe.title} />
							<h4>{recipe.title}</h4>
						</Link>
					</div>
				);
			})}
		</div>
	);
}