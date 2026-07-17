import React from 'react'
import { useState } from 'react'
import Cards from './components/Cards'


const App = () => {

  const [userData, setuserData] = useState([
  {
    id: 1,
    name: "Rahul Sharma",
    mutualFriends: 12,
    image: "https://picsum.photos/id/1011/300/300",
    isFriend: false
  },
  {
    id: 2,
    name: "Priya Patel",
    mutualFriends: 8,
    image: "https://picsum.photos/id/1027/300/300",
    isFriend: true
  },
  {
    id: 3,
    name: "Amit Verma",
    mutualFriends: 15,
    image: "https://picsum.photos/id/1005/300/300",
    isFriend: false
  },
  {
    id: 4,
    name: "Neha Singh",
    mutualFriends: 5,
    image: "https://picsum.photos/id/1012/300/300",
    isFriend: false
  },
  {
    id: 5,
    name: "Rohan Gupta",
    mutualFriends: 10,
    image: "https://picsum.photos/id/1001/300/300",
    isFriend: true
  },
  {
    id: 6,
    name: "Sneha Joshi",
    mutualFriends: 7,
    image: "https://picsum.photos/id/1002/300/300",
    isFriend: false
  },
  {
    id: 7,
    name: "Vikram Yadav",
    mutualFriends: 18,
    image: "https://picsum.photos/id/1003/300/300",
    isFriend: true
  },
  {
    id: 8,
    name: "Anjali Mehta",
    mutualFriends: 4,
    image: "https://picsum.photos/id/1004/300/300",
    isFriend: false
  },
  {
    id: 9,
    name: "Karan Malhotra",
    mutualFriends: 9,
    image: "https://picsum.photos/id/1006/300/300",
    isFriend: false
  },
  {
    id: 10,
    name: "Pooja Deshmukh",
    mutualFriends: 14,
    image: "https://picsum.photos/id/1008/300/300",
    isFriend: true
  },
  {
    id: 11,
    name: "Arjun Nair",
    mutualFriends: 6,
    image: "https://picsum.photos/id/1009/300/300",
    isFriend: false
  },
  {
    id: 12,
    name: "Kavita Sharma",
    mutualFriends: 20,
    image: "https://picsum.photos/id/1010/300/300",
    isFriend: true
  },
  {
    id: 13,
    name: "Saurabh Jain",
    mutualFriends: 11,
    image: "https://picsum.photos/id/1013/300/300",
    isFriend: false
  },
  {
    id: 14,
    name: "Meera Kapoor",
    mutualFriends: 13,
    image: "https://picsum.photos/id/1014/300/300",
    isFriend: false
  },
  {
    id: 15,
    name: "Aditya Kulkarni",
    mutualFriends: 3,
    image: "https://picsum.photos/id/1015/300/300",
    isFriend: true
  },
  {
    id: 16,
    name: "Ritika Mishra",
    mutualFriends: 16,
    image: "https://picsum.photos/id/1016/300/300",
    isFriend: false
  },
  {
    id: 17,
    name: "Harsh Agarwal",
    mutualFriends: 8,
    image: "https://picsum.photos/id/1018/300/300",
    isFriend: true
  },
  {
    id: 18,
    name: "Simran Kaur",
    mutualFriends: 19,
    image: "https://picsum.photos/id/1019/300/300",
    isFriend: false
  },
  {
    id: 19,
    name: "Yash Patil",
    mutualFriends: 5,
    image: "https://picsum.photos/id/1020/300/300",
    isFriend: true
  },
  {
    id: 20,
    name: "Nisha Reddy",
    mutualFriends: 17,
    image: "https://picsum.photos/id/1021/300/300",
    isFriend: false
  }
])

  let toggleFriend = (id)=>{
    setuserData((prevuserData)=>{
     
    return prevuserData.map((user)=>{
        return user.id === id ? {...user , isFriend : !user.isFriend } : user
     })
      
    })


    
    
  }


  return (
    <div  className='min-h-screen w-full bg-gray-200 p-10 flex gap-3 flex-wrap justify-center'>
       {
          userData?.map((user)=>  <Cards key={user.id} toggleFriend={toggleFriend} user={user}/>)
       }
    
    </div>
  )
}

export default App