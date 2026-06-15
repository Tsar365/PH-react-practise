// export default function Todo({task, isDone}){
//   return(
//     <li>Task: {task}</li>
//   )
// }


// export default function Todo({task, isDone, somoy=10}){
//   if(isDone){
//     return(
//       <li style={{color:'green'}}>Task: {task} is done. Duration: {somoy} minutes</li>
//     )
//   }
//   return <li style={{color:'red'}}>Task: {task} is not done yet. Duration: {somoy} minutes</li>
  
// }

// conditional ternary operator
// condition? true:false
// export default function Todo({task, isDone, somoy=10}){
//   return(
//     isDone?
//     <li>Done: {task} time = {somoy} minutes</li>
//     :<li> Not Done= {task} time = {somoy} minutes </li>
   
//   )
// }

// conditional rendering: &&
// export default function Todo({task, isDone, somoy=10}){
//   return(
//     isDone && <li>Done Tasks: {task} Time: {somoy} minutes</li>
//     //isDone true holei task show hobe, false hole kichu show hobe na
//   )
// }

// conditional rendering: ||
// export default function Todo({task, isDone, somoy=10}){
//   return(
//     isDone || <li>Done Tasks: {task} Time: {somoy} minutes</li>
//     //isDone false holei task show hobe, true hole kichu show hobe na
//   )
// }

// conditional rendering: use variable
export default function Todo({task, isDone}){
  let listItem;
  if(isDone==true){
    listItem = <li style={{color:'green'}}>Done: {task}</li>
  }
  else{
    listItem = <li style={{color:'red'}}>Not Done: {task}</li>
  }
  return listItem;
}