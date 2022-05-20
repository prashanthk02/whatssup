import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'

import '../styles/mealplan.scss'

export default function WeekPlan() {
	const [diet, setDiet] = useState('');
  const [show, setShow] = useState(false);

	let navigate = useNavigate();

	const submitHandler = e => {
		e.preventDefault();
		navigate(`/diet/${diet}`);
	};

	return (
    <div onClick={()=> setShow(!show)}>
      <button className="search--btn" onClick={e => setShow(!show)}> By Diet </button>

		  {show && 
        <div className='meal--form' onClick={e => e.stopPropagation()} >

		    	<select className='selection' value={diet} onChange={e => setDiet(e.target.value)}>
            <option >--Select--</option>
            <option value="Gluten Free">Gluten Free</option>
            <option value="Ketogenic">Ketogenic</option>
            <option value="Lacto-Vegetarian">Lacto-Vegetarian</option>
            <option value="Ovo-Vegetarian">Ovo-Vegetarian</option>
            <option value="Pescetarian">Pescetarian</option>
            <option value="Vegan">Vegan</option>
            <option value="Vegetarian">Vegetarian</option>
		    	</select>
          <button onClick={submitHandler}>
            Get Recipes
            <FaSearch />
          </button>
		    </div>
      }
    </div>
	);
}