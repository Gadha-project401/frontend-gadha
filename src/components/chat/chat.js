import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import Show from '../auth/show';
import './chat.scss';
const ENDPOINT = 'https://gadha-dev.herokuapp.com/';
const socket = socketIOClient(ENDPOINT);

let msg = [];
let counter = 0;


const Chat = props =>{

  const [open,setOpen] = useState(false);
  const [username,setUsername] = useState('');
  const [message,setMessage] = useState('');
  const [userFormArea,setUserFormArea] = useState(true);
  const [messageArea,setMessageArea] = useState(false);
  const [msgList,setMsgList] = useState([{user:'Welcome',msg:'Type any message!'}]);


  useEffect(() => {
    socket.on('new message',data =>{
      counter++;
      if(counter === 1){
        msg.unshift(data);
        counter=0;
        setMsgList([...msgList,msg]);
      } else if (counter === 2){
        counter=0;
      }
    });
    
  },[]);// eslint-disable-line react-hooks/exhaustive-deps
  

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
  }

  const messageHandler = e =>{
    setMessage(e.target.value)
  }

  const submitMessage = e =>{
    e.preventDefault();
    socket.emit('send message',message);
    setMessage('');
  }

  const showChat = () =>{
    setOpen(!open);
  }
  

  return(
      <>
      
      <section className='chat-container'> 
      <img src='https://img.pngio.com/chat-icon-png-free-download-chat-icon-png-2000_2000.png' alt='chatIcon' onClick={showChat} />
      <div className='chatContainer'>
        <div className={`chat-form-` + open}>
        <Show condition={userFormArea}>
        <div className='chatSubmit'>
        <form onSubmit={userName} className='chatEntry'>

          <input onChange={userNameHandler} placeholder='Enter User Name' /><button>Join</button>

        </form></div>
        </Show>

        <Show condition={messageArea}>

          <div className='chatArea'>

          
          {msg.map((post,idx)=>{
            return(
              <div className='chatBox' key={idx}> <span className='chatUser'>{post.user}</span><span className='chatMsg'>{post.msg}</span> </div>
            )
          })}

          </div>

          <div className='chatSubmit'>
          <form onSubmit={submitMessage} className='chatEntry chatStart'>
            <input value={message} onChange={messageHandler} placeholder='Enter Message' /> 
          </form></div>

        </Show>
        </div>
        </div>
      </section>
      </>
  )
}

export default Chat;