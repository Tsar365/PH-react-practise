
import "./App.css";
export default function Singer({singsss}){
  console.log(singsss);
  return(
    <div className="singer">
      <h3>Name: {singsss.name}</h3>
      <h3>Age: {singsss.age} </h3>
    </div>
  )
}