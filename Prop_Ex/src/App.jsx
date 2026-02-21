import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './components/Card'



function App() {
  
  let data_obj_1 = {
    imgname: "https://images.unsplash.com/photo-1771534156442-27ac9bd1f5e4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    roomno: 103
  }
  let data_obj_2 = {
    imgname: "https://plus.unsplash.com/premium_photo-1676823553207-758c7a66e9bb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    roomno: 104
  }


  return (
    <>
      <Card data = {data_obj_1} />
      <Card data = {data_obj_2} />
    </>
  )
}

export default App
