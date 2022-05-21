import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'

import '../styles/search.scss'

export default function MealPlan() {
	const [calories, setCalories] = useState('');
  const [show, setShow] = useState(false);

	let navigate = useNavigate();

	const submitHandler = e => {
		e.preventDefault();
		navigate(`/meal/${calories}`);
	};

	return (
    <div className="search--box">
      <button className="reveal--btn" onClick={e => setShow(!show)}>Daily meal plan by calories</button>

		  {show && 
        <div className='search--form' onClick={e => setShow(!show)} >
		    	<form>
		    		<input
		    			type="number"
		    			value={calories}
              placeholder="  Calories intake per day"
		    			onChange={e => setCalories(e.target.value)}
              onClick={e => e.stopPropagation()}
              />
		    	</form>
          <button className="search--btn" onClick={submitHandler}>
            <FaSearch />
          </button>
		    </div>
      }
    </div>
	);
}