import { useEffect } from 'react';
import './App.css'
import { fetchSwapi } from './utils'

function App() {

  useEffect(() => {fetchSwapi();}, []);
  return (
    <>
      Hello!
    </>
  )
}

export default App
