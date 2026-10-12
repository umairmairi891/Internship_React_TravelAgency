import React,{useState} from 'react'
import { ArrowRight, CheckCircle, Compass, CompassIcon, LocationEditIcon, LucideCompass, LucideLocationEdit, NotebookPenIcon, Search, UserGroupIcon, Star, DollarSign, Headphones, ShieldCheck,X, NotebookPen, Medal, Clock, LocationEdit, CalendarCheck } from 'lucide-react'
import { Homedestinations, HomePackages, Reviews } from '../cards'
import { useNavigate} from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';


function Home() {
  AOS.init({
    duration:'1000',
    once:false
  });

  const [openModal, setOpenModal] = useState(false)
  const Navigate=useNavigate()
  
  return (
    <div className='w-full relative  '>

      <div data-aos="fade-up" className="relative w-[98%]  min-h-[680px] text-center">
        <div className="absolute w-full  my-2 inset-0 z-0">
          <img className='w-full h-full  object-cover  opacity-60   ' src="Hero_section_img.avif" alt="" />
          <div className="absolute w-full h-full inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/40   "></div>
        </div>

        <div className="relative  top-30 md:top-50  flex flex-col items-center justify-center left-2  md:left-100 w-full md:max-w-200">
          <h1 className=' text-lg md:text-4xl text-white font-[Itel] font-bold '>Explore The World With Confidence</h1>
          <h3 className='my-5  font-[Lato] text-white text-sm  md:text-2xl '>Discover breathtaking destinations, unforgettable adventures, and carefully planned travel experiences that</h3>
          <div className="flex items-center gap-4 md:gap-10">
            <button className='flex gap-2 items-center text-sm md:text-lg md:gap-5 bg-sky-700 px-2 md:px-5 py-2 md:py-3 rounded-xl text-white  cursor-pointer font-bold ' onClick={()=>Navigate('/destinations')}><CompassIcon className='w-5 md:w-5' />  Explore Destinations</button>
            <button onClick={() => setOpenModal(!openModal)} className='flex gap-2 md:gap-3 bg-transparent border-2 border-white px-2 md:px-5 py-2 md:py-3 rounded-xl text-white font-bold cursor-pointer text-sm md:text-lg hover:bg-white hover:duration-300 hover:text-black'><NotebookPenIcon className='w-5' />Book Your Trip</button>
          </div>
          <div className="w-[90%] py-4 md:py-0 md:w-full h-auto md:h-20 mt-5 flex-col md:flex-row flex items-center  gap-5  md:justify-around rounded-xl bg-white">
            <div className="text-start border-r border-gray-300">
              <h1 className='text-gray-800 text-sm'>DESTINATION</h1>
              <div className="flex mt-1 gap-3 items-center">
                <LucideLocationEdit className='w-5 text-sky-400' />
                <input className='font-semibold mt-1' type="text" placeholder='Where to Go' />
              </div>
            </div>
            <div className="text-start">
              <h1 className='text-sm'>TRAVELERS</h1>
              <div className="flex items-center gap-3 mt-1">
                <UserGroupIcon className='w-5 text-sky-500' />
                <select name="" id="" className='font-semibold'>
                  <option value="">1 Solo Traveler</option>
                  <option value="">2  Traveler</option>
                  <option value="">3 Traveler</option>
                  <option value="">4+ Traveler(Family)</option>
                </select>
              </div>
            </div>
            <div className="">
              <button className='flex  gap-3 bg-sky-800 px-5 py-2 rounded-xl text-white cursor-pointer' onClick={()=>Navigate('/destinations')}><Search />Find Adventures</button>
            </div>
          </div>
        </div>
      </div>

      <section data-aos="fade-up" className="about w-full  my-10">
        <div className="relative w-[95%] md:w-[75%]  rounded-xl border border-gray-400 mx-auto bg-white h-auto shadow-2xl grid grid-cols-1 md:grid-cols-2 p-10 items-center gap-10 ">
          <div className="w-full h-full ">
            <img src="/Images/About_section_img.avif" className='w-[150%] shadow-2xl h-[100%] object-cover rounded-2xl ' alt="" />
            <div className="absolute bg-sky-600 rounded-2xl p-2 md:p-4 flex left-25 md:left-80 top-47 md:top-90 items-center gap-1 md:gap-3 ">
              <h2 className='text-xl md:text-3xl font-bold text-white '>15+</h2>
              <p className='text-sm md:text-lg text-white max-w-30'>Years of Travel Excellence</p>
            </div>
          </div>
          <div className="py-5 relative">
            <h2 className='flex py-2 gap-3 text-sky-700 font-semibold'><LucideCompass className='w-5' />ABOUT  PREVIEW</h2>
            <h1 className='text-3xl font-semibold py-2 text-black'>Your Trusted Travel Partner</h1>
            <p className='text-gray-500 py-2'>We are passionate about creating unforgettable travel experiences for individuals, couples, families, and groups. Whether you're looking for a relaxing beach vacation, an adventurous mountain trek, or an exciting city tour, our experienced team is here to help you every step of the way.</p>
            <div className="grid grid-cols-2 py-2 gap-5">
              <div className="flex gap-2"><CheckCircle className='w-5 text-green-600' /><h1 className='text-sm font-semibold'>Curated Boutique Stays</h1></div>
              <div className="flex gap-2"><CheckCircle className='w-5 text-green-600' /><h1 className='text-sm font-semibold'>100% Guaranteed Departures</h1></div>
              <div className="flex gap-2"><CheckCircle className='w-5 text-green-600' /><h1 className='text-sm font-semibold'>Zero Hidden Booking Fees</h1></div>
              <div className="flex gap-2"><CheckCircle className='w-5 text-green-600' /><h1 className='text-sm font-semibold'>24/7 Dedicated Assistance</h1></div>
            </div>
            <button className='mt-5 text-white font-semibold bg-sky-600 flex items-center gap-3 cursor-pointer py-3 hover:bg-sky-900  duration-200 px-5 rounded-xl'>Learn More <ArrowRight className='w-5' /></button>
          </div>
        </div>
      </section>

      <section data-aos="fade-up" className='Destinations my-5 mt-10 w-full'>
        <div className="w-[90%] md:w-[75%] mt-10 mx-auto">
          <div data-aos="fade-up" className="w-full flex  items-center justify-between">
            <div className=""><p className='text-blue-800 text-sm md:text-lg font-semibold'>HANDPICKED GATEWAYS</p> <h1 className='text-xl md:text-3xl font-semibold'>Top Travel Destinations</h1></div>
            <button className='flex items-center text-sm md:text-lg gap-1 md:gap-3 text-blue-700 font-semibold'>View All Destinations <ArrowRight className='w-5' /></button>
          </div>
          <div data-aos="fade-up"   className="grid grid-cols-1 md:grid-cols-4   gap-5 mt-10 ">
            {Homedestinations.map((item) => (
              <div   className="relative bg-white rounded-2xl hover:-translate-y-2 duration-200 overflow-hidden hover:shadow-2xl">
                <div className="relative hover:scale-105 duration-200 ">
                  <img src={item.img} className='w-full  h-50 object-cover  ' alt="" />
                  <p className='absolute text-sm  top-3 bg-white px-3 gap-3 rounded-2xl flex left-[70%] items-center '><Star className='w-3 fill-yellow-300 text-yellow-300 ' />{item.Rating}</p>
                  <span className='absolute top-[80%] left-5 bg-black/50 text-white px-3 rounded-xl text-sm'>{item.catogery}</span>

                </div>
                <div className="mt-5 mx-1 w-full flex items-center justify-around">
                  <h1 className='text-2xl font-semibold'>{item.city}</h1>
                  <p>{item.country}</p>
                </div>
                <p className='px-8 my-5 text-sm h-25'>{item.description}</p>
                <div className="w-60 h-[1px] mx-auto bg-gray-200"></div>
                <div className="flex   w-full gap-5 mx-10 py-5">
                  <div className="">
                    <p className='text-sm'>STARTING FROM</p>
                    <h1 className='font-bold'>${item.Price}</h1>
                  </div>
                  <button onClick={()=>setOpen(!open)} className='bg-sky-800 px-5 text-sm text-white rounded cursor-pointer py-2'>Book Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section   className='why-choose-us w-full h-auto my-10 mt-10 bg-black/90'>
          <div className="p-10 flex flex-col items-center ">
            <div className="text-center mt-10"><p className='text-sky-600 font-semibold'>OUR CORE PROMISE</p>
             <h1 className='text-3xl text-white py-4'>Why Thousands Of Travelers Choose Us</h1>
             <p className='text-gray-200 max-w-150 text-center'>We combine years of on-the-ground relationships with modern luxury standards to create truly frictionless vacation journeys.</p>
            </div>
            <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-3 gap-3 mx-1 md:mx-10 mt-10">
              <div data-aos="fade-up" className="border border-white hover:bg-slate-700 duration-200 rounded-xl px-5 py-4  bg-slate-800">
                <span className='py-15  '><DollarSign className=' w-12 h-12 p-2 text-sky-700  rounded-xl border border-white'/></span>
                <h1 className='mt-10 text-white text-2xl font-bold'>Affordable Prices</h1>
                <p className='py-2   text-gray-400 max-w-100 mb-10'>Direct partnerships with premium hotels and local transport eliminate middlemen, securing you the most competitive rates guaranteed.</p>
              </div>

              <div data-aos="fade-up" className="border border-white hover:bg-slate-700 duration-200 rounded-xl px-5 py-4  bg-slate-800">
                <span className='py-15  '><Compass className=' w-12 h-12 p-2 text-sky-700 rounded-xl border border-white'/></span>
                <h1 className='mt-10 text-white text-2xl font-bold'>Experienced Tour Guides</h1>
                <p className='py-2   text-gray-400 max-w-100 mb-10'>Every tour is led by certified, multilingual local experts passionate about sharing their deep heritage and insider secrets.</p>
              </div>
              <div data-aos="fade-up" className="border border-white hover:bg-slate-700 duration-200 rounded-xl px-5 py-4  bg-slate-800">
                <span className='py-15  '><Headphones className=' w-12 h-12 p-2  text-sky-700 rounded-xl border border-white'/></span>
                <h1 className='mt-10 text-white text-2xl font-bold'>24/7 Customer Support</h1>
                <p className='py-2   text-gray-400 max-w-100 mb-10'>Travel with absolute confidence knowing our emergency response team is available round-the-clock via phone and live chat.</p>
              </div>
              <div data-aos="fade-up" className="border border-white hover:bg-slate-700 duration-200 rounded-xl px-5 py-4  bg-slate-800">
                <span className='py-15  '><ShieldCheck className=' w-12 h-12 p-2  text-sky-700 rounded-xl border border-white'/></span>
                <h1 className='mt-10 text-white text-2xl font-bold'>Secure Online Booking</h1>
                <p className='py-2   text-gray-400 max-w-100 mb-10'>Bank-grade 256-bit encrypted checkout with transparent pricing and no hidden booking or card convenience fees.</p>
              </div>
              <div data-aos="fade-up" className="border border-white hover:bg-slate-700 duration-200 rounded-xl px-5 py-4  bg-slate-800">
                <span className='py-15  '><NotebookPen className=' w-12 h-12 p-2   text-sky-700 rounded-xl border border-white'/></span>
                <h1 className='mt-10 text-white text-2xl font-bold'>Personalized Tour Plans</h1>
                <p className='py-2   text-gray-400 max-w-100 mb-10'>Tailor every single day of your journey. Customize activities, dining preferences, and hotel tiers to match your dreams.</p>
              </div>
              <div data-aos="fade-up" className="border border-white hover:bg-slate-700 duration-200 rounded-xl px-5 py-4  bg-slate-800">
                <span className='py-15  '><Medal className=' w-12 h-12 p-2 text-sky-700 text rounded-xl border border-white'/></span>
                <h1 className='mt-10 text-white text-2xl font-bold'>Trusted By Thousands</h1>
                <p className='py-2   text-gray-400 max-w-100 mb-10'>Over 25,000 satisfied adventurers with a 4.9-star average satisfaction rating across Google, TripAdvisor, and Trustpilot.</p>
              </div>
            </div>
          </div>
      </section>


      <section className='my-15 w-full'>
          <div className="w-[90%] md:w-[75%] mx-auto">
            <div className="flex items-center justify-between">
              <div className=""><span className='text-sky-800 text-lg font-semibold'>Top Itineraries</span><h2 className=' text-lg md:text-2xl font-semibold mt-2'>Our Best Selling Packages</h2></div>
              <button onClick={()=>Navigate('/packages')} className='flex gap-0 md:gap-3  text-sm md:text-lg text-blue-700 font-semibold  items-center'>Explore All Packages <ArrowRight className='w-5 '/></button>
            </div>
            <div  className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
              {HomePackages.map((item)=>(
                <div data-aos="fade-up" className="bg-white overflow-hidden  rounded-2xl h-auto hover:-translate-y-2 hover:shadow-2xl duration-200">
                  <div className="relative  ">
                    <img src={item.img} alt="" className='w-full h-50 hover:scale-105 object-cover rounded-2xl duration-200' />
                    <span className='absolute top-3 bg-blue-600 py-1  font-semibold px-3 rounded-2xl text-white text-sm left-5'>{item.cateory}</span>
                    <p className='bg-black/90 flex items-center gap-3 text-white rounded-2xl text-sm py-1 absolute top-[80%] left-[50%] md:left-[55%] px-3'><Clock className='w-4  text-blue-500 font-semibold'/>{item.duration}</p>
                  </div>
                  <p className='flex mt-5 gap-3 items-center my-4 text-sm mx-5'><LocationEdit className='w-5 text-sky-500'/>{item.location}</p>
                  <h1 className='text-2xl mx-5 mb-2 font-semibold font-serif'>{item.title}</h1>
                  <p className='text-sm h-20 mx-5'>{item.description}</p>
                  <div className=" h-[1px] bg-gray-200 mx-5 my-5 "></div>
                  <div className="flex mx-5 py-5 items-center justify-between">
                    <div className="">
                      <p className='text-sm text-gray-400'>ALL INCLUSIVE</p>
                      <h1 className='text-xl font-bold font-sans'>${item.price}</h1>
                    </div>
                    <button className='bg-sky-700 font-semibold cursor-pointer text-white px-4 py-2 rounded-xl'>Book Now </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </section>
      <section data-aos="fade-up" className='my-10 w-full h-auto md:h-100 flex items-center justify-center bg-linear-to-r from-sky-700 from-70% to-slate-900  '>
           <div className="flex flex-col items-center py-10 md:py-1  justify-center">
            <div className="text-center">
              <span className='text-sky-300 text-sm md:text-lg font-semibold '>PROVEN TRACK RECORD</span>
            <h1 className='text-lg md:text-3xl font-semibold text-white'>Travel In Numbers</h1></div>
            <div className=" mt-5 grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="border border-white rounded-2xl px-5 py-10 text-center">
                <h1 className='text-4xl font-bold text-white'>25,000+</h1>
                 <p className='text-lg mt-2 text-gray-300 '>Happy Travelers</p>
                 <span className='text-sm text-gray-300'>Worldwide satisfied guests</span>
              </div>
              <div className="border border-white rounded-2xl px-5 py-10 text-center">
                <h1 className='text-4xl font-bold text-white'>500+</h1>
                 <p className='text-lg mt-2 text-gray-300 '>Tours Completed</p>
                 <span className='text-sm text-gray-300'>Curated adventures executed</span>
              </div>
              <div className="border border-white rounded-2xl px-5 py-10 text-center">
                <h1 className='text-4xl font-bold text-white'>1200+</h1>
                 <p className='text-lg mt-2 text-gray-300 '>Destinations</p>
                 <span className='text-sm text-gray-300'>Across all 7 continents</span>
              </div>
              <div className="border border-white rounded-2xl px-5 py-10 text-center">
                <h1 className='text-4xl font-bold text-white'>15 Years</h1>
                 <p className='text-lg mt-2 text-gray-300 '>Years Experience</p>
                 <span className='text-sm text-gray-300'>Award-winning hospitality</span>
              </div>
            </div>
           </div>
      </section>

     <section className='w-full my-15'>
        <div className="w-[90%] md:w-[75%] mx-auto">
          <div className="flex items-center justify-between">
            <div className="">
            <span className='text-sm md:text-lg  text-sky-700 font-semibold'>VERIFIED REVIEWS</span>
            <h1 className='text-lg md:text-3xl font-semibold py-2'>What Our Travelers Say</h1>
            </div>
            <button className='flex text-sm md:text-lg font-semibold gap-3 text-sky-700'>Read All 12 Reviews <ArrowRight className='w-5'/></button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
             {Reviews.map((item)=>(
               <div data-aos="fade-up" className="bg-white px-8 border border-gray-400  py-5 rounded-xl">
                <span className='flex gap-2'><Star className='w-5 text-yellow-300  fill-yellow-300 '/>{item.rating}</span>
                <p className="my-3 h-40 md:h-30">{item.review}</p>
                <div className='w-[100%] h-[1px] my-5 bg-gray-300 mx-auto'></div>
                <div className="mt-4 flex gap-5">
                  <img src={item.img} className='w-15 rounded-4xl h-15 object-cover' alt="" />
                  <div className="">
                    <h1 className='text-2xl font-semibold'>{item.name}</h1>
                    <span className='text-sm text-gray-400'>{item.country}</span>
                  </div>
                </div>
               </div>
             ))}
          </div>
        </div>
     </section>
     
     <section data-aos="fade-up" className=" my-15">
        <div className="w-[90%] w-[75%] rounded-xl mx-auto h-auto bg-slate-950">
           <div className="px-5 py-10 flex text-white items-center flex-col">
            <span className='text-lg font-semibold text-sky-400'>Begin Your Story</span>
            <h1 className=' text-lg md:text-3xl font-semibold my-4 '>Ready For Your Next Adventure?</h1>
            <p className="max-w-150 text-sm md:text-lg text-center text-gray-400">Start planning your dream vacation today. Explore amazing destinations, compare travel packages, and book your next unforgettable journey with confidence.</p>
            <div className="flex mt-5 flex-col md:flex-row gap-10 items-center">
              <button className='flex gap-3 cursor-pointer bg-sky-700 px-5 py-3 rounded-2xl'><CalendarCheck/>Book Your Trip</button>
              <button className='flex gap-3 items-center border-2 cursor-pointer border-white px-5  py-3 rounded-2xl hover:bg-white duration-200 hover:text-black font-semibold '>Contact Us<ArrowRight className='w-5 '/></button>
            </div>
           </div>
        </div>
     </section>


    <section data-aos="fade-up" className='my-10'>
        <div className="w-[90%] w-[50%] mx-auto h-auto rounded-2xl bg-white">
          <div className="px-10 py-10 flex flex-col  items-center">
            <span className='text-sm md:text-lg  text-sky-600 font-semibold'>STAY  CONNECTED</span>
            <h1 className='py-2 text-lg  md:text-3xl font-semibold'>Stay Updated With Our Latest Offers</h1>
            <p className='w-full md:max-w-120 text-center py-3'>Subscribe to receive travel tips, exclusive discounts, and the latest tour packages directly in your inbox.</p>
            <div className="flex gap-5 md:gap-10">
              <input type="text" className='border rounded-xl border-gray-300 px-2 md:px-5 py-1 md:py-4' placeholder='Enter Your Email' />
              <button className='px-2 md:px-4 py-2 md:py-4 bg-sky-600 rounded-xl font-semibold  text-white cursor-pointer'>Subscribe</button>
            </div>
          </div>
        </div>
    </section>

    
      {openModal && (
        <div className="fixed z-50 bg-black/50 flex w-full backdrop-blur-sm min-h-[90vh] justify-center items-center">
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

export default Home