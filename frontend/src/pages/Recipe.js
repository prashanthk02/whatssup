import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import {userContext} from '../providers/AuthProvider';

export default function Recipe() {
	let params = useParams();
	const { user } = useContext(userContext);
	console.log("user is here:", user)

	const [details, setDetails] = useState();
	const [activeTab, setActiveTab] = useState('ingredients');

	useEffect(() => {
		const fetchDetails = async () => {
			const data = await fetch(
				`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
			);
			const detailData = await data.json();
			setDetails(detailData);
		};
		fetchDetails();
	}, [params.name]);

	  //helper function to handle add recipe to favorite list.
		function addToFavorite() {
			return axios.post(`http://localhost:8080/favorite`, {user_id: 1, id: params.name, title: details.title, image: details.image})
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
					className={activeTab === 'ingredients' ? 'active' : ''}
					onClick={() => setActiveTab('ingredients')}
				>
					Ingredients
				</button>
				<button
					onClick={() => addToFavorite()}
				>
					Add to favorite
				</button>

				<button
					className={activeTab === 'instructions' ? 'active' : ''}
					onClick={() => setActiveTab('instructions')}
				>
					Instructions
				</button>

        {activeTab === 'ingredients' && (
          <ul>
            {details?.extendedIngredients.map(ingredient => {
              return <li key={ingredient.id}>{ingredient.original}</li>;
            })}
          </ul>
        )}

				{activeTab === 'instructions' && (
					<div>
						<h3 dangerouslySetInnerHTML={{ __html: details?.summary }}></h3>
						<h3
							dangerouslySetInnerHTML={{ __html: details?.instructions }}
						></h3>
					</div>
				)}

			</div>
		</div>
	);
}
