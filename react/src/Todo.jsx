// export default function Todo({task, isDone}){
//   return(
//     <li>Task: {task}</li>
//   )
// }


export default function Todo({task, isDone, somoy=10}){
  if(isDone){
    return(
      <li style={{color:'green'}}>Task: {task} is done. Duration: {somoy} minutes</li>
    )
  }
  return <li style={{color:'red'}}>Task: {task} is not done yet. Duration: {somoy} minutes</li>
  
}

