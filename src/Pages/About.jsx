import { CalendarCheck, CircleCheckIcon, Eye, Mail } from 'lucide-react'
import React from 'react'
import { Team } from '../cards'
import AOS from 'aos';
import 'aos/dist/aos.css';
function About() {

  AOS.init({
      duration:'1000',
      once:false
    });

  return (
    <div className=' w-full'>
       <section className='w-full h-100 flex items-center justify-center bg-slate-900 '>
        <div className="flex flex-col  items-center mt-10 text-white justify-center ">
           <span className='text-blue-400 text-lg font-semibold'>Who We Are</span>
           <h1 className='py-4 text-xl  md:text-4xl font-semibold text-white'>About Our Travel Agency</h1>
        <p className='text-lg md:text-2xl text-center py-3'>Creating unforgettable travel experiences for travelers around the world.</p>
        </div>
       </section>
       <section  className='w-full my-15'>
        <div className="w-[90%] md:w-[50%] mx-auto  ">
            <div data-aos='fade-up' className="text-center ">
              <span className='text-blue-800 font-semibold text-lg py-10'>The Journey</span>
              <h2 className='py-4 text-4xl font-semibold'>Our Story & Heritage</h2>
              <p className='text-sm text-black'>Founded in 2011 by a team of avid world travelers and certified alpine guides, Wanderlust Travel Agency was born out of a simple belief: that travel should be seamless, deeply enriching, and accessible without compromise. Over the past 15 years, we have grown from a boutique expedition desk to a globally recognized travel management partner with trusted partners in over 120 destinations across all 7 continents.</p>
            </div>
            <div data-aos='fade-up' className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
              <div className="bg-slate-400 rounded-2xl  p-10">
                <CircleCheckIcon className='w-10 h-10 bg-sky-700 p-2 rounded-2xl text-white'/>
                <h1 className='py-2 text-3xl font-semibold'>Our Mission</h1>
                <p className='text-sm'>To provide affordable, safe, and memorable travel experiences while delivering outstanding customer service.</p>
              </div>
              <div className="bg-slate-900 rounded-2xl p-10">
                 <Eye className='w-10 h-10 bg-sky-400 p-2 rounded-2xl text-black'/>
                 <h2 className='py-2 text-white text-3xl font-semibold'>Our Vision</h2>
                 <p className='text-sm text-white'>To become one of the world's most trusted travel agencies by connecting people with incredible destinations.</p>
              </div>
            </div>
            <div data-aos='fade-up' className="grid grid-cols-1 md:grid-cols-3 mt-10 items-center gap-10 bg-white p-10 rounded-2xl">
             <div className="">
             <h1 className='text-2xl font-semibold'>Our Core Values Integrity & Transparency</h1>
             <p className='text-sm  py-2'>Clear upfront prices, zero hidden add-ons, and honest guidance on seasons and accommodation conditions.</p>
             </div>
             <div className="">
             <h1 className='text-2xl font-semibold'>Uncompromising Safety</h1>
             <p className='text-sm  py-2'>24/7 global support, vetted transportation providers, and comprehensive insurance partnerships for complete peace of mind.</p>
             </div>
             <div className="">
             <h1 className='text-2xl font-semibold'>Cultural Respect</h1>
             <p className='text-sm  py-2'>We champion sustainable ecotourism that empowers local artisans, indigenous guides, and wildlife conservation.</p>
             </div>
            </div>
        </div>

       </section>
       <section   className='w-full my-10 h-auto bg-gray-300'>
            <div className="p-5 md:p-10 flex flex-col items-center justify-center">
              <div data-aos='fade-up' className="text-center mt-10">
                <span className='text-lg text-blue-600 font-semibold py-2'>Leadership & Passion</span>
                <h1 className='text-4xl font-semibold'>Meet Our Team</h1>
                <p className='py-4 text-gray-600 text-center'>Our seasoned specialists bring decades of expedition leadership, luxury hotel management, and cultural insights.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4  mt-10 gap-5 mx-2 md:mx-15 h-auto">
                {Team.map((team)=>(
                  <div data-aos='fade-up' className="bg-white  overflow-hidden text-start rounded-2xl">
                    <img className='w-full object-cover h-80 hover:scale-105 duration-200' src={team.img} alt={team.name} />
                    <h2 className='mx-10 text-xl font-semibold my-4'>{team.name}</h2>
                    <span className=' flex h-10 text-sm px-10 text-blue-700 font-semibold'>{team.post}</span>
                    <p className='mx-10 my-4 h-20 text-sm mb-15'>{team.description}</p>
                    <div className="mx-10  h-[1px] my-5 bg-gray-200"></div>
                    <div className="mx-10  my-10">
                      <Mail className='text-blue-600 w-5 '/>
                    </div>
                  </div>
                ))}
              </div>
            </div>
       </section>
       <section className='w-full auto my-15'>
         <div data-aos='fade-up' className="flex items-center  flex-col justify-center">
           <div className=" mx-5 md:mx-0 text-center mt-15">
            <span className='text-blue-800 font-semibold text-lg'>Proven Commitment</span>
            <h1 className='my-3 text-3xl font-semibold'>Why Choose Our Agency</h1>
            <p className='py-2'>Six compelling reasons travelers entrust us with their most cherished holidays year after year.</p>
           </div>
           <div  className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-5 md:mx-25 mt-10">
            <div data-aos='fade-up' className="bg-white p-8 rounded-2xl shadow border border-gray-200">
              <span className='bg-blue-100 px-4 py-3 my-5 font-semibold rounded-2xl'>01</span>
              <h1 className='my-5 text-3xl font-semibold'>Affordable Prices</h1>
              <p className='text-sm'>Direct partnerships with premium hotels and local transport eliminate middlemen, securing you the most competitive rates guaranteed.</p>
            </div>
            <div data-aos='fade-up' className="bg-white p-8 rounded-2xl shadow border border-gray-200">
              <span className='bg-blue-100 px-4 py-3 my-5 font-semibold rounded-2xl'>02</span>
              <h1 className='my-5 text-3xl font-semibold'>Experienced Tour Guides</h1>
              <p className='text-sm'>Every tour is led by certified, multilingual local experts passionate about sharing their deep heritage and insider secrets.</p>
            </div>
            <div data-aos='fade-up' className="bg-white p-8 rounded-2xl shadow border border-gray-200">
              <span className='bg-blue-100 px-4 py-3 my-5 font-semibold rounded-2xl'>03</span>
              <h1 className='my-5 text-3xl font-semibold'>24/7 Customer Support</h1>
              <p className='text-sm'>Travel with absolute confidence knowing our emergency response team is available round-the-clock via phone and live chat.</p>
            </div>
            <div data-aos='fade-up' className="bg-white p-8 rounded-2xl shadow border border-gray-200">
              <span className='bg-blue-100 px-4 py-3 my-5 font-semibold rounded-2xl'>04</span>
              <h1 className='my-5 text-3xl font-semibold'>Secure Online Booking</h1>
              <p className='text-sm'>Bank-grade 256-bit encrypted checkout with transparent pricing and no hidden booking or card convenience fees.</p>
            </div>
            <div data-aos='fade-up' className="bg-white p-8 rounded-2xl shadow border border-gray-200">
              <span className='bg-blue-100 px-4 py-3 my-5 font-semibold rounded-2xl'>05</span>
              <h1 className='my-5 text-3xl font-semibold'>Personalized Tour Plans</h1>
              <p className='text-sm'>Tailor every single day of your journey. Customize activities, dining preferences, and hotel tiers to match your dreams.</p>
            </div>
            <div data-aos='fade-up' className="bg-white p-8 rounded-2xl shadow border border-gray-200">
              <span className='bg-blue-100 px-4 py-3 my-5 font-semibold rounded-2xl'>06</span>
              <h1 className='my-5 text-3xl font-semibold'>Trusted By Thousands</h1>
              <p className='text-sm'>Over 25,000 satisfied adventurers with a 4.9-star average satisfaction rating across Google, TripAdvisor, and Trustpilot.</p>
            </div>
           </div>
         </div>
       </section>
       <section data-aos='fade-up' className='w-[85%] my-10 rounded-2xl mx-auto h-auto bg-linear-to-r from-sky-800 to-slate-900 flex items-center justify-center'>
          <div className="my-10 text-center flex flex-col items-center ">
            <span className='text-sky-400 py-4'>YOUR NEXT CHAPTER</span>
            <h1 className='text-xl md:text-3xl font-semibold text-white mt-5'>Ready To Travel With Us?</h1>
            <p className='text-white py-2'>Book your dream vacation today and let us handle every detail.</p>
            <button className='text-center flex items-center justify-center bg-sky-700 px-4 py-2 rounded-xl cursor-pointer text-white font-semibold gap-4'><CalendarCheck className='w-5'/> Start Booking</button>
          </div>
       </section>
    </div>
  )
}

export default About