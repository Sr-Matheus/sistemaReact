import { useState } from 'react'
import './App.css'
import RoutesApp from './routes'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <RoutesApp></RoutesApp>
    </>
  )
}

export default App
