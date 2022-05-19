import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import '../styles/page.scss'

export default function Cuisine() {
	const [cuisine, setCuisine] = useState([]);

	let params = useParams();

	const getCuisine = async name => {
		const data = await fetch(
			`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=23`
		);
		const recipes = await data.json();
		setCuisine(recipes.results);
	};

	useEffect(() => {
		getCuisine(params.type);
	}, [params.type]);

	return (
    <div>
      <h1 className='result--title'> Recipes for {params.type} cuisine </h1>

      <div className='result--items' >
			  {cuisine.map(recipe => {
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