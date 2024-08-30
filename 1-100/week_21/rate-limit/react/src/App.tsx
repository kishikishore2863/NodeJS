import axios from 'axios'
import { Turnstile } from '@marsidev/react-turnstile'
import './App.css'
import { useState } from 'react'

function App() {
  const [token, setToken] = useState<string>("")
  return (
    <>
     <input type="number" placeholder='otp' />
     <input type="password" placeholder='New password' />
     <Turnstile onSuccess={(token) => {
        setToken(token)
      }} siteKey='0x4AAAAAAAiZgeHi0Tgyf-LZ' />
     <button onClick={()=>{
      axios.post("http://localhost:3000/reset-password",{
        email:'harkirat@gmail.com',
        otp:"123456",
        token:token,
      })
     }} >update Password</button>
    </>
  )
}

export default App
