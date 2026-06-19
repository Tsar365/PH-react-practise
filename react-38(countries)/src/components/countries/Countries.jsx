// import React from 'react';

import { use } from "react";
import Country from "../country/Country";
import './countries.css';

const Countries = ({countriesPromisesss}) => {
  const countriesData=use(countriesPromisesss);
  const countries=countriesData.countries;
  // const msj=countriesData.message;
  // const status=countriesData.status;
  // console.log("countirssdata",countriesData)
  // console.log("contries",countries)
  // console.log("messege",msj)
  // console.log("sta",status)
  return (
		<div>
			<h1>In the countries:{countries.length}</h1>
			<div className="countries">
				{countries.map((countryyy) => (
					<Country
						contry={countryyy}
						key={countryyy.cca3.cca3}></Country>
				))}
			</div>
		</div>
	);
};

export default Countries;