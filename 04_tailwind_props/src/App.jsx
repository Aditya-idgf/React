import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'

function App() {
  const [count, setCount] = useState(0)

  const myObj = {
    name : "Aditya",
    age : 21
  };

  const myArr = [10,20,30,40,50];

  return (
    <>
      {/* Tailwind utility classes applied to JSX element */}
      {/* <h1 className="bg-green-400 text-black rounded-2xl p-5 font-semibold">Hello world</h1> */}
    
      {/* Passing simple string prop */}
      {/* <Card chai="Code kar bhai !" /> */}
      {/* Props are used to pass data from parent component → child component */}

      {/* Incorrect syntax for passing object literal directly */}
      {/* <Card obj = {name : "aditya", age: 12}/> */}
      {/* JSX expects a JavaScript expression inside {}.
          Object literals must be wrapped properly or referenced via a variable */}

      {/* Correct approach: pass object/array via variables */}
      {/* Curly braces {} allow embedding JavaScript expressions inside JSX */}
      <Card obj={myObj} arr={myArr} buttonTxt="" />

    </>
  )
}

export default App