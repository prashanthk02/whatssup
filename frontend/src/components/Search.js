import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'

import '../styles/search.scss'

export default function Search() {
	const [ingredients, setIngredients] = useState('');
  const [show, setShow] = useState(false);

	let navigate = useNavigate();

	const submitHandler = e => {
		e.preventDefault();
		navigate(`/searched/${ingredients}`);
	};

	return (
    <div className="search--box">
      <button className="reveal--btn" onClick={() => setShow(!show)}> Search by Ingredients </button>
  
      {show && 
        <div className="search--form" spellCheck="false" onClick={()=> setShow(!show)} >
          <form autoComplete="off">
            <input type="text" placeholder="  potato, tomato, spinach" onClick={e => e.stopPropagation()} onChange={e => setIngredients(e.target.value)} />
          </form>
          <button type="button" className="search--btn" onClick={submitHandler}>
            <FaSearch />
          </button>
        </div>
      }
    
    </div>
	);
}
