import { NavLink } from 'react-router-dom';

import '../styles/category.scss'

export default function Category() {
	return (
		<div className='categories'>
			<NavLink to="/cuisine/African">
				<h4>African</h4>
			</NavLink>

			<NavLink to="/cuisine/American">
				<h4>American</h4>
			</NavLink>

			<NavLink to="/cuisine/Chinese">
				<h4>Chinese</h4>
			</NavLink>

			<NavLink to="/cuisine/French">
				<h4>French</h4>
			</NavLink>

      <NavLink to="/cuisine/Greek">
				<h4>Greek</h4>
			</NavLink>

      <NavLink to="/cuisine/Indian">
				<h4>Indian</h4>
			</NavLink>

      <NavLink to="/cuisine/Italian">
				<h4>Italian</h4>
			</NavLink>

      <NavLink to="/cuisine/Mexican">
				<h4>Mexican</h4>
			</NavLink>

      <NavLink to="/cuisine/Japanese">
				<h4>Japanese</h4>
			</NavLink>

      <NavLink to="/cuisine/Thai">
				<h4>Thai</h4>
			</NavLink>
		</div>
	);
}
