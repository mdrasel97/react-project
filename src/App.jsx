import { Suspense } from 'react'
import './App.css'
import Countries from './components/countries'




const promiseFetch = fetch('https://restcountries.com/v3.1/all')
.then(res => res.json())

function App() {



  return (
    <>
     <Suspense fallback={<h3>country loaded.....</h3>}>
     <Countries promiseFetch={promiseFetch}></Countries>
     </Suspense>
    </>
  )
}

export default App
