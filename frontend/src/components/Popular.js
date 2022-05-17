import { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from 'react-router-dom';

import '../styles/popular.scss'

export default function Popular() {
	const [popular, setPopular] = useState([]);

	useEffect(() => {
		getPopular();
	}, []);

	const getPopular = async () => {
		const check = localStorage.getItem('popular');

		if (check) {
			setPopular(JSON.parse(check));
		} else {
			try {
				const api = await fetch(
					`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=8`
				);
				const data = await api.json();

				localStorage.setItem('popular', JSON.stringify(data.recipes));
				setPopular(data.recipes);
			} catch (err) {
				console.log(err);
			}
		}
	};

	return (
		<div>
			<div className='popular--box' >
				<h3>Popular recipes</h3>
				<Splide
					options={{
						perPage: 6,
						arrows: false,
						pagination: false,
						drag: 'free'
					}}
				>
					{popular.map(recipe => {
						return (
							<SplideSlide key={recipe.id}>
								<div className='popular--receipe--card'>
									<Link to={`/recipe/${recipe.id}`}>
										<p>{recipe.title}</p>
										<img src={recipe.image} alt={recipe.title} />
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
