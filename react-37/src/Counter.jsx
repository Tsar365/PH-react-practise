import { useState } from "react";

export default function Counter() {
const [count, setCount]=useState(0);

const handleAdd=() =>{
  // const newCount=count+5;
  // setCount(newCount);
  setCount(5)

}

	const counterStyle = {
		border: '2px solid yellow ',
	};
	return (
		<div style={counterStyle}>
			<h3>Count: {count} </h3>
			<button onClick={handleAdd}>Add</button>
		</div>
	);
}
