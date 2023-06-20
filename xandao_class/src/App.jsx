import { useState } from 'react'
import xandao from '/xandao.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="/" target="_blank">
          <img src={xandao} className="logo" alt="Vite logo" />
        </a>
      </div>
    </>
  )
}

export default App
