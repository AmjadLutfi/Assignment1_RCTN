import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CurrencyPage from './pages/CurrencyPages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CurrencyPage/>
    </>
  )
}

export default App
