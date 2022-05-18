import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiSearch2Fill } from 'react-icons/ri'

import '../styles/mealplan.scss'

export default function MealPlan() {
	const [calories, setCalories] = useState('');

	let navigate = useNavigate();

	const submitHandler = e => {
		e.preventDefault();
		navigate(`/meal/${calories}`);
	};

	return (
		<div className='meal--form' >
			<form>
        <label>Plan your meals for day based on calories</label>
				<input
					type="number"
					value={calories}
          placeholder="  Calories intake per day"
					onChange={e => setCalories(e.target.value)}
				/>
			</form>
      <button onClick={submitHandler}>
        Get Meals
        <RiSearch2Fill />
      </button>
		</div>
	);
}