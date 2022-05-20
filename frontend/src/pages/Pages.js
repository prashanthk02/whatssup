import React from 'react';
import Home from './Home';
import { Route, Routes, useLocation } from 'react-router-dom';
import Cuisine from './Cuisine';
import Searched from './Searched';
import Meal from './Meal';
import Recipe from './Recipe';
import Favorites from './Favorites' 
import Diet from './Diet'

export default function Pages() {
	let location = useLocation();
	return (
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/cuisine/:type" element={<Cuisine />} />
          <Route path="/searched/:search" element={<Searched />} />
          <Route path="/meal/:mealplan" element={<Meal />} />
          <Route path="/recipe/:name" element={<Recipe />} />
          <Route path="/favorites/:id" element={<Favorites />} />
          <Route path="/diet/:dietplan" element={<Diet />} />
			  </Routes>
	);
}
