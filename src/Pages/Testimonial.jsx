import { Star, CalendarCheck, UserGroupIcon, Globe,Trophy, ThumbsUp } from 'lucide-react'
import React from 'react'
import { TESTIMONIALS } from '../cards'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Testimonial() {
  AOS.init({
      duration:'1000',
      once:false
    });
  return (
    <div className='mt-10 relative'>
      <section className='w-full h-100 my-10 bg-slate-900 flex items-center justify-center'>
        <div className="text-center ">
          <span className='text-yellow-300 text-[11px] font-semibold px-5 py-1 rounded-2xl bg-yellow-300/40 '>4.9 / 5.0 Average Rating Across 3,400+ Independent Reviews</span>
          <h1 className='text-lg md:text-4xl  text-white font-semibold py-3'>Loved By Thousands Of Travelers</h1>
          <p className='text-sm md:text-xl px-4 md:px-0 font-thin text-white max-w-150'>Read candid stories from couples, families, and solo adventurers who trusted us to design their lifetime expeditions.</p>
        </div>
      </section>

      <section className='w-full h-auto my-15'>
         <div className="w-[90%] md:w-[80%] mx-auto">
           <div data-aos='fade-up' className="text-center">
            <span className='text-sky-600 font-semibold'>Real Stories, Real Journeys</span>
            <h2 className='text-xl md:text-3xl font-semibold my-3 '>Guest Experiences From Around The Globe</h2>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-5">
            {TESTIMONIALS.map((test)=>(
              <div data-aos='fade-up' className="bg-white hover:-translate-y-2 duration-200 cursor-pointer hover:shadow-2xl shadow border border-gray-200 px-10 py-8 rounded-2xl">
                 <div className="flex gap-2"><Star className='fill-yellow-300 text-yellow-300 w-5'/><Star className='fill-yellow-300 text-yellow-300 w-5'/><Star className='fill-yellow-300 text-yellow-300 w-5'/><Star className='fill-yellow-300 text-yellow-300 w-5'/><Star className='fill-yellow-300 text-yellow-300 w-5'/></div>
                 <p className='text-sm my-3 h-25'>{test.review}</p>
                 <div className="w-full h-[1px] bg-gray-200 my-4"></div>
                 <div className="flex">
                  <div className="flex flex-wrap items-center gap-5">
                    <img className='w-10 object-cover h-10 rounded-3xl' src={test.customerImage} alt="" />
                    <div className="">
                    <h1 className='text-2xl font-semibold'>{test.name}</h1>
                    <p className="text-sm text-gray-500 mt-1">{test.country}</p>
                    </div>
                    <span className='text-sm  bg-gray-200 px-4 py-1 rounded-2xl'>{test.tourName}</span>
                  </div>
                 </div>
              </div>
            ))}
           </div>
         </div>
      </section>

<section data-aos='fade-up' className='my-10 w-full h-auto py-5 md:py-0 md:h-100 flex items-center justify-center bg-slate-900  '>
           <div className="flex flex-col items-center  justify-center">
            <div className="text-center">
              <span className='text-sky-300 font-semibold '>Milestones & Recognition</span>
            <h1 className='text-lg md:text-3xl font-semibold my-2 text-white'>Company Achievements</h1></div>
             <p className="max-w-150  text-center mt-5 text-gray-400">Recognized by premier global tourism boards and travelers across 65+ countries for sustainable, flawless luxury experiences.
</p>
            <div className=" mt-5 grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="border flex w-full items-center flex-col justify-center border-white rounded-2xl px-5 py-6 bg-slate-800">
                <Trophy className='text-yellow-400 w-10 h-10 my-4'/>
                <h1 className='text-4xl font-bold text-white'>15+</h1>
                 <p className='text-lg mt-2 text-gray-300 '>Global Tourism Awards</p>
              </div>
              <div className="border w-full bg-slate-800 flex flex-col items-center justify-center border-white  rounded-2xl px-5 py-6 text-center">
                
                <UserGroupIcon className='text-center  w-10 h-10 my-4  text-blue-600'/>
                
                
                <h1 className='text-4xl  font-bold  text-white'>25,000+</h1>
                 <p className='text-lg mt-2 text-gray-300 '>Happy Travelers</p>
              </div>
              <div className="border bg-slate-800 flex items-center flex-col  border-white rounded-2xl px-5 py-6 text-center">
                <Globe className='text-green-400 h-10 w-10  my-4 '/>
                <h1 className='text-4xl font-bold text-white'>120+</h1>
                 <p className='text-lg mt-2 text-gray-300 '>Global Destinations</p>
              </div>
              <div className="border bg-slate-800 flex flex-col items-center border-white rounded-2xl px-5 py-6  text-center">
              <ThumbsUp className='text-red-500 w-10 h-10 my-4 '/>
                <h1 className='text-4xl font-bold text-white'>98.4%</h1>
                 <p className='text-lg mt-2 text-gray-300 '>Repeat & Referral Rate</p>
              </div>
            </div>
           </div>
      </section>


      <section data-aos='fade-up' className='w-[85%] my-10 rounded-2xl mx-auto h-auto bg-linear-to-r from-sky-800 to-slate-900 flex items-center justify-center'>
        <div className="my-10 text-center flex flex-col items-center ">
          <span className='text-sky-400 py-4'>Start Your Experience</span>
          <h1 className='text-lg md:text-3xl font-semibold text-white mt-5'>Join Thousands Of Happy Travelers</h1>
          <p className='text-white py-2 max-w-150 py-2'>Book your next adventure with confidence.</p>
          <button className='text-center flex items-center justify-center bg-sky-700 px-4 py-2 rounded-xl cursor-pointer text-white font-semibold gap-4'><CalendarCheck className='w-5' /> Book Your Next Adventure </button>
        </div>
      </section>

    </div>
  )
}

export default Testimonial