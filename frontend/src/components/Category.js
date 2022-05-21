import { Link } from 'react-router-dom';
import { GiCookingPot, GiCutLemon, GiHotSpices, GiNoodles, GiSushis, GiCroissant, GiCheeseWedge, GiCampCookingPot } from 'react-icons/gi';
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'

import '../styles/category.scss'

export default function Category() {
	return (
		<div className='categories'>
			<Link to="/cuisine/African" className='link'>
        <GiCookingPot />
				<h4>African</h4>
			</Link>

			<Link to="/cuisine/American" className='link'>
        <FaHamburger />
				<h4>American</h4>
			</Link>

			<Link to="/cuisine/Chinese" className='link'>
        <GiNoodles />
				<h4>Chinese</h4>
			</Link>

			<Link to="/cuisine/French" className='link'>
        <GiCroissant />
				<h4>French</h4>
			</Link>

      <Link to="/cuisine/Greek" className='link'>
        <GiCheeseWedge />
				<h4>Greek</h4>
			</Link>

      <Link to="/cuisine/Indian" className='link'>
        <GiHotSpices />
				<h4>Indian</h4>
			</Link>

      <Link to="/cuisine/Italian" className='link'>
        <FaPizzaSlice />
				<h4>Italian</h4>
			</Link>

			<Link to="/cuisine/Japanese" className='link'>
        <GiSushis />
				<h4>Japanese</h4>
			</Link>

      <Link to="/cuisine/Mexican" className='link'>
        <GiCutLemon />
				<h4>Mexican</h4>
			</Link>      

      <Link to="/cuisine/Thai" className='link'>
        <GiCampCookingPot />
				<h4>Thai</h4>
			</Link>
		</div>
	);
}
