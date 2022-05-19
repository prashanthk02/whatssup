import React, { useEffect, useState } from 'react';
import '../styles/recipe.scss';
import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import { BsTrashFill } from 'react-icons/bs';

export default function Cuisine() {
	const [favorites, setFavorites] = useState([]);

	let params = useParams();

   // get user's favorite recipes control
   const getUserFavorite = async (userId) => {
    if (userId) {
      axios.get(`http://localhost:8080/favorite/${userId}`)
      .then((response) => {
        setFavorites(response.data);
      });
    } 
  };


  // helper function to handle delete a recipe from favorite list.
  const deleteUserFavorite = function (recipeId) {
    return axios.delete(`http://localhost:8080/favorite/${recipeId}`)
      .then((response) => {
        getUserFavorite(params.id);
      });
  }
  
	useEffect(() => {
		getUserFavorite(params.id);
	}, [params.id]);

	return (
		<div>
			{favorites.map(recipe => {
				return (
					<div key={recipe.id} className="favorites" >
						<Link to={`/recipe/${recipe.id}`}>
							<img src={recipe.image} alt={recipe.title} />
							<h4>{recipe.title}</h4>
						</Link>
            <button onClick={() => deleteUserFavorite(recipe.id)} >
					    Delete from favorites <BsTrashFill />
				    </button>
					</div>
				);
			})}
		</div>
	);
}