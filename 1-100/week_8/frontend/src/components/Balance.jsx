import axios from "axios"
import { useState,useEffect } from "react"
import Cookies from "universal-cookie"


const Balance = () => {
  const cookies = new Cookies()
    const [amount ,setAmount] =useState('')

    const fetchData =async ()=>{ await axios.get("http://localhost:3008/api/v1/account/balance",{
      headers:{
        Authorization:`Bearer ${cookies.get("token")}`
      }
    }).then(res=>{
        const data =res.data.balance
        setAmount( data)
    })
    

}

    useEffect(()=>{
        fetchData()
    },[])

  return (
    <div>Balance:{amount}</div>
  )
}

export default Balance