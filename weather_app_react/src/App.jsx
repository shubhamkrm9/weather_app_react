import { useState } from 'react'
// import './App.css'
import Search from './Search'
import Weather from './Weather'
import WeatherApp from './WeatherApp'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WeatherApp/>
    </>
  )
}

export default App
