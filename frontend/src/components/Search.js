import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/search.scss'

export default function Search() {
	const [ingredients, setIngredients] = useState('');

	let navigate = useNavigate();

	const submitHandler = e => {
		e.preventDefault();
		navigate(`/searched/${ingredients}`);
	};

	return (
    <div className="search--box">
      <form autoComplete="off">
        <label>What you have: </label>
        <input type="text" className="search" placeholder="potato,tomato" onChange={e => setIngredients(e.target.value)} />
      </form>
      <button type="button" className="search--btn" onClick={submitHandler}>Find Recipe</button>
    </div>
	);
}
