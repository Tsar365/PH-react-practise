
import { Suspense } from 'react'
import './App.css'
import Bottle from './components/bottles/Bottle'

const bottlesPromise=fetch('./bottle.json').then(res=>res.json());

function App() {
  

  return (
    <>
      <h1>buy awsome water bottles...</h1>
      <Suspense fallback={<h1>bottles are lading...</h1>}>
        <Bottle bottlesPromise={bottlesPromise}></Bottle>
      </Suspense>
    </>
  )
}

export default App
