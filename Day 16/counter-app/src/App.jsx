import React, { useState } from 'react'



const App = () => {

  const [count, setCount] = useState(0)



  return (
    <div className='h-screen w-full flex justify-center items-center gap-8 text-2xl'>
      <button
        onClick={()=>{
          setCount(count-1)
        }}
      className='border px-7 rounded'>-</button>
        <h1>{count}</h1>
      <button
         onClick={()=>{
          setCount(count+1)
        }}
      className='border px-7 rounded'>+</button>
    </div>
  )
}

export default App