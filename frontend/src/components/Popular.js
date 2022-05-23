import { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../styles/popular.scss'

export default function Popular() {
	const [popular, setPopular] = useState([]);

	function getPopular() {
		const check = localStorage.getItem('popular');

		if (check) {
			setPopular(JSON.parse(check));
		} else {
				axios.get(
					`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12`
				)
        .then((response) => {
          const data = response.data;
          localStorage.setItem('popular', JSON.stringify(data.recipes));
          setPopular(data.recipes);
        })
        .catch(() => {console.log('err')});
			}
		};
  
  useEffect(() => {
		getPopular();
	}, []);

	return (
		<div>
			<div className='popular--box' >
				<h1>Popular recipes</h1>
				<Splide
					options={{
            perPage: 4,
            perMove: 1,
            type: 'loop',
            focus: 'center',
            drag: 'free',
					}}
				>
					{popular.map(recipe => {
						return (
							<SplideSlide key={recipe.id}>
								<div className='popular--receipe--card'>
									<Link className='link' to={`/recipe/${recipe.id}`}>
										<img src={recipe.image} alt={recipe.title} />
										<p>{recipe.title}</p>
									</Link>
								</div>
							</SplideSlide>
						);
					})}
				</Splide>
			</div>
		</div>
	);
}
