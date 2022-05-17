import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MealPlan() {
	const [calories, setCalories] = useState('');

	let navigate = useNavigate();

	const submitHandler = e => {
		e.preventDefault();
		navigate(`/meal/${calories}`);

	};

	return (
		<div>
			<form>
        <label>Meal Plan </label>
				<input
					type="number"
					value={calories}
					onChange={e => setCalories(e.target.value)}
				/>
			</form>
      <button onClick={submitHandler}>GET</button>
		</div>
	);
}