import React from 'react'
import { NavLink } from 'react-router-dom'
import {FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaTwitter} from 'react-icons/fa'
function Footer() {
  const handleClick=()=>{
    window.scroll({
      top:0,
      behavior:'smooth'
    })
  }
  return (
    <div className=' w-full'>
      <footer className='bg-slate-900 text-white px-5 md:px-10 py-10 '>
        <div className="grid grid-cols-1 md:grid-cols-5 w-[90%] md:w-[80%] mx-auto gap-5">
          <div className="space-y-5">
            <h1 className='text-2xl font-bold font-[poppins]'>Company</h1>
            <ul className='space-y-5 text-lg font-[Poppins]'>
              <NavLink onClick={handleClick}  to='/about' className={({ isActive }) => `${isActive ? 'text-orange-500' : "text-white"}`} >
                <li className='space-y-1'>About</li>
              </NavLink>
              <NavLink  >
                <li className='my-2'>Careers</li>
              </NavLink>
              <NavLink onClick={handleClick} to='/blog' className={({ isActive }) => `${isActive ? 'text-orange-500' : "text-white"}`}>
                <li className='my-2'>Blog</li>
              </NavLink>
              <NavLink onClick={handleClick} to='/contact' className={({ isActive }) => `${isActive ? 'text-orange-500' : "text-white"}`}>
                <li className='my-2'>Contact</li>
              </NavLink>
            </ul>
          </div>
          <div className="space-y-5">
            <h1 className='text-2xl font-bold font-[poppins]'>Destinations</h1>
            <ul className='space-y-3 text-lg font-[Poppins]'>
              <NavLink  onClick={handleClick} to='/destinations' className={({ isActive }) => `${isActive ? 'text-orange-500' : "text-white"}`}>
                <li>Dubai</li>
              </NavLink>
              <NavLink onClick={handleClick} to='/destinations' className={({ isActive }) => `${isActive ? 'text-orange-500' : "text-white"}`}>
                <li className='my-2'>Turkey</li>
              </NavLink>
              <NavLink onClick={handleClick} to='/destinations' className={({ isActive }) => `${isActive ? 'text-orange-500' : "text-white"}`}>
                <li className='my-2'>Bali</li>
              </NavLink>
              <NavLink onClick={handleClick} to='/destinations' className={({ isActive }) => `${isActive ? 'text-orange-500' : "text-white"}`}>
                <li className='my-2'>Paris</li>
              </NavLink>
            </ul>
          </div>
          <div className="space-y-5">
            <h1 className='text-2xl font-bold font-[poppins]'>Quick Links</h1>
            <ul className='space-y-3 text-lg font-[poppins]'>
              <NavLink onClick={handleClick} to='/' className={({ isActive }) => `${isActive ? 'text-orange-500' : "text-white"}`}>
                <li className='my-2'>Home</li>
              </NavLink>
              <NavLink onClick={handleClick} to='/packages' className={({ isActive }) => `${isActive ? 'text-orange-500' : "text-white"}`}>
                <li className='my-2'>Packages</li>
              </NavLink>
              <NavLink onClick={handleClick} to='/gallery' className={({ isActive }) => `${isActive ? 'text-orange-500' : "text-white"}`}>
                <li className='my-2'>Gallery</li>
              </NavLink>
              <NavLink>
                <li className='my-2'>FAQ</li>
              </NavLink>
            </ul>
          </div>
          <div className="space-y-5">
            <h1 className='text-2xl font-bold font-[poppins]'>Support</h1>
            <ul className='space-y-3 text-lg font-[poppins]'>
              <NavLink>
                <li className='my-2'>Privacy Policy</li>
              </NavLink>
              <NavLink>
                <li className='my-2'>Terms and Conditions</li>
              </NavLink>
              <NavLink>
                <li className='my-2'>Help Center </li>
              </NavLink>
              <NavLink>
                <li className='my-2'>Refund Policy</li>
              </NavLink>
            </ul>
          </div>
          <div className="space-y-5">
            <h1 className='text-2xl font-bold font-[poppins]'>Newsletter</h1>
            <div className="flex gap-2 md:gap-5  items-center px-0 md:px-2 py-1 rounded-xl">
              <input type="text" placeholder='Enter email'  className='border border-white px-4 py-2 rounded-xl outline-none' />
              <button className='text-sm px-4 py-2 bg-sky-700 cursor-pointer rounded  cursor-pointer'>Subscribe </button>
            </div>
          </div>
        </div>
        <div className="bg-gray-600 w-[90%] md:w-[80%] mx-auto h-[1px] my-3"></div>
        <div className="text-center flex w-[90%] md:w-[80%] mx-auto items-center justify-between mt-10 flex-col md:flex-row ">
          <div className="flex items-center gap-3 md:gap-5">
            <p className='text-sm'>Follow Us</p>
             <FaFacebook className='text-sky-600 border border-white p-2 rounded-3xl w-10 h-10'/>
             <FaInstagram className='text-sky-600 border border-white p-2 rounded-3xl w-10 h-10'/>
             <FaLinkedin className='text-sky-600 border border-white p-2 rounded-3xl w-10 h-10'/>
             <FaYoutube className='text-sky-600 border border-white p-2 rounded-3xl w-10 h-10'/>
             <FaTwitter className='text-sky-600 border border-white p-2 rounded-3xl w-10 h-10'/>
          </div>
          <h1 className='mt-10 md:mt-0'>© 2026 Travel Agency. All Rights Reserved.</h1>
        </div>
      </footer>
    </div>
  )
}

export default Footer