// import React from 'react';
import './Bottle.css';

const Bottle = ({bottle, handleAddCart}) => {
  const {image,price,stock}=bottle;
 
  return (
    <div className="card bottle">
      {/* <img src="bottle.img" alt="" /> */}
      <img src={image} alt="" />
      <h3>{name}</h3>
      <p>${price}</p>
      <p>{stock} remaing</p>
      <button onClick={()=> handleAddCart(bottle)}>Buy now</button>
    </div>
  );
};

export default Bottle;