import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";

export default function Recipe() {
	let params = useParams();

	const [details, setDetails] = useState();
	const [activeTab, setActiveTab] = useState('instructions');

	useEffect(() => {
		const fetchDetails = async () => {
			const data = await fetch(
				`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
			);
			const detailData = await data.json();
			setDetails(detailData);
			console.log(detailData);
		};
		fetchDetails();
	}, [params.name]);

	  //helper function to handle add recipe to favorite list.
		function addToFavorite() {
			return axios.post(`http://localhost:8080/favorite`, {user_id: 1, title: details.title, image: details.image})
				.then(() => {
				});
		}

	return (
		<div>
			<div>
				<h2>{details?.title}</h2>
				<img src={details?.image} alt="" />
			</div>
			<div>
				<button
					className={activeTab === 'instructions' ? 'active' : ''}
					onClick={() => setActiveTab('instructions')}
				>
					Instructions
				</button>
				<button
					className={activeTab === 'ingredients' ? 'active' : ''}
					onClick={() => setActiveTab('ingredients')}
				>
					Ingredients
				</button>
				<button
					className={activeTab === 'ingredients' ? 'active' : ''}
					onClick={() => addToFavorite()}
				>
					Add to favorite
				</button>

				{activeTab === 'instructions' && (
					<div>
						<h3 dangerouslySetInnerHTML={{ __html: details?.summary }}></h3>
						<h3
							dangerouslySetInnerHTML={{ __html: details?.instructions }}
						></h3>
					</div>
				)}
				{activeTab === 'ingredients' && (
					<ul>
						{details?.extendedIngredients.map(ingredient => {
							return <li key={ingredient.id}>{ingredient.original}</li>;
						})}
					</ul>
				)}
			</div>
		</div>
	);
}
