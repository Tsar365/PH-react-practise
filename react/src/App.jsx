 
import './App.css'

function App() {
  

  return (
    <>
    
          <h1>Get started</h1>
         <Person></Person>
         <Person></Person>
         <Car></Car>
         <Person></Person>
         <Sports></Sports>
     
    </>
  )
}

function Person() {
  const age = 20;
  return (
   <p>I am a person and I am {age} years old.</p>
  );
}

function Sports(){
  return (
		<div>
			<p>I like sports.</p>
			<h3>Playing code</h3>
		</div>
	);
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
