import axios from 'axios';
import React, { useEffect, useState } from 'react';
//import { API } from './global';

const ChatPage = () => {
  const [chats,setChats]=useState([]);
    const fetchChats=async()=>{
 
        const data=await axios.get('/api/chat');
        setChats(data.data);
    };

    useEffect(()=>{
         fetchChats();            
    },[])
  return (
 <div>{chats.map(chat=><div key={chat._id}>{chat.chatName}</div>)}</div>
        
  )
}

export default ChatPage