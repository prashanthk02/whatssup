import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Recipe() {
	let params = useParams();

	const [details, setDetails] = useState();
	const [activeTab, setActiveTab] = useState('instructions');

	useEffect(() => {
		const fetchDetails = async () => {
			const data = await fetch(
				`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
			);
			const detailData = await data.json();
			setDetails(detailData);
			console.log(detailData);
		};
		fetchDetails();
	}, [params.name]);

	return (
		<div>
			<div>
				<h2>{details?.title}</h2>
				<img src={details?.image} alt="" />
			</div>
			<div>
				<button
					className={activeTab === 'instructions' ? 'active' : ''}
					onClick={() => setActiveTab('instructions')}
				>
					Instructions
				</button>
				<button
					className={activeTab === 'ingredients' ? 'active' : ''}
					onClick={() => setActiveTab('ingredients')}
				>
					Ingredients
				</button>

				{activeTab === 'instructions' && (
					<div>
						<h3 dangerouslySetInnerHTML={{ __html: details?.summary }}></h3>
						<h3
							dangerouslySetInnerHTML={{ __html: details?.instructions }}
						></h3>
					</div>
				)}
				{activeTab === 'ingredients' && (
					<ul>
						{details?.extendedIngredients.map(ingredient => {
							return <li key={ingredient.id}>{ingredient.original}</li>;
						})}
					</ul>
				)}
			</div>
		</div>
	);
}
