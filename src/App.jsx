import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <Navbar />
      </nav>
    </>
  )
}

export default App
