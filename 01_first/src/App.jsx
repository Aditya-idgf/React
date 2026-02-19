// import chai from "./chai.jsx"
import Chai from "./Chai.jsx"

function App() {
  // App is a function that we export to main.jsx that is then rendered in root div
  // return (
  //   <h1>HELLO WORD</h1>
  // )

  // in vite app, restiction won't let u create a component with .js, it needs to be a .jsx for it to execute
  // return (
  //   <chai/> 
  // )
  
  // even if u rename it to .jsx, code will not run and it will say : 
  // react-dom_client.js?v=bf0e71f3:9049 The tag <chai> is unrecognized in this browser. 
  // If you meant to render a React component, start its name with an uppercase letter.
  
  // so u need to name the component in uppercase : chai -> Chai
  
  // return (
  //   <Chai/>
  // )
  // this code will work, because it satisfies all conditions
  
  // if we try to send multiple components
  // return (
  //   <Chai/>
  //   <h1>Hello again !</h1>
  //   <p>Lorem ipsum dolor sit amet.</p>
  // )
  // this will give u a error since you can only send one element in .jsx files so can use a empty to this task
  return (
    <>
      <Chai/>
      <h1>Hello again !</h1>
      <p>Lorem ipsum dolor sit amet.</p>
    </>
  )
  // now this will work, and <> is called a fragment in react.
  
  
}

export default App
