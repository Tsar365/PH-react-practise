import Countries from './components/countries/Countries'
import './App.css'
import { Suspense } from 'react'

const countriesPromise = fetch('https://openapi.programming-hero.com/api/all').then(res=> res.json())

function App() {

  return (
    <>
      <Suspense fallback={<p>world tour loading.....</p>}>
        <Countries countriesPromisesss={countriesPromise}></Countries>
      </Suspense>
    </>
  )
}

export default App
