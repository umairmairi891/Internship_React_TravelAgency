import React, { useState } from 'react'
import { BLOG_POSTS } from '../cards'
import { Clock, ArrowRight, X, Mail, User, Calendar } from 'lucide-react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Blog() {
  AOS.init({
      duration:'1000',
      once:false
    });

  const [openModal, setOpenModal] = useState(false)
  const [details, setDetails] = useState(null)
  const detailsModal = (id) => {
    setOpenModal(true)
    const post = BLOG_POSTS.find((item) => item.id === id);
    if (post) {
      setDetails(post)
      setOpenModal(true)
    }
  }
  return (
    <div className='mt-5 relative'>
      <section className='w-full h-100 my-10 bg-slate-900 flex items-center justify-center'>
        <div className="text-center">
          <span className='text-sky-400 font-semibold text-[13px] md:text-xl px-5 py-1 rounded-2xl bg-sky-300/40 '>Curated Travel Dispatches & Practical Guides</span>
          <h1 className='text-xl md:text-4xl  text-white font-semibold py-3'>Travel Tips & Inspiration</h1>
          <p className='text-sm md:text-lg font-thin text-white max-w-150'>Discover destination insider secrets, smart budgeting tactics, packing blueprints, and inspirational narratives penned by seasoned expedition guides.</p>
        </div>
      </section>

      <section className='my-20 w-full'>
        <div className="w-[90%] md:w-[80%] mx-auto">
          <div data-aos='fade-up' className="text-center">
            <span className='text-lg text-sky-700 font-semibold'>Featured Articles</span>
            <h1 className='my-2 text-lg md:text-3xl font-semibold'>Latest Guides & Chronicles</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4   gap-5 mt-10">
            {BLOG_POSTS.map((post) => (
              <div data-aos='fade-up' className="bg-white hover:-translate-y-2 duration-300 hover:shadow-2xl  h-auto overflow-hidden rounded-2xl ">
                <div className="relative">
                  <img src={post.featuredImage} className='w-full h-50 hover:scale-105 duration-200 object-cover' alt="" />
                  <span className='absolute bg-blue-500 text-white px-3 py-1 rounded-2xl text-sm font-semibold top-3 left-4'>{post.category.toUpperCase()}</span>
                </div>
                <div className="px-8 py-8 h-70">
                  <div className="flex items-center justify-between gap-3">
                    <span className='text-sm'>{post.author}</span>
                    <span className='flex  text-sm gap-2 items-center'><Clock className='w-5 text-sky-500' />{post.readTime}</span>
                  </div>
                  <span className='text-sm text-gray-400'>{post.date}</span>
                  <h1 className='text-xl py-3 font-semibold'>{post.title}</h1>
                  <p className="text-sm">{post.description}</p>
                </div>
                <div className="w-[90%] mx-auto h-[1px]  bg-gray-200 my-10"></div>
                <button className='my-5 text-blue-500 font-bold flex px-10 gap-2 items-center' onClick={() => detailsModal(post.id)}>Read More <ArrowRight className='w-5' /></button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {openModal && details && (
        <div className="fixed inset-0  p-4 backdrop-blur-xl w-full flex items-center justify-center bg-black/40 z-50 " onClick={() => setOpenModal(!openModal)}>
          <div className=" bg-white rounded-2xl w-[50%] max-h-[80vh] overflow-y-auto relative shadow-2xl  flex flex-col mt-20 " >

            <button className='cursor-pointer absolute top-4 right-5 bg-gray-600 text-white px-3 py-1 rounded' onClick={()=>setOpenModal(!openModal)}><X /></button>
                <span className='absolute top-60 bg-blue-600 px-4 py-1 rounded-xl font-semibold text-white left-5'>{details.category}</span>
                <img className='w-full h-70 object-cover ' src={details.featuredImage} alt={details.author} />
                <div className="flex mx-20 gap-5 my-5">
                  <div className="flex gap-2 items-center text-sm text-gray-600"><User className='w-5 text-sky-600'/>{details.author}</div>
                  <div className="flex gap-2 items-center text-sm text-gray-600"><Calendar className='w-5 text-sky-600'/>{details.date}</div>
                  <div className="flex gap-2 items-center text-sm text-gray-600"><Clock className='w-5 text-sky-600'/>{details.readTime}</div>
                </div>
                
                <h3 className='mx-20 text-2xl font-semibold my-3'>{details.title}</h3>
                 <span className='mx-20 bg-blue-100/30 italic  border-l-4 border-blue-600 px-4 py-1 my-3'>{details.description}</span>
                 <div className="mx-20 my-5">
                  {details.content.map((c)=>(
                    <p className="my-5 text-gray-600">{c}</p>
                  ))}
                 </div>
                 <button onClick={()=>setOpenModal(!openModal)} className='bg-sky-700  cursor-pointer w-[20%] mx-auto text-white font-semibold px-3 py-2 rounded-xl my-5' >Close Article</button>
          </div>
        </div>
      )}

      <section data-aos='fade-up' className='my-10 w-full '>
        <div className="w-[90%] md:w-[50%] flex  h-auto text-white mx-auto bg-slate-900 rounded-2xl">
          <div className="flex items-center  text-center w-full justify-center flex-col px-5 md:px-10 py-10">
            <span className='text-sm md:text-xl text-sky-400 my-4'>Weekly Dispatches</span>
            <h1 className='text-lg md:text-3xl font-semibold mb-4'>Never Miss A Travel Story</h1>
            <p className='my-4  max-w-120 text-center'>Subscribe for travel inspiration, packing cheat-sheets, and secret seasonal flight updates delivered directly to your inbox.</p>
            <div className="flex flex-col md:flex-row items-center gap-5 mt-3">
              <input type="text" className='border border-white px-5 md:px-15 py-5 rounded-2xl  ' placeholder='Enter your email address' />
              <button className=' w-full md:w-auto flex gap-5 py-5 px-5 bg-blue-500 rounded-xl cursor-pointer font-semibold'>Subscribe<Mail /></button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Blog