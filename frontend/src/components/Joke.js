import '../styles/joke.scss'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Joke({ setOpenModal }) {
  const[joke, setJoke] = useState('')

  function getJoke() {
    axios.get(`https://api.spoonacular.com/food/trivia/random?apiKey=${process.env.REACT_APP_API_KEY}`)
    .then((response) => {
      const joke = response.data.text;
      setJoke(joke);
    })
    .catch(() => {console.log('err')});
  };

  useEffect(() =>{
    getJoke();
  }, [])

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
            setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div>
          <h3>Here is a fact!</h3>
        </div>

        <div className="body">
          <p>{joke}</p>
        </div>

      </div>
    </div>
  );
}
