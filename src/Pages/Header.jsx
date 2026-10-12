import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { CalendarCheck, Compass, Menu, X } from 'lucide-react'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Header() {
  AOS.init({
      duration:'1000',
      once:false
    });
    const handleClick=()=>{
    window.scroll({
      top:0,
      behavior:'instant'
    })}

    useEffect(() => {
       handleClick()
     
    }, [])
    
  const [open, setOpen] = useState(false)
  const [openmobilemenu, setOpenMobileMenu] = useState(false)
  return (
    <div className='w-full h-auto fixed top-0 z-100 shadow-xl bg-white'>
      <nav className="p-2 px-5 md:px-20 flex items-center justify-between">
        <div className="flex items-center gap-3 ">
          <div className="p-2 text-white bg-sky-700  rounded-2xl">
            <Compass className='w-5 animate-[spin_12s_linear_infinite]  h-5  ' />
          </div>
          <h1 className='text-xl font-[Itel]'>Travel Agency</h1>
        </div>
        <div className="md:flex hidden ">
          <ul className='flex space-x-5 gap-5 text-xl'>
            <NavLink onClick={handleClick} to='/' className={({ isActive }) => `${isActive ? 'text-red-500' : "text-sky-700"}`}>
              <li className=' font-bold font-[Poppins] cursor-pointer'>Home</li>
            </NavLink>
            <NavLink onClick={handleClick} to='/about' className={({ isActive }) => `${isActive ? 'text-red-500' : 'text-sky-700'}`}>
              <li className=' font-bold font-[Poppins] cursor-pointer'>About</li>
            </NavLink>
            <NavLink onClick={handleClick} to='/destinations' className={({ isActive }) => `${isActive ? 'text-red-500' : 'text-sky-700'}`}>
              <li className=' font-bold font-[Poppins] cursor-pointer'>Destinations</li>
            </NavLink>
            <NavLink onClick={handleClick} to='/packages' className={({ isActive }) => `${isActive ? 'text-red-500' : 'text-sky-700'}`}>
              <li className=' font-bold font-[Poppins] cursor-pointer'>Packages</li>
            </NavLink>
            <NavLink onClick={handleClick} to='/gallery' className={({ isActive }) => `${isActive ? 'text-red-500' : 'text-sky-700'}`}>
              <li className=' font-bold font-[Poppins] cursor-pointer'>Gallery</li>
            </NavLink>
            <NavLink onClick={handleClick} to='/test' className={({ isActive }) => `${isActive ? 'text-red-500' : 'text-sky-700'}`}>
              <li className=' font-bold font-[Poppins] cursor-pointer'>Testimonials</li>
            </NavLink>
            <NavLink onClick={handleClick} to='/blog' className={({ isActive }) => `${isActive ? 'text-red-500' : 'text-sky-700'}`}>
              <li className=' font-bold font-[Poppins] cursor-pointer'>Blog</li>
            </NavLink>
            <NavLink onClick={handleClick} to='/contact' className={({ isActive }) => `${isActive ? 'text-red-500' : 'text-sky-700'}`}>
              <li className=' font-bold font-[Poppins] cursor-pointer'>Contact</li>
            </NavLink>
          </ul>
        </div>
        <div className=" hidden md:block text-white p-2 rounded-lg cursor-pointer   hover:duration-150 ">
          <button onClick={() => setOpen(!open)} className='font-[Roboto] cursor-pointer flex items-center gap-3 rounded-xl  px-5 py-2 bg-sky-700 ' ><CalendarCheck className='w-5' /> Book Now</button>
        </div>

        <div className="block md:hidden">
          <button onClick={()=>setOpenMobileMenu(!openmobilemenu)}>{openmobilemenu ? (<X/>):(<Menu/>)}</button>
        </div>

</nav>
{openmobilemenu &&(
     <div className="flex flex-col  ">
    <ul className='flex flex-col px-10 py-10 space-x-5 gap-5 text-xl'>
      <NavLink onClick={()=>{handleClick;setOpenMobileMenu(!openmobilemenu)}} to='/' className={({ isActive }) => `${isActive ? 'text-red-500' : "text-sky-700"}`}>
        <li className=' font-bold font-[Poppins] cursor-pointer'>Home</li>
      </NavLink>
      <NavLink onClick={()=>{handleClick;setOpenMobileMenu(!openmobilemenu)}} to='/about' className={({ isActive }) => `${isActive ? 'text-red-500' : 'text-sky-700'}`}>
        <li className=' font-bold font-[Poppins] cursor-pointer'>About</li>
      </NavLink>
      <NavLink onClick={()=>{handleClick;setOpenMobileMenu(!openmobilemenu)}} to='/destinations' className={({ isActive }) => `${isActive ? 'text-red-500' : 'text-sky-700'}`}>
        <li className=' font-bold font-[Poppins] cursor-pointer'>Destinations</li>
      </NavLink>
      <NavLink onClick={()=>{handleClick;setOpenMobileMenu(!openmobilemenu)}} to='/packages' className={({ isActive }) => `${isActive ? 'text-red-500' : 'text-sky-700'}`}>
        <li className=' font-bold font-[Poppins] cursor-pointer'>Packages</li>
      </NavLink>
      <NavLink onClick={()=>{handleClick;setOpenMobileMenu(!openmobilemenu)}} to='/gallery' className={({ isActive }) => `${isActive ? 'text-red-500' : 'text-sky-700'}`}>
        <li className=' font-bold font-[Poppins] cursor-pointer'>Gallery</li>
      </NavLink>
      <NavLink onClick={()=>{handleClick;setOpenMobileMenu(!openmobilemenu)}} to='/test' className={({ isActive }) => `${isActive ? 'text-red-500' : 'text-sky-700'}`}>
        <li className=' font-bold font-[Poppins] cursor-pointer'>Testimonials</li>
      </NavLink>
      <NavLink onClick={()=>{handleClick;setOpenMobileMenu(!openmobilemenu)}} to='/blog' className={({ isActive }) => `${isActive ? 'text-red-500' : 'text-sky-700'}`}>
        <li className=' font-bold font-[Poppins] cursor-pointer'>Blog</li>
      </NavLink>
      <NavLink onClick={()=>{handleClick;setOpenMobileMenu(!openmobilemenu)}} to='/contact' className={({ isActive }) => `${isActive ? 'text-red-500' : 'text-sky-700'}`}>
        <li className=' font-bold font-[Poppins] cursor-pointer'>Contact</li>
      </NavLink>
    </ul>

    <div className="w-full h-[1px] bg-gray-200"></div>
    <div className=" px-10  text-white p-2 rounded-lg cursor-pointer   hover:duration-150 ">
          <button onClick={() =>{setOpenMobileMenu(!openmobilemenu); setOpen(!open)} }
          className='font-[Roboto] cursor-pointer flex items-center gap-3 rounded-xl  px-5 py-2 bg-sky-700 ' ><CalendarCheck className='w-5' /> Book Now</button>
        </div>
  </div>
)}



      {open && (
        <div data-aos='zoom-in' className="fixed z-50 bg-black/50 flex w-full backdrop-blur-sm min-h-[90vh] justify-center items-center">
          <div className="bg-white overflow-hidden w-[50%] rounded-2xl h-[80vh] shadow-2xl">
            <div className="bg-black  p-10 justify-around flex items-center text-white">
              <div className="">
                <h1 className='text-3xl font-semibold'>Book Your Dream Trip</h1>
                <p className="text-sm text-gray-500 my-3">Instant reservation with zero booking fees</p>
              </div>
              <button className='cursor-pointer' onClick={() => setOpen(!open)}><X /></button>
            </div>
            <div className="p-10">
              <form  className='grid grid-cols-2 gap-4'>
                <div className="flex flex-col">
                  <label htmlFor="" className='text-gray-600 text-sm font-semibold'>Full Name *</label>
                  <input type="text" placeholder='John Doe' className='border border-gray-200 px-4 py-1 rounded-xl mt-1'  required/>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className='text-gray-600 text-sm font-semibold'>Email Address *</label>
                  <input type="text" placeholder='johndoe@gmail.com' className='border border-gray-200 px-4 py-1 rounded-xl mt-1' required />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className='text-gray-600 text-sm font-semibold'>Phone Number  *</label>
                  <input type="text" placeholder='+1 (555) 012-3456' className='border border-gray-200 px-4 py-1 rounded-xl mt-1' required/>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className='text-gray-600 text-sm font-semibold'>Destination or Package  *</label>
                  <select type="text" className='border border-gray-200 px-4 py-1 rounded-xl mt-1' required>
                    <option value="Switzerland">Switzerland</option>
                    <option value="France">France</option>
                    <option value="Dubai">Dubai</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Indoneshia">Indoneshia</option>
                    <option value="Maldives">Maldives</option>
                    <option value="Japan">Japan</option>
                    <option value="Italy">Italy</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className='text-gray-600 text-sm font-semibold'>Preferred Travel Date *</label>
                  <input type="date" className='border border-gray-200 px-4 py-1 rounded-xl mt-1' required/>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className='text-gray-600 text-sm font-semibold'>Number Of Travelers *</label>
                  <select type="text" className='border border-gray-200 px-4 py-1 rounded-xl mt-1' required>
                    <option value="1 Person">1 Person</option>
                    <option value="2 Person">2 Person</option>
                    <option value="3 Person">3 Person</option>
                    <option value="4 Person">4 Person(Family)</option>
                  </select>
                </div>
                <div className="flex flex-col text-sm col-span-2">
                  <label htmlFor="" className='text-gray-600 font-semibold'> Special Requests or Notes (Optional)

                  </label>
                  <textarea cols={20} rows={2} type="text" className='border border-gray-200 py-2  rounded-xl mt-1' />
                </div>

                <div className="flex w-full items-around justify-between col-span-2 mt-5 ">
                  <button onClick={()=>setOpen(!open)} className='cursor-pointer'>Cancel</button>
                  <button className=' rounded-xl px-4 py-2 text-xl text-white font-semibold cursor-pointer hover:bg-sky-800 duration-200 bg-sky-700'>Confirm</button>
                </div>

              </form>

            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default Header