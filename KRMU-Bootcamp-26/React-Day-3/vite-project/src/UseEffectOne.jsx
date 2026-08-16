import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const UseEffectOne = () => {
    const[count,setCount] = useState(0)
    const[countTwo,setCountTwo] = useState(0)

    console.log("render")
    
    // useEffect(()=>{
    //     //side effect
    //     return ()=>{
    //         // clean-up/unmounting function
    //     }
    // },[]) //dependancy array

    useEffect(()=>{
        alert("count button clicked")
    },[count])

    const handleClick=()=>{
        setCount(count+1)
    }
    const handleAdd=()=>{
        setCountTwo(countTwo+1)
    }
  return (
    <>
    <div>UseEffectOne</div>
    <h1>Count:{count}</h1>
    <button onClick={handleClick}>+</button>

    <h1>Count:{countTwo}</h1>
    <button onClick={handleAdd}>+</button>
    </>
  )
}

export default UseEffectOne