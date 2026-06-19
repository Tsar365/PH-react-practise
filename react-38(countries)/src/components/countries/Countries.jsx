// import React from 'react';

import { use, useState } from 'react';
import Country from '../country/Country';
import './countries.css';

const Countries = ({ countriesPromisesss }) => {
	const [visitedCountries, setVisitedCountries] = useState([]);
	const [visitedflags, setVisitedflags] = useState([]);

	const handleVisitedCountries = (e) => {
		console.log('handle visited clicked', e);
		const newVisitedCountries = [...visitedCountries, e];
		setVisitedCountries(newVisitedCountries);
	};

const handlevisitedflag=(as)=>{
const newvisitedflags =[...visitedflags,as];
setVisitedflags(newvisitedflags)
}

	const countriesData = use(countriesPromisesss);
	const countries = countriesData.countries;
	// const msj=countriesData.message;
	// const status=countriesData.status;
	// console.log("countirssdata",countriesData)
	// console.log("contries",countries)
	// console.log("messege",msj)
	// console.log("sta",status)
	return (
		<div>
			<h1>In the countries:{countries.length}</h1>
			<h3>Total visited: {visitedCountries.length}</h3>
			<h3>total flag visited: {visitedflags.length}</h3>

			<ol>
				{visitedCountries.map((abcd) => (
					<li key={abcd.cca3.cca3}>{abcd.name.common}</li>
				))}
			</ol>

			<div className='visited-flag-cont'>
				{
					visitedflags.map((flag, idx)=><img key={idx} src={flag}></img>)
				}
			</div>

			<div className="countries">
				{countries.map(countryyy=> (
					<Country
						contry={countryyy}
						key={countryyy.cca3.cca3}
						handleVisitedCountriessss={handleVisitedCountries}
						handlevisitedflagsss={handlevisitedflag}></Country>
				))}
			</div>
		</div>
	);
};

export default Countries;
