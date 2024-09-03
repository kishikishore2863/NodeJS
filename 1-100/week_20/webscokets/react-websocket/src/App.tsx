import './App.css'
import {useEffect, useState}from'react';

function App() {
  const [socket, setSocket] = useState<null | WebSocket>(null)
  const [latestMessage,setLatestMessage]=useState("");

  useEffect(()=>{
    const socket = new WebSocket('ws://localhost:8080')
    socket.onopen=()=>{
      console.log('Connected')
      setSocket(socket)
    }
    socket.onmessage=(message)=>{
      console.log('Received message',message.data)
      setLatestMessage(message.data)
    }
  },[])

  if(!socket){
    return <div>
      connecting to socket server...
    </div>
  }
  return(
    <>
    <input></input>
    <button onClick={()=>{
      socket.send("Hello world");
    }}>Send</button>
    {latestMessage}
    
    </>
  )
}

export default App
