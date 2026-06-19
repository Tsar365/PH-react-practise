// import React from 'react';

const Country = ({contry}) => {
  console.log(contry.name.common)
  return (
		<div>
      <img src={contry.flags.flags.png} alt={contry.flags.flags.alt}></img>
			<h3>Name: {contry.name.common}</h3>
      <p>Population:{contry.population.population}</p>
		</div>
	);
};

export default Country;