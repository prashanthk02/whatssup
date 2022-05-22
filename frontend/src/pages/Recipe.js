import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/recipe.scss'
import axios from "axios";
import { GiCoolSpices } from 'react-icons/gi'
import { BiMessageDetail } from 'react-icons/bi'
import { BsFillBookmarkHeartFill } from 'react-icons/bs'
import { userContext } from '../providers/AuthProvider';

export default function Recipe() {
	let params = useParams();
	const { user, setUser } = useContext(userContext);

	const [details, setDetails] = useState();
	const [activeTab, setActiveTab] = useState('ingredients');

	useEffect(() => {
		function getDetails() {
			axios.get(
				`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
			)
      .then((response) => {
        const detailData = response.data;
        setDetails(detailData);
      })
      .catch(() => {console.log('err')});
		};
		getDetails();
	}, [params.name]);

	//helper function to handle add recipe to favorite list.
	function addToFavorite() {
		setActiveTab('favorites')
		return axios.post(`http://localhost:8080/favorite`, { user_id: user.user_id, recipeid: details.id, title: details.title, image: details.image })
			.then((response) => {
				setUser(prev => ({ ...prev, message: response.data.message }))
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
					className={activeTab === 'favorites' ? 'active' : ''}
					onClick={() => addToFavorite()}
				>
					Add to favorites <BsFillBookmarkHeartFill />
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

          {activeTab === 'favorites' && (
              <h2> {user.message} </h2>
					)}

				</div>

			</div>
		</div>
	);
}
