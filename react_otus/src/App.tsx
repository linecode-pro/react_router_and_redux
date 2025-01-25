import { useState } from 'react'
import './App.css'
import BootstrapNavbar from './BootstrapNavbar.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
          <div className="App">
              <BootstrapNavbar />
          </div>
      </>
  )
}

export default App
