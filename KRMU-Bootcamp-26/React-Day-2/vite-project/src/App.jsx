import React, { useState } from 'react'
import Home from './Home'
import FormHandleing from './FormHandleing'
import MultiForm from './MultiForm'

const App = () => {

 const[count,setCount] = useState(10)

 const handleClick=()=>{
  console.log("clicked")
  setCount(count+1)
 }

  return (
    <>
    <div>App</div>
    <h1>{count}</h1>
    <button onClick={handleClick}>Click</button>
    <Home/>
    {/* <FormHandleing/> */}
    <MultiForm/>
    </>
  )
}

export default App