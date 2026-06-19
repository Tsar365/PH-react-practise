// import React from 'react';
import './country.css'
import { useState } from 'react';

const Country = ({ contry, handleVisitedCountriessss, handlevisitedflagsss }) => {
	// console.log(contry.name.common)
	const [visited, setVisited] = useState(false);
	// console.log(handleVisitedCountriessss)

	const handleVisited = () => {
		// console.log("button clicked");
		// basic system:
		// setVisited(true)
		// if (visited){
		//   setVisited(false)
		// } else{
		//   setVisited(true)

		// second system
		// setVisited(visited? false:true);

		// third system
		setVisited(!visited);
		handleVisitedCountriessss(contry);
	};

	return (
		// <div className={`country  ${visited? `country-visited`:`country-not-visited`}`}>
		<div className={`country  ${visited && `country-visited`}`}>
			<img
				src={contry.flags.flags.png}
				alt={contry.flags.flags.alt}></img>
			<h3>Name: {contry.name.common}</h3>
			<p>Population:{contry.population.population}</p>
			<p>
				Area: {contry.area.area}
				{contry.area.area > 300000 ? '   Big countryt' : '    small country'}
			</p>
			<button onClick={handleVisited}>
				{visited ? 'visited' : 'Not Visited'}
			</button>
			<button onClick={()=>{handlevisitedflagsss(contry.flags.flags.png)}}>
				Add Visited flag
			</button>
		</div>
	);
};

export default Country;