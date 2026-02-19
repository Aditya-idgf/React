import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // useState is a React Hook used to create and manage state in a functional component.
  // It returns an array:
  // [currentStateValue, functionToUpdateState]

  let [counter, setCounter] = useState(0);
  // counter → current state value
  // setCounter → function used to update counter and trigger re-render

  let [warning, showWarning] = useState(false);
  // warning → boolean state to control warning message visibility
  // showWarning → function to update warning state

  function AddVal() {
    // State must never be updated directly (counter += 1 is wrong)
    // Instead we use setCounter() which updates state and re-renders UI.

    setCounter(counter + 1);

    // Hide warning whenever user increases counter
    showWarning(false);
  }

  function SubVal() {
    // Prevent counter from going below 0
    if (counter - 1 >= 0) {
      setCounter(counter - 1);
      showWarning(false);
    } else {
      // Trigger warning message
      showWarning(true);
    }
  }

  return (
    <> 
      <h1>Hello bhai ! Let's Count</h1>

      {/* React automatically re-renders this value when state changes */}
      <p>Your Counter : {counter}</p>

      {/* 
        onClick expects a function reference, not a function call.
        Correct: onClick={AddVal}
        Wrong:   onClick={AddVal()}
        If we call AddVal(), it will execute immediately during render.
      */}
      <button onClick={AddVal}>Increase {counter}</button>
      <button onClick={SubVal}>Decrease {counter}</button>

      {/* Conditional rendering using logical AND (&&)
         If warning = true → paragraph renders
         If warning = false → nothing renders
      */}
      {warning && (
        <p style={{ color: 'red', fontSize: '20px' }}>
          Counter will not go below 0
        </p>
      )}
    
    </>
  )

  // React controls UI updates using state.
  // When setCounter() or showWarning() is called:
  // 1. State updates
  // 2. Component re-renders
  // 3. DOM updates automatically
}

export default App
