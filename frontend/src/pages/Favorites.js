import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import { BsTrashFill } from 'react-icons/bs';
import { useContext } from "react"
import { userContext } from '../providers/AuthProvider';

import '../styles/page.scss'

export default function Cuisine() {
  const [favorites, setFavorites] = useState([]);
  const { user } = useContext(userContext);
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
      .then(() => {
        getUserFavorite(params.id);
      });
  }

  useEffect(() => {
    getUserFavorite(params.id);
  }, [params.id]);

  return (
    <div>
      <h1 className='result--title'> {user.name}'s favorite recipes </h1>

      <div className='result--items'>
        {favorites.map(recipe => {
          return (
            <div className='result--card' key={recipe.id} >
              <Link className='link' to={`/recipe/${recipe.recipeid}`}>
                <img src={recipe.image} alt={recipe.title} />
                <h4>{recipe.title}</h4>
              </Link>
            <button className='delete-btn' onClick={() => deleteUserFavorite(recipe.id)} >
              <BsTrashFill />
            </button>
          </div>
          );
        })}
      </div>

    </div>
  );
}