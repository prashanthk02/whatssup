import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'

import '../styles/search.scss'

export default function WeekPlan() {
	const [diet, setDiet] = useState('');
  const [show, setShow] = useState(false);

	let navigate = useNavigate();

	const submitHandler = e => {
		e.preventDefault();
		navigate(`/diet/${diet}`);
	};

	return (
    <div className="search--box">
      <button className="reveal--btn" onClick={e => setShow(!show)}> Search by Diet </button>

		  {show && 
        <div className='search--form' onClick={e => setShow(!show)}>

		    	<select
            className='selection'
            value={diet}
            onChange={e => setDiet(e.target.value)}
            onClick={e => e.stopPropagation()}
            >
            <option >--Select--</option>
            <option value="Gluten Free">Gluten Free</option>
            <option value="Ketogenic">Ketogenic</option>
            <option value="Lacto-Vegetarian">Lacto-Vegetarian</option>
            <option value="Ovo-Vegetarian">Ovo-Vegetarian</option>
            <option value="Pescetarian">Pescetarian</option>
            <option value="Vegan">Vegan</option>
            <option value="Vegetarian">Vegetarian</option>
		    	</select>
          <button className="search--btn" onClick={submitHandler}>
            <FaSearch />
          </button>
		    </div>
      }
    </div>
	);
}