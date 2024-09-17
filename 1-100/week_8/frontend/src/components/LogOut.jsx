import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Logout } from "../utils/GlobalContext";

const LogOut = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
      Logout();
      navigate('/login'); // Redirect to the login page after logout
    };
  return (
    <div>
    <button
      onClick={handleLogout}
      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 transition duration-300 ease-in-out"
    >
      Logout
    </button>
  </div>
  )
}

export default LogOut