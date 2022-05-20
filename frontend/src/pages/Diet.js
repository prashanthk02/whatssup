import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import '../styles/page.scss'

export default function Diet() {
	const [meal, setMeal] = useState([]);

	let params = useParams();

	function getDiet(diet) {
		axios.get(
			`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&diet=${diet}&number=23`
		)
    .then((response) => {
      const recipes = response.data.results;
		  setMeal(recipes);
    })
    .catch(() => {console.log('err')});
	};

	useEffect(() => {
		getDiet(params.dietplan);
	}, [params.dietplan]);

	return (
    <div>
      <h1 className='result--title'> {params.dietplan} Recipes </h1>

      <div className='result--items' >
        {meal.map(recipe => {
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