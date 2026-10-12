import React, { useState } from 'react'
import { gallery } from '../cards'
import { Camera, CalendarCheck, Check } from 'lucide-react'
import '/src/index.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Gallery() {
  AOS.init({
      duration:'1000',
      once:false
    });
    
  const [filter, setFilter] = useState('All')
  const category = ['All', 'Beaches', 'Mountains', 'Cities', 'Wildlife', 'Hotels', 'Adventure']

  const galleryFilter = gallery.filter((g) => {
    let category = filter == 'All' || g.category.toLowerCase() == filter.toLowerCase()
    return category
  })
  return (
    <div className='relative mt-10'  >
      <section className='w-full h-100 my-10 bg-slate-900 flex items-center justify-center'>
        <div className="text-center flex flex-col items-center">
          <span className='text-white text-sm md:text-lg flex items-center justify-center bg-sky-400/30 rounded-2xl gap-4 py-1 w-80 md:w-100'><Camera className='w-5' /> Captured By Our Global Travelers & Guides</span>
          <h1 className='text-xl md:text-4xl  text-white font-semibold py-3'>Travel Moments Gallery
          </h1>
          <p className=' text-sm md:text-lg font-thin text-white max-w-150'>Browse through 20+ awe-inspiring snapshots across breathtaking landscapes, exotic wildlife, and vibrant cultural celebrations.</p>
        </div>
      </section>


      <section className='my-15'>
        <div className="flex flex-col justify-center  items-center">
          <div data-aos='fade-up' className="w-[90%] md:w-[50%] rounded-2xl shadow-2xl mx-auto bg-white ">
            <ul className='flex space-x-5 flex-wrap md:flex-nowrap gap-5 md:gap-0 text-xl font-[Itel] justify-between px-4 py-3  '>
              {category.map((cat) => (
                <li onClick={() => setFilter(cat)} className={`flex  items-center gap-4 px-3 rounded py-1 w-30  cursor-pointer ${cat == filter ? 'bg-blue-500 text-white shadow-xl' : 'bg-gray-100'}`}>
                  {filter===cat && <Check className='w-5 h-5'/>}
                  {cat}
                  
                  </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 font-semibold text-2xl flex items-start">Showing {galleryFilter.length} Images</div>
          <div className="grid grid-cols-1 md:grid-cols-4  gap-15 mx-5 md:mx-30 mt-10">
            {galleryFilter.map((g) => (
              <div data-aos='fade-up' className="relative img-gallery  cursor-pointer rounded-2xl overflow-hidden">
                <img src={g.img} className='  w-70 h-70 rounded-2xl object-cover  ' alt="" />
                <div className=" h-full gallery-overlay  text-white">
                  <div className="flex items-center gap-4">
                    <span className='bg-blue-600/90 px-3 rounded-xl text-sm'>{g.category}</span>
                    <p className='font-semibold text-sm'>{g.location}</p>
                  </div>
                  <h1 className='text-3xl font-semibold py-3'>{g.title}</h1>
                  <p>{g.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      <section data-aos='fade-up' className='w-[85%] my-10 rounded-2xl mx-auto h-auto bg-linear-to-r from-sky-800 to-slate-900 flex items-center justify-center'>
        <div className="my-10 text-center flex flex-col items-center ">
          <span className='text-sky-400 py-4'>Make Lifelong Memories</span>
          <h1 className='text-lg md:text-3xl font-semibold text-white mt-5'>Your Journey Could Be Next</h1>
          <p className='text-white py-2 max-w-150 py-2'>Book today and create memories worth sharing.</p>
          <button className=' hover:bg-sky-800 duration-200 text-center flex items-center justify-center bg-sky-700 px-4 py-3 hover:shadow hover:shadow-sky-400 rounded-xl cursor-pointer text-white font-semibold gap-4'><CalendarCheck className='w-5' />Book Your Trip now </button>
        </div>
      </section>

    </div>
  )
}

export default Gallery