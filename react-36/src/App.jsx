 
import './App.css'
import Todo from './Todo.jsx'
import Actor from './Actor.jsx'
import Singer from './Singer.jsx'


function App() {
  const actors=["Akshay Kumar", "Shahrukh Khan", "Salman Khan", "Ranveer Singh", "Ranbir Kapoor"];

  const singers=[
    {id:1, name:"Arijit Singh", age:30},
    {id:2, name:"Shreya Ghoshal", age:35},
    {id:3, name:"ehsan", age:45}
  ];
  const time= 50;

  

  return (
    <>




    <h1>Lest's start with Bollywood</h1>

    {
      singers.map(sir => <Singer key={sir.id} singsss={sir}></Singer>)
    }

    {
      actors.map(actorss => <Actor key={actorss} act={actorss}></Actor>)
    }
    
          <h1>Get started</h1>
          <Todo
           task="learn react" 
           isDone={true} 
           somoy={time}></Todo>

          <Todo 
          task="Revise 
          JavaScript" 
          isDone={false} ></Todo>
          <Todo 
          task="finish project" 
          isDone={false} 
          somoy="69009"></Todo>
         <Person></Person>
         {/* <Person></Person> */}
         <Car></Car>
         <Person></Person>
         <Sports></Sports>
         <Student></Student>
         <Student></Student>
         <Counter name="React" tech="JavaScript" ></Counter>
         <Counter name="Java" tech="Spring" ></Counter>
         <Counter></Counter>
         <Player nm="John" rns="100"></Player>
         <Player nm="ehsan" rns="500"></Player>
     
    </>
  )
}

function Player({nm, rns, goals = 50}) {
  return (
    <div className="student">
      <h3>Name:{nm}</h3>
      <h3>Runs:{rns}</h3>
      <h3>Goals:{goals}</h3>
    </div>
  )
}

function Counter(props) {
  console.log(props);
return(
  <div style={{ 
    color: 'green',
     fontSize: '18px'
      }}>
    <h3>Counter code:{props.name}</h3>
  <p>Technology:{props.tech}</p>
  </div>
  )
}

function Person() {
  const age = 20;

const personStyle = {
  color: 'blue',
  fontSize: '20px',
  fontWeight: 'bold',
};

  return (
   <p style={personStyle}>I am a person and I am {age} years old.</p>
  );
}

function Sports(){
  return (
		<div >
			<p>I like sports.</p>
			<h3>Playing code</h3>
		</div>
	);
}

function Student(){
  return (
    <div className="student">
      <p>Name:</p>
      <p>Dept:</p>
    </div>
  )
}

function Car() {
  return (
    <div>
      <p>I have a car.</p>
      <h3>Driving code</h3>
    </div>
  );
}
export default App
