import React, { useState } from 'react'
import { Homedestinations } from '../cards'
import { BookCheck, CalendarCheck, HeartPulse, IdCard, LibraryBig, LocationEdit, Smile, Star, Wifi } from 'lucide-react'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Destinations() {
  AOS.init({
      duration:'1000',
      once:false
    });
  const [input, setInput] = useState('')
  const [filter, setFilter] = useState('All Country')
  const filteredDestinations = Homedestinations.filter((p) => {
    let country =  filter=='All Country' || p.country==filter ;
    let search=p.country.toLowerCase().includes(input.toLowerCase()) || p.city.toLowerCase().includes(input.toLowerCase())

    return country && search
  })

  const country=['All Country', 'France','UAE', 'Switzerland','Turkey', 'Indonesia', 'Maldives','Japan', 'Italy']
  return (
    <div className='mt-15 relative w-full'>
      <section  className='w-full h-80 flex my-10 items-center justify-center bg-slate-900'>
        <div className="text-center">
          <span className='text-sky-500'>WORLDWIDE WONDERS</span>
          <h1 className='py-3 text-xl md:text-4xl font-semibold text-white'>Explore Amazing Destinations</h1>
          <p className='text-sm md:text-lg px-4 md:px-0 text-white py-3  max-w-150 '>From the sun-drenched Mediterranean coastlines to snow-crested Swiss peaks, explore our 12+ iconic global sanctuaries.</p>
        </div>
      </section>

      <section className='w-full my-15'>
        <div className="">
          <div data-aos='fade-up' className="bg-white rounded-2xl gap-3 items-center shadow-2xl w-[90%] md:w-[50%] mx-auto h-auto grid grid-cols-2 md:grid-cols-3  px-4 py-5">
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Search by City or Country' className='col-span-1 md:col-span-2 border border-gray-400 py-2 px-4 rounded-2xl' />
            <select value={filter} onChange={(e)=>setFilter(e.target.value)} className='border 
            border-gray-400 py-2  rounded-2xl font-semibold px-3'>
                {country.map((val)=>(
                  <option value={val} >{val}</option>
                ))}
            </select>
          </div>
          <div className="mt-10 mx-5 md:mx-20">
            <div className="mb-4">
              <h1 className='font-semibold text-2xl'>Avaliable Destinations ({filteredDestinations.length})</h1>
            </div>
            {filteredDestinations.length == 0 ? (<div className="flex items-center justify-center font-semibold">
              <span>Nothing Found</span>
            </div>) :
            (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                {filteredDestinations.map((item) => (

                  <div data-aos='fade-up' className="relative bg-white rounded-2xl hover:-translate-y-2 duration-200 overflow-hidden hover:shadow-2xl">
                    <div className="relative hover:scale-105 duration-200 ">
                      <img src={item.img} className='w-full rounded-2xl h-50 object-cover  ' alt="" />
                      <p className='absolute text-sm  top-3 bg-white px-3 gap-3 rounded-2xl flex left-[70%] items-center '><Star className='w-3 fill-yellow-300 text-yellow-300 ' />{item.Rating}</p>
                      <span className='absolute top-[80%] left-5 bg-black/50 text-white px-3 rounded-xl text-sm'>{item.catogery}</span>

                    </div>
                    <div className="mt-5 mx-1 w-full flex items-center justify-around">
                      <h1 className='text-2xl font-semibold'>{item.city}</h1>
                      <p>{item.country}</p>
                    </div>
                    <span className='px-8 text-sky-700 py-5 text-sm '>{item.Besttime}</span>
                    <p className='px-8 my-5 h-20 text-sm'>{item.description}</p>
                    <div className="w-70 h-[1px] mx-auto bg-gray-200"></div>
                    <div className="flex   w-full gap-5 mx-10 py-5">
                      <div className="w-[50%] md:w-[50%]">
                        <p className='text-sm'>STARTING FROM</p>
                        <h1 className='font-bold'>${item.Price}</h1>
                      </div>
                      <button className='bg-sky-700 px-5 text-sm text-white rounded-xl font-semibold cursor-pointer py-2'>Explore</button>
                    </div>
                  </div>
                ))}
              </div>)
            }
          </div>
        </div>
      </section>

      <section data-aos='fade-up' className='w-[90%] md:w-[70%] my-10 bg-slate-900  rounded-2xl  mx-auto grid grid-cols-1 md:grid-cols-4 '>
        <div className="col-span-2 ">
          <img src='/Images/Destinations.avif' className='rounded-2xl w-full h-full object-cover' alt="" />
        </div>
        <div className=" text-white p-10 col-span-2">
          <span className='flex gap-4 items-center text-blue-400'><LocationEdit className='w-5' />Interlaken & Zermatt, Switzerland</span>
          <h2 className='py-3 text-3xl font-bold'>Majestic Swiss Alps & Glacier Wonder</h2>
          <p className='text-sm py-3'>Experience the pinnacle of European alpine luxury. Traverse snow-kissed mountain passes on the Glacier Express, savor artisanal cheese fondue under the Matterhorn, and unwind in world-class thermal spring chalets.</p>
          <div className="border  border-gary-200 rounded-2xl p-4">
            <div className="flex my-1 text-sm  justify-between">
              <span>Duration</span>
              <p>7 Days / 6 Nights</p>
            </div>
            <div className="flex my-1 text-sm gap-10 justify-between">
              <span>Includes:</span>
              <p>Glacier Express, 5-Star Chalet, Guide</p>

            </div>
            <div className="flex text-sm my-1 justify-between">
              <span>Seasonal Offer:</span>
              <p>Save $350 Per Couple</p>
            </div>
          </div>
          <button className='flex items-center  mt-4 gap-4 bg-sky-600 px-5 py-4 rounded-xl cursor-pointer'><CalendarCheck/> Book This Featured Experience</button>
        </div>
        <div className=""></div>
      </section>

       <section className='w-full auto my-15'>
         <div className="flex items-center  flex-col justify-center">
           <div data-aos='fade-up' className="text-center mt-15">
            <span className='text-blue-800 font-semibold text-lg'>Expert Advisory</span>
            <h1 className='my-3 text-3xl font-semibold'>Useful Travel Tips & Guidance</h1>
            <p className='py-2'>Essential tips to ensure your worldwide journey is smooth, memorable, and safe.</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-5 md:mx-25 mt-10">
            <div data-aos='fade-up' className="bg-white p-8 rounded-2xl shadow border border-gray-200">
              <span className='  font-semibold rounded-2xl'><BookCheck className='h-10 w-10 bg-blue-200 p-2 rounded'/></span>
              <h1 className='my-5 text-3xl font-semibold'>Check Passport & Visa Validity</h1>
              <p className='text-sm'>Ensure your passport is valid for at least six months past your return date and verify entry visa requirements beforehand.</p>
            </div>
            <div data-aos='fade-up' className="bg-white p-8 rounded-2xl shadow border border-gray-200">
              <span className='  font-semibold rounded-2xl'><LibraryBig className='h-10 w-10 bg-blue-200 p-2 rounded'/></span>
              <h1 className='my-5 text-3xl font-semibold'>Pack Smart & Minimal</h1>
              <p className='text-sm'>Use packing cubes, choose versatile breathable clothing layers, and always keep essential medicines in your personal carry-on.</p>
            </div>
            <div data-aos='fade-up' className="bg-white p-8 rounded-2xl shadow border border-gray-200">
              <span className='  font-semibold rounded-2xl'><IdCard className='h-10 w-10 bg-blue-200 p-2 rounded'/></span>
              <h1 className='my-5 text-3xl font-semibold'>Local Currency & Smart Cards</h1>
              <p className='text-sm'>Notify your bank of travel dates and keep small amounts of local cash for street vendors and small gratuities.</p>
            </div>
            <div data-aos='fade-up' className="bg-white p-8 rounded-2xl shadow border border-gray-200">
              <span className='  font-semibold rounded-2xl'><HeartPulse className='h-10 w-10 bg-blue-200 p-2 rounded'/></span>
              <h1 className='my-5 text-3xl font-semibold'>Comprehensive Travel Insurance</h1>
              <p className='text-sm'>Protect against cancellations, medical situations, and baggage delays so you can relax with peace of mind.</p>
            </div>
            <div data-aos='fade-up' className="bg-white p-8 rounded-2xl shadow border border-gray-200">
              <span className='  font-semibold rounded-2xl'><Wifi className='h-10 w-10 bg-blue-200 p-2 rounded'/></span>
              <h1 className='my-5 text-3xl font-semibold'>Stay Connected with e-SIM</h1>
              <p className='text-sm'>Download local e-SIM profiles before boarding to enjoy instant affordable data upon touchdown at foreign airports.</p>
            </div>
            <div data-aos='fade-up' className="bg-white p-8 rounded-2xl shadow border border-gray-200">
              <span className='  font-semibold rounded-2xl'><Smile className='h-10 w-10 bg-blue-200 p-2 rounded'/></span>
              <h1 className='my-5 text-3xl font-semibold'>Respect Cultural Etiquette</h1>
              <p className='text-sm'>Learn a few basic phrases in the local tongue and dress modestly when visiting sacred temples, shrines, and churches.</p>
            </div>
           </div>
         </div>
       </section>

       <section data-aos='fade-up' className='w-[90%] md:w-[85%] my-10 rounded-2xl mx-auto h-auto bg-linear-to-r from-sky-800 to-slate-900 flex items-center justify-center'>
          <div className="my-10 text-center flex flex-col items-center ">
            <span className='text-sky-400 py-4'>Limited Availability</span>
            <h1 className='text-xl md:text-3xl font-semibold text-white mt-5'>Found Your Dream Destination?</h1>
            <p className='text-white py-2 px-4 md:px-0'>Reserve your trip today before the best deals disappear.</p>
            <button className='text-center flex items-center justify-center bg-sky-700 px-4 py-2 rounded-xl cursor-pointer text-white font-semibold gap-4'><CalendarCheck className='w-5'/>Book Now</button>
          </div>
       </section>

    </div>
  )
}

export default Destinations