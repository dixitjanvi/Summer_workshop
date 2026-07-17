import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {increment , decrement} from './store/counterSlice'

const App = () => {

  let count = useSelector((state)=>state.counter.value)
  let dispatch = useDispatch()
  console.log(count);
  
  return (
    <div className='container'>
      <h1>Counter app</h1>
      <br />
      <br />
      <div className='count' >
        <button
        onClick={()=>{
          dispatch(increment())
        }}
        >incre....</button>
        <h1>{count}</h1>
        <button
        onClick={()=>{
          dispatch(decrement())
        }}
        >Decre....</button>
      </div>
    </div>
  )
}

export default App