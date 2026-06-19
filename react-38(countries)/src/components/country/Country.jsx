// import React from 'react';
import './country.css'

const Country = ({contry}) => {
  // console.log(contry.name.common)

const handleVisited=()=>{
  console.log("button clicked");
}

  return (
		<div className="country">
      <img src={contry.flags.flags.png} alt={contry.flags.flags.alt}></img>
			<h3>Name: {contry.name.common}</h3>
      <p>Population:{contry.population.population}</p>
      <p>Area: {contry.area.area} 
        {
          contry.area.area>300000?"   Big countryt":"    small country"
        }
        </p>
        <button onClick={handleVisited}>Not Visitred</button>
		</div>
	);
};

export default Country;