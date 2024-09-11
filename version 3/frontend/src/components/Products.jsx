import React from 'react'
import {api} from"../utils/axiosApi";

const Products = ({data}) => {
    const arr = new Array(10).fill(1);
    

     console.log(data?.data)
  return (
    
    <div className="grid grid-cols-1  items-center md:grid-cols-3 lg:grid-cols-6">
 {data?.data?.map(e=>(
      <div key={e.id} className="container  flex justify-center ">
        <a href="google.com">
        <div className="w-[188px] h-[263px] p-[16px]  text-gray-600 hover:text-blue-600 cursor-pointer">
            <div className="pb-[16px]  w-[118px] h-[150px] mx-[16px]    "><img className="w-full h-full" src={e.imageUrl} alt="" /></div>
            <div>
                <h2 className="pb-[5px]">{e.title}</h2>
                <h4 className="text-black font-semibold" >{e.price}</h4>
            </div>
      
        </div>
        </a>
        </div>)
 )}
    </div>
  )
}

export default Products