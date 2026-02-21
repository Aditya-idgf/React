import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {

  const [bgcolor, setbgcolor] = useState("bg-gray-900");

  return (
    <>
      <div className= {`h-full w-full ${bgcolor} flex justify-center items-center`}>
        <div className="bg-blue-100 flex items-center justify-center rounded-md absolute bottom-10">
              <button className={`h-10 w-20 my-4 mx-5 rounded-lg outline-0 bg-red-500`} onClick={()=>{setbgcolor('bg-red-500')}}>
              </button>
              <button className={`h-10 w-20 my-4 mx-5 rounded-lg outline-0 bg-green-500`} onClick={()=>{setbgcolor('bg-green-500')}}>
              </button>
              <button className={`h-10 w-20 my-4 mx-5 rounded-lg outline-0 bg-blue-500`} onClick={()=>{setbgcolor('bg-blue-500')}}>
              </button>
              <button className={`h-10 w-20 my-4 mx-5 rounded-lg outline-0 bg-yellow-500`} onClick={()=>{setbgcolor('bg-yellow-500')}}>
              </button>
              <button className={`h-10 w-20 my-4 mx-5 rounded-lg outline-0 bg-orange-500`} onClick={()=>{setbgcolor('bg-orange-500')}}>
              </button>
              <button className={`h-10 w-20 my-4 mx-5 rounded-lg outline-0 bg-black`} onClick={()=>{

                let colors = ['bg-red-500', 'bg-green-500', 'bg-blue-500', 'bg-yellow-500', 'bg-orange-500']
                let rand = Math.floor(Math.random() * 5);
                setInterval(() => {
                  setbgcolor(colors[rand]);
                }, 2000);
              }}>
              </button>
        </div>
      </div>
    </>
  )
}

export default App
