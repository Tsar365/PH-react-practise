import './App.css';
import Counter from './Counter';

function App() {

function handClick(){
  alert("click hoise")
}

const handleClick3 = ()=>{
  alert("alert 3")
}

const hanleAdds=(num)=>{
  const newNum=num + 5;
  alert(newNum)
}

	return (
		<>
			<h1>Get started</h1>

      <h1>Counter component added</h1>
      <Counter></Counter>
			{/* <button onClick="handClick()">Click me</button> */}
			<button onClick={handClick}>Click me</button>
			<button
				onClick={function handClick2() {
					alert('click 2');
				}}>
				click me 2
			</button>
			<button onClick={handleClick3}>Click me3</button>
			<button onClick={() => alert('click 4')}>Click me4</button>
			<button onClick={() => hanleAdds(9)}>Click me5</button>

			<button>Click me</button>
		</>
	);
}

export default App;
