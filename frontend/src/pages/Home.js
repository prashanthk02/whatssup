import React from 'react';

import Popular from '../components/Popular';
import Search from '../components/Search';
import MealPlan from '../components/MealPlan';
import Category from '../components/Category';

import Jokes from './Jokes';

import '../styles/home.scss'


export default function Home() {
	return (
		<div className='home'>

      <div className='joke--btn'>
      <Jokes />
      </div>

      <div className='category--div'>
        <Category />
      </div>

      <div className='app--search'>
        <Search />
        <MealPlan />   
      </div>

      <div className='msg'>
        <h1 >Welcome to What's Supp</h1>
        <span>
          Wondering what to cook? we've got you covered
          choose from our range of mutiple receipes searching by your choice of ingredients
          or plan your meals for whole day by calories.
        </span>
      </div>
      
			<Popular />
		</div>
	);
}
