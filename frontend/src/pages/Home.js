import React from 'react';

import Popular from '../components/Popular';
import Search from '../components/Search';
import MealPlan from '../components/MealPlan';
import Category from '../components/Category';
import DietPlan from '../components/DietPlan';

import Facts from './Facts';

import '../styles/home.scss'


export default function Home() {
	return (
		<div className='home'>

      <div className='fact--btn'>
      <Facts />
      </div>

      <div className='category--div'>
        <Category />
      </div>

      <div className='app--search'>
        <Search />
        <MealPlan />
        <DietPlan />
      </div>

      <div className='msg'>
        <h2 >Welcome to What's Sup</h2>
        <span>
          Yummy choices for your tummy! <br/> Take your taste buds for a tour with our different cuisines
          or find recipes based on ingredients, diet, or calories.
        </span>
      </div>
      
			<Popular />
		</div>
	);
}
