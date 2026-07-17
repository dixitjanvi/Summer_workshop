import React from 'react'

const Cards = ({user , toggleFriend}) => {

    
    
  return (
     <div className="cards  w-[300px] bg-white rounded-xl overflow-hidden border">
        <img src={user.image} alt="" />
        <div className='p-3'>
          <h1 className='text-xl font-semibold'>Name : {user.name}</h1>
          <p className=''> MutualFriends: {user.mutualFriends}</p>
            <button
            
            onClick={()=>{
                toggleFriend(user.id)
            }}
            className={`w-full py-1 rounded mt-2 font-semibold
                 ${user.isFriend ? "bg-red-300" : "bg-blue-300"} 
                 
                 `}>{user.isFriend ? "Remove Friend" : "Add Friend"}</button>
        </div>
      </div>
  )
}

export default Cards