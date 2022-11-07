import React, {useContext} from 'react';
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';



function Navbar() {

 let navigate = useNavigate()
 let {setUser} = useContext(AuthContext)


 const handleLogout=()=>{
  setUser(false)
  navigate('/login')
 }

  return (
   <div className='mb-16'>
      <nav class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
        <a href="#" class="flex items-center">
            <img src="https://yt3.ggpht.com/ytc/AMLnZu_EPWCNOmaKhUsRUy8h1mvuPPcQfuBPqWLHOfempA=s900-c-k-c0x00ffffff-no-rj" class="mr-3 h-6 sm:h-9" alt="Face Prep Logo"/>
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">FACE PREP</span>
        </a>
        <div class="flex md:order-2">
            <button onClick={handleLogout} type="button" class="text-white bg-orange-500 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Logout</button>
            <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
        </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar