import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Navbar = () => {


  let navigate = useNavigate()
  return (
    <div className='h-[50px] w-full bg-gray-400 flex justify-between items-center px-7 fixed'>
      <h1 className='text-2xl font-bold text-white'>Logo</h1>
      <div className="nav-btns flex gap-8">
      
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
       
        <button 
        onClick={()=>{
          navigate("/login")
        }}
        className='text-white rounded bg-black border px-3 cursor-pointer'>Login</button>
      </div>
    </div>
  )
}

export default Navbar