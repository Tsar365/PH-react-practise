import {use, useState} from 'react';
import Bottle from '../bottle/Bottle';
import './Bottles.css';

const Bottles = ({ bottlePromise }) => {
  const [cart, setCart]=useState([]);

	const bottles = use(bottlePromise);

  const handleAddCart=(e)=>{ //each bottle er infotmation e te thakbe
    console.log("bottle will added to cart",e);
  }
	// console.log(bottles)
  return (
		<div>
			<h1>Bottles: {bottles.length}</h1>
			<div className="bottles-cont">
				{bottles.map((bottle) => (
					<Bottle
						key={bottle.id}
            handleAddCart={handleAddCart}
						bottle={bottle}></Bottle>
				))}
			</div>
		</div>
	);
};

export default Bottles;



