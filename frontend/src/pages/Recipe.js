import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/recipe.scss'
import axios from "axios";
import { GiCoolSpices } from 'react-icons/gi'
import { BiMessageDetail } from 'react-icons/bi'
import { BsBookmarkStar } from 'react-icons/bs'

export default function Recipe() {
	let params = useParams();

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
		<div className='details' >
			<div>
				<h2>{details?.title}</h2>
				<img src={details?.image} alt="" />
			</div>
			<div>

				<button
					className={activeTab === 'ingredients' ? 'active' : ''}
					onClick={() => setActiveTab('ingredients')}
				>
					Ingredients <GiCoolSpices />
				</button>

				<button
					className={activeTab === 'instructions' ? 'active' : ''}
					onClick={() => setActiveTab('instructions')}
				>
					Instructions <BiMessageDetail />
				</button>

				<button
					onClick={() => addToFavorite()}
				>
					Add to favorites <BsBookmarkStar />
				</button>

        <div className='details--div' >
          {activeTab === 'ingredients' && (
            <ul>
              {details?.extendedIngredients.map(ingredient => {
                return <li key={ingredient.id}>{ingredient.original}</li>;
              })}
            </ul>
          )}

          {activeTab === 'instructions' && (
            <div>
              <h4 dangerouslySetInnerHTML={{ __html: details?.summary }}></h4>
              <h3
                dangerouslySetInnerHTML={{ __html: details?.instructions }}
              ></h3>
            </div>
          )}
        </div>

			</div>
		</div>
	);
}
