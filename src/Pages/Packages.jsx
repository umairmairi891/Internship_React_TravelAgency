import React, { useState } from 'react'
import { HomePackages } from '../cards'
import {Activity, CalendarCheck, Car, Clock, HotelIcon, LocationEdit, MessageCircleCheck} from 'lucide-react'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Packages() {
  AOS.init({
      duration:'1000',
      once:false
    });

  const [filter, setFilter]=useState('All')

  const filteresPackage=HomePackages.filter((p)=>{
    let catogory=  filter == 'All' || p.cateory.toLowerCase()==filter.toLowerCase()
    return catogory
  })

  const Category=['All', 'Adventure', 'Family', 'Honeymoon','Luxury', 'Beach', 'Wildlife']
  return (
    <div className='w-full relative mt-5'>
        <section className='w-full h-100 my-10 bg-slate-900 flex items-center justify-center'>
          <div className="text-center">
             <span className='text-blue-400'>All-Inclusive Curated Itineraries</span>
             <h1 className='text-xl md:text-4xl  text-white font-semibold py-3'>Find The Perfect Tour Package</h1>
             <p className='px-4 md:px-0 font-thin text-white max-w-150'>Experience hand-crafted vacations designed by local specialists. Enjoy transparent rates, luxury hotels, private transit, and guaranteed departures.</p>
          </div>
        </section>

        <section data-aos='fade-up' className='w-[90%] md:w-[80%] my-10 rounded-2xl mx-auto h-auto bg-linear-to-r from-orange-400 from-70% to-pink-500  '>
            <div className="grid grid-cols-1 md:grid-cols-3 mx-3 md:mx-8 py-10 items-center">
               <div className=" md:col-span-2 px-10 text-center">
                <span className='bg-white/50 text-white rounded-2xl text-sm font-semibold px-2 py-1'>Limited Time Promotion</span>
                <h1 className='text-3xl  py-2 text-white font-semibold'>Summer 2026 Early Bird Flash Sale — Up To 20% OFF</h1>
                <p className='text-white text-sm'>Reserve any tour package before the end of the month to unlock free flight credit + luxury room upgrades!</p>
               </div>
               <div className="text-center mt-5 md:mt-0 ">
                <button className='px-5 py-2 bg-white rounded text-pink-950 font-bold cursor-pointer'>Claim Special Discount</button>
               </div>
            </div>
        </section>

        <section className='w-full flex items-center justify-center h-auto my-10'>
          <div className="text-center">
            <div data-aos='fade-up' className="px-5 md:px-0">
              <span className='text-lg font-semibold text-sky-700'>Tailored Experiences</span>
              <h1 className='text-lg md:text-3xl font-semibold'>Select Your Travel Category</h1>
              <div className='flex items-center justify-center'>
              <ul className='flex flex-wrap items-center justify-center gap-2 space-x-5 mt-5'>
                 {Category.map((cat)=>(
                     <li onClick={()=>setFilter(cat)} className={
                      `
                       space-y-5 text-sm  md:text-xl font-[Lato]  border border-gray-400 px-5 py-1 rounded cursor-pointer
                       
                       ${cat==filter? 'bg-blue-600 text-white': 'bg-white'}
                      `
                     }>{cat}</li>
                 ))}
              </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2  overflow-hidden gap-10 mt-5 mx-5 md:mx-30">
               {filteresPackage.map((pkg)=>(
                <div data-aos='fade-up' className="grid grid-cols-1 md:grid-cols-2 hover:-translate-y-2 duration-200  overflow-hidden rounded-2xl bg-white gap-5 h-auto">
                    <div className="relative  overflow-hidden">
                       <img src={pkg.img} className=' hover:scale-105 duration-200 h-full object-cover' alt={pkg.title} />
                       <div className="flex absolute top-3 w-full justify-between px-2">
                        <span className='bg-blue-500 px-3 py-1 text-sm text-white font-semibold  rounded-2xl'>{pkg.cateory}</span>
                        <span className='text-sm bg-red-500 text-white px-3 py-1 rounded-2xl font-semibold '>{pkg.off} OFF</span>
                       </div>
                    </div>
                    <div className="p-5 text-start ">
                       <span className='  flex text-sm items-center gap-3 '><LocationEdit className='w-5 text-sky-600'/>{pkg.location}</span>
                       <h1 className='text-3xl py-3 font-semibold'>{pkg.title}</h1>
                       <p className='text-sm'>{pkg.description}</p>
                        <div className="mt-3 overflow-hidden flex text-sm bg-gray-200 px-4 py-2 border border-white rounded-2xl flex-col">
                          <span className='flex gap-3 my-2'><Clock className='w-5 text-sky-400'/><span className='font-semibold'>Duration</span> {pkg.duration}</span>
                          <span className='flex gap-3'><HotelIcon className='w-5 text-sky-400'/><span className='font-semibold'>Hotel</span>{pkg.Hotel}</span>
                          <span className='flex gap-3 '><MessageCircleCheck className='w-5 text-sky-400'/><span className='font-semibold'>Meals</span>{pkg.Meals}</span>
                          <span className='flex gap-3'><Car className='w-5 text-sky-400'/><span className='font-semibold'>Transit</span> {pkg.Transit}</span>
                          <span className='flex gap-3 '><Activity className='w-5 text-sky-400'/><span className='font-semibold'>Activity</span>{pkg.Activities}</span>
                        </div>
                        <div className="mt-3  flex items-center justify-between">
                          <div className="">
                            <h1 className='text-2xl font-semibold'>${pkg.price}</h1>
                            <span className='text-sm text-gray-400'>Per Person / All Inclusive</span>
                          </div>
                          <button className='flex items-center gap-3 cursor-pointer bg-sky-800 text-white text-sm px-2 py-2 rounded'><CalendarCheck className='w-5'/>Book Package</button>
                        </div>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </section>
        
        
               <section data-aos='fade-up' className='w-[90%] md:w-[85%] my-10 rounded-2xl mx-auto h-auto bg-linear-to-r from-sky-800 to-slate-900 flex items-center justify-center'>
                  <div className="my-10 text-center flex flex-col items-center ">
                    <span className='text-sky-400 py-4'>Custom Itineraries</span>
                    <h1 className='text-lg md:text-3xl font-semibold text-white mt-5'>Let's Plan Your Perfect Vacation</h1>
                    <p className='text-white text-sm md:text-lg px-4 md:px-0 py-2 max-w-150 py-2'>Choose a package that matches your budget and travel goals, or let our private concierges build a 100% tailor-made route.</p>
                    <button className='text-center flex items-center justify-center bg-sky-700 px-4 py-2 rounded-xl cursor-pointer text-white font-semibold gap-4'><CalendarCheck className='w-5'/> Start  Planning Now </button>
                  </div>
               </section>

     
    </div>
  )
}

export default Packages