import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiSearch2Fill } from 'react-icons/ri'

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
        <label>Find recipes based on ingredients you like</label>
        <input type="text" placeholder="  potato,tomato,spinach" onChange={e => setIngredients(e.target.value)} />
      </form>
      <button type="button" className="search--btn" onClick={submitHandler}>
        Find Recipe
        <RiSearch2Fill />
      </button>
    </div>
	);
}
