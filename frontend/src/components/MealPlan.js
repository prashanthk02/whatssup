import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
        <label>Meal Plan for Today: </label>
				<input
					type="number"
					value={calories}
          placeholder="Calories per day"
					onChange={e => setCalories(e.target.value)}
				/>
			</form>
      <button onClick={submitHandler}>GET</button>
		</div>
	);
}