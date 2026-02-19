import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function MyApp () {
  return (
    <>
      <h1>My App</h1>
    </>
  )
}

// const ReactElement = {
//     type: "a",
//     props: {
//         href:"https://www.google.com",
//         target:"_blank"
//     },
//     Children: "Click Me !"
// }
// This is just a plain JavaScript object shaped like a React element,
// but React cannot render it directly because it is not a valid React element instance.

const AnotherElement = (
  <a href="https://google.com" target="_blank">Click to Google</a>
)
// This is a JSX element. JSX gets transpiled into React.createElement() calls,
// so React can render it directly.


// To create an element programmatically, React provides React.createElement()
const NewReactElement = React.createElement(
  'a', // HTML tag / component type
  {
    href: 'https://google.com',
    target: '_blank'
  },
  'Click Me to google !' // children
)

createRoot(document.getElementById('root')).render(
  // <MyApp />

  // Since MyApp is a function component, technically we could call MyApp()
  // but this bypasses React's rendering lifecycle and optimizations.
  // Correct approach is to use it as a JSX component: <MyApp />

  // ReactElement
  // This will not render because it is just a custom object,
  // not created via JSX or React.createElement(), so React cannot interpret it.

  // AnotherElement
  // This works because JSX compiles into a valid React element structure.

  // Rendering element created using React.createElement()
  NewReactElement
)
