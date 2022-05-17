import axios from "axios";
import React, {useState} from "react";
import MealList from './MealList';

export default function MealPlan() {

  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  function getMealData() {
    axios.get(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=${process.env.REACT_APP_API_KEY}&timeFrame=day&targetCalories=${calories}`
    )
    .then((response) => {
      console.log(response)
      const result = response.meals.json();
      setMealData({result});
    })
    .catch(() => {console.log('err')});
  }

  function handleChange(e) {
    setCalories(e.target.value);
  }

  return (
    <div className="mealplan">
      <section className="mealplan--search">
        <label>Calories For Today: </label>
        <input
          type="number"
          placeholder="2000"
          onChange={handleChange}
        />
        <button onClick={getMealData}>Get Today's MealPlan</button>
      </section>
      {mealData && <MealList mealData={mealData} />}
    </div>
  );

}