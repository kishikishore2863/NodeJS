import React from 'react'

const Header = () => {

  return (
<header className="bg-white shadow-md">
<div className="container mx-auto px-4 py-3">    
<div className="flex w-full justify-between" >
    <div>
        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_plus-055f80.svg" alt="" />
    </div>
   <nav className="hidden md:block">
   <ul className="flex space-x-8">
    <li className="text-gray-600 hover:text-blue-600 cursor-pointer">Shop</li>
    <li className="text-gray-600 hover:text-blue-600 cursor-pointer">Products</li>
    <li className="text-gray-600 hover:text-blue-600 cursor-pointer">Cart</li>
   </ul>
   </nav>
   <div>
     <button className="p-2 rounded-full hover:bg-gray-100"><img className="h-6 w-6" src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_3verticalDots-ea7819.svg" alt="" /></button> 
   </div>
</div>
</div>
</header>
   
  )
}

export default Header