import { useState } from 'react'
// import './App.css'
import Search from './Search'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Search Weather of any City!</h1>
      <Search/>
    </>
  )
}

export default App
