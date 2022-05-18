import React, { useEffect, useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import {userContext} from '../providers/AuthProvider';


export default function Cuisine() {
	const [favorites, setFavorites] = useState([]);

	let params = useParams();

  const { user} = useContext(userContext);
   // get user's favorite recipes control
   const getUserFavorite = async (userId) => {
    if (userId) {
      axios.get(`http://localhost:8080/favorite/${userId}`)
      .then((response) => {
        setFavorites(response.data);
      });
    } 
  };
  
	useEffect(() => {
		getUserFavorite(params.id);
	}, [params.id]);

	return (
		<div>
			{favorites.map(recipe => {
				return (
					<div key={recipe.id}>
						<Link to={`/recipe/${recipe.id}`}>
							<img src={recipe.image} alt={recipe.title} />
							<h4>{recipe.title}</h4>
						</Link>
					</div>
				);
			})}
		</div>
	);
}