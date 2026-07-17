import React, { useEffect } from 'react'
import axios from "axios"

const Home = () => {

    useEffect(() => {

        getData()
  

    }, [])
    


    let getData = async () => {
        
      await axios.get("https://dummyjson.com/products")
      .then((res)=>{
        console.log(res.data.products);
        
      })
      .catch((error)=>{
        console.log(error);
        
      })
    }


  return (
    <div className='bg-red-100 min-h-screen p-6'>
        <button
         onClick={()=>{
            getData()
         }}
         className='border' >get data</button>
    </div>
  )
}

export default Home