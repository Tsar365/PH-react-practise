 
import './App.css'


function App() {
  

  return (
    <>
    
          <h1>Get started</h1>
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
     
    </>
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
