import './App.css';
import Counter from './Counter';
import Batsman from './Batsman';
import User from './User'
import { Suspense } from 'react';
import Friend from './Friend';


const fetchUsers=fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=> res.json())

  const fetchFriends = async() => {
const res=await fetch('https://jsonplaceholder.typicode.com/users');

return res.json();

  }



function App() {
  const friendsPromise=fetchFriends();

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

			<h1>user added</h1>
			<Suspense fallback={<h3>Loading...</h3>}>
				<User fetchsss={fetchUsers}></User>
			</Suspense>

      <Suspense fallback={<h3>Friend are coming....</h3>}>
<Friend friendsPromisesss={friendsPromise}></Friend>
      </Suspense>

			<h1>Counter component added</h1>
			<Counter></Counter>
			<h1>Batsman component added</h1>
			<Batsman></Batsman>
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
