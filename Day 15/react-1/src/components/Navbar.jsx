import React from 'react'

const Navbar = () => {
  return (
    <div className='h-[50px] w-full bg-gray-400 flex justify-between items-center px-7'>
      <h1 className='text-2xl font-bold text-white'>Logo</h1>
      <div className="nav-btns flex gap-8">
        <a className='text-white rounded bg-black border px-3' href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
      </div>
    </div>
  )
}

export default Navbar