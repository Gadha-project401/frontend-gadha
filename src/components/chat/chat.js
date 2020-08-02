import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import Show from '../auth/show';
import './chat.scss';
const ENDPOINT = 'https://gadha-dev.herokuapp.com/';
const socket = socketIOClient(ENDPOINT);

const Chat = props =>{

  const [username,setUsername] = useState('');
  const [message,setMessage] = useState('');
  const [userFormArea,setUserFormArea] = useState(true);
  const [messageArea,setMessageArea] = useState(false);
  const [msgList,setMsgList] = useState([]);

  useEffect(() => {
    socket.on('new message',data=>{
      setMsgList([...msgList,{user:data.user,msg:data.msg}]);
    });
  },[msgList]);
  

  const userName = e =>{
    e.preventDefault();
    socket.emit('new user',username,data=>{
      if(data){
        setUserFormArea(!userFormArea);
        setMessageArea(!messageArea);
      }
    });
    setUsername('');
  }

  const userNameHandler = e =>{
    setUsername(e.target.value);
    console.log(username);
  }

  const messageHandler = e =>{
    setMessage(e.target.value)
    console.log(message);
  }

  const submitMessage = e =>{
    e.preventDefault();
    socket.emit('send message',message);
    setMessage('');
  }
  

  return(
      <>
        <Show condition={userFormArea}>
        <form onSubmit={userName}>

          <input onChange={userNameHandler} placeholder='Enter User Name' /><br/>
          <button>Join Gadha's Chat</button>

        </form>
        </Show>

        <Show condition={messageArea}>

          {msgList.map((post,idx)=>{
            return(
              <div key={idx}>{post.user}: {post.msg}</div>
            )
          })}

          <form onSubmit={submitMessage}>
            <input value={message} onChange={messageHandler} placeholder='Enter Message' />
            <button>Send Message</button>
          </form>

        </Show>
        
      </>
  )
}

export default Chat;