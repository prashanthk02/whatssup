import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import '../styles/page.scss'

export default function Cuisine() {
	const [cuisine, setCuisine] = useState([]);

	let params = useParams();

	function getCuisine(name) {
		axios.get(
			`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=23`
		)
    .then((response) => {
      const recipes = response.data.results;
		  setCuisine(recipes);
    })
    .catch(() => {console.log('err')});
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