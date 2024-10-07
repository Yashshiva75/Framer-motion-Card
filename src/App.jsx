import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AnimatedBackground from './Components/AnimatedBackground '
import Logo from './Components/Logo'
import DEtails from './Components/Details/DEtails'
import location from './Components/location.webp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <AnimatedBackground/>
      <Logo/>
      <DEtails/>
      </div>
    </>
  )
}

export default App
