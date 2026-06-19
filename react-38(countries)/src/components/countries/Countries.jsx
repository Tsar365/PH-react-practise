// import React from 'react';

import { use } from "react";

const Countries = ({countriesPromisesss}) => {
  const countriesData=use(countriesPromisesss);
  const countries=countriesData.countries;
  const msj=countriesData.message;
  const status=countriesData.status;
  console.log("countirssdata",countriesData)
  console.log("contries",countries)
  console.log("messege",msj)
  console.log("sta",status)
  return (
    <div>
      <h1>In the countries:{countries.length}</h1>
    </div>
  );
};

export default Countries;