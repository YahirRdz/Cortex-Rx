import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Product from './pages/product'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App"> 
      <Product />
    </div>
  )
}

export default App
