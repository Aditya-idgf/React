// Import React hooks and CSS
// useState: Hook to manage component state (length, numberAllowed, charAllowed, password)
// useCallback: Hook to memoize functions and prevent unnecessary re-renders
// useEffect: Hook to run side effects (generate password when dependencies change)
// useRef: Hook to get direct access to DOM elements (password input field)
import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  // useState Hook: Manages password length (default: 8 characters)
  const [length, setLength] = useState(8);
  
  // useState Hook: Manages whether numbers are included in password (default: false)
  const [numberAllowed, setNumberAllowed] = useState(false);
  
  // useState Hook: Manages whether special characters are included (default: false)
  const [charAllowed, setCharAllowed] = useState(false);
  
  // useState Hook: Stores the generated password string (default: empty)
  const [password, setPassword] = useState("");
  
  // useRef Hook: Creates a reference to the password input DOM element
  // This allows direct access to the input without triggering re-renders
  const passwordRef = useRef(null);

  // useCallback Hook: Memoizes the password generation function
  // Only recreates the function when dependencies (length, numberAllowed, charAllowed, password) change
  // Purpose: Generates a random password based on user-selected criteria
  const passwordCreater = useCallback(() => {
    let pass = "";
    // Base character set: uppercase and lowercase letters
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
    // Add numbers (0-9) if user selected the numbers option
    if(numberAllowed) str += "0123456789";
    
    // Add special characters if user selected the characters option
    if(charAllowed) str += "!@#$%^&*"
    
    // Loop through the desired length and pick random characters
    for(let i = 1; i <= length ; i++) {
      pass += str.charAt(Math.floor(Math.random()*str.length))
    }

    // Update the password state with the newly generated password
    setPassword(pass);
  } ,[length, numberAllowed,charAllowed,password]);

  // useCallback Hook: Memoizes the copy-to-clipboard function
  // Only recreates when the password dependency changes
  // Purpose: Copies the generated password to user's clipboard
  const copyPassClip = useCallback(()=>{
    window.navigator.clipboard.writeText(password);
  }, [password])

  // useEffect Hook: Side effect hook that runs when dependencies change
  // Dependencies: [length, numberAllowed, charAllowed, setPassword]
  // Purpose: Automatically regenerates password whenever user changes length or checkbox options
  useEffect(()=>{
    passwordCreater();
  },[length, numberAllowed, charAllowed, setPassword])

  return (
    <>
      <h1 className='font-bold text-white text-4xl'>Password Generator !</h1>
      <div className="bg-slate-500 m-5 p-5 rounded-lg drop-shadow-xl drop-shadow-blue-900">
        <div className="flex">
          <input 
            type="text" 
            value={password}
            className='text-amber-400 font-semibold bg-white text-xl w-full h-10 py-2 px-3 rounded-tl-md rounded-bl-md outline-none'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />  
          <button 
            onClick={copyPassClip}
            className='
              outline-none 
              text-lg 
              bg-sky-900 
              px-2 
              text-white 
              font-bold 
              rounded-tr-md 
              rounded-br-md 
              cursor-pointer
              active:bg-white
              active:text-sky-900
              '
          >Copy</button>
        </div>
        <div className="flex mt-5 w-full">
          <input 
            type="range" 
            min="8" 
            max="100" 
            value={length} 
            className='cursor-pointer' 
            id='len'
            onChange={(e) => {setLength(e.target.value)}}
          />
          <label htmlFor="len" className='text-amber-300 font-bold mx-2 text-lg'>Length ({length})</label>
          <input 
            type="checkbox" 
            defaultChecked={numberAllowed}
            id='number' 
            onChange={()=>{
              setNumberAllowed((prev) => !prev);
            }}
            className='ml-4'
          />
          <label htmlFor="number" className='font-bold mx-2 text-xl text-amber-400' >Number </label>
          <input 
            type="checkbox" 
            defaultChecked={charAllowed}
            id='chars'
            onChange={()=>{
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="chars" className='font-bold mx-2 text-xl text-amber-400' >Character </label>
        </div>
      </div>
    </>
  )
}

export default App
