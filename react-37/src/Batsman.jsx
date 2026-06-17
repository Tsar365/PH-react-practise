import { useState } from "react";

export default function Batsman(){
  const [runs, setRuns] = useState(0);
  const [six, setSix] = useState(0);

const handleSingle=()=>{
  const updatedRuns =runs + 1;
  setRuns(updatedRuns);
}

const handleSix=()=>{
  const updatedRuns =runs + 6;
  const updatedSixs=six + 1;
  setSix(updatedSixs);
  setRuns(updatedRuns);
}

  return (
		<div>
			<h3>Player: Bangla Batsman</h3>
      <p><small>Six: {six}</small></p>
{
  runs>50 && <p>Yoyr score: 50</p>
}

			<p>score: {runs}</p>
			<button onClick={handleSingle}>singles</button>
			<button>four</button>
			<button onClick={handleSix}>six</button>
		</div>
	);
}