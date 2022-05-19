import '../styles/fact.scss'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Fact({ setOpenModal }) {
  const[fact, setFact] = useState('')

  function getFact() {
    axios.get(`https://api.spoonacular.com/food/trivia/random?apiKey=${process.env.REACT_APP_API_KEY}`)
    .then((response) => {
      const fact = response.data.text;
      setFact(fact);
    })
    .catch(() => {console.log('err')});
  };

  useEffect(() =>{
    getFact();
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
          <p>{fact}</p>
        </div>

      </div>
    </div>
  );
}
