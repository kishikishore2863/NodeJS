import React, { useEffect, useState } from 'react'
import Products from './Products';
import {api} from"../utils/axiosApi";
const Shop = () => {
    const[data ,setData]=useState()

    async  function   fetchData(){
      const data = await api.get("/")
    //   const json = await data.json()
      console.log(data)
      setData(data)
    }

    useEffect( ()=>{
        fetchData();


    },[])
    
  return (
    <div>
        <Products data={data} />
    </div>
  )
}

export default Shop;