import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import '../styles/page.scss'

export default function Meal() {
	const [meal, setMeal] = useState([]);

	let params = useParams();

	function getMeal(cals) {
		axios.get(
			`https://api.spoonacular.com/mealplanner/generate?apiKey=${process.env.REACT_APP_API_KEY}&timeFrame=day&targetCalories=${cals}`
		)
    .then((response) => {
      const recipes = response.data.meals;
		  setMeal(recipes);
    })
    .catch(() => {console.log('err')});
	};

	useEffect(() => {
		getMeal(params.mealplan);
	}, [params.mealplan]);

	return (
		<div className='result--items' >
			{meal.map(recipe => {
				return (
        <div className='result--card' key={recipe.id}>
					<Link className='link' to={`/recipe/${recipe.id}`}>
							<h4>{recipe.title}</h4>
              <p>Number of servings: {recipe.servings}</p>
              <p>Preparation time: {recipe.readyInMinutes} Minutes</p>
					</Link>
        </div>
				);
			})}
		</div>
	);
}