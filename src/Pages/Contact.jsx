import React from 'react'
import { Mail,CalendarCheck, LocationEdit, Clock, Phone } from 'lucide-react'
import { FaTwitter, FaFacebook, FaLinkedin,FaInstagram, FaYoutube } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Contact() {
  AOS.init({
        duration:'1000',
        once:false
      });
  return (
    <div className='relative mt-10'>
      <section className='w-full h-100 my-10 bg-slate-900 flex items-center justify-center'>
        <div className="text-center flex flex-col items-center">
          <span className='text-sky-300 flex  font-semibold px-5 py-1 rounded-2xl bg-blue-300/40 items-center gap-4'><Mail className='w-5 ' />24/7 Global Travel Concierge</span>
          <h1 className='text-2xl md:text-4xl  text-white font-semibold py-3'>Get In Touch</h1>
          <p className=' my-3 text-lg  text-white max-w-150'>Have questions or want to craft a custom expedition? Speak with our certified travel specialists today.</p>
        </div>
      </section>


      <section className='my-10'>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 w-[90%] md:w-[80%] mx-auto">
          <div data-aos='fade-up' className="bg-white w-full rounded-2xl p-10 col-span-1 md:col-span-2">
            <h1 className='text-3xl font-semibold my-2'>Contact Information</h1>
            <p className="my-2 text-sm text-gray-600">Reach out by telephone, drop by our headquarters, or send an inquiry. Our private travel consultants respond within 2 hours.</p>
            <div className=" flex gap-6 mt-6 ">
              <LocationEdit className='w-8 h-8 text-sky-500' />
              <div className="">
                <h1 className='text-2xl '>Office Address</h1>
                <p className="text-sm  mt-2 text-sm text-gray-600">742 Evergreen Terrace, Suite 400
                  Financial District, New York, NY 10005</p>
              </div>
            </div>
            <div className=" flex gap-6 mt-6 ">
              <Phone className='w-8 h-8 text-sky-500' />
              <div className="">
                <h1 className='text-2xl '>Phone Number</h1>
                <p className="text-sm  mt-2 text-gray-600">Toll-Free: +1 (800) 456-7890</p>
                <p className="text-sm mt-1 text-gray-600 ">Direct / WhatsApp: +1 (555) 234-9876</p>
              </div>
            </div>
            <div className=" flex gap-6 mt-6 ">
              <Mail className='w-8 h-8 text-sky-500' />
              <div className="">
                <h1 className='text-2xl '>Email Address</h1>
                <p className="text-sm  mt-2 text-sm text-gray-600">concierge@travelagency.com</p>
                <p className='mt-1 text-sm text-gray-600'>support@travelagency.com</p>
              </div>
            </div>
            <div className=" flex gap-6 mt-6 ">
              <Clock className='w-8 h-8 text-sky-500' />
              <div className="">
                <h1 className='text-2xl '>Business Hours</h1>
                <p className="text-sm  mt-2 text-sm text-gray-600">Monday – Friday: 8:00 AM – 8:00 PM EST</p>
                <p className="text-sm mt-1 text-sm text-gray-600">Saturday – Sunday: 9:00 AM – 5:00 PM EST</p>
              </div>
            </div>
            <div  className="bg-gray-200 w-[90%] mx-auto h-[1px] my-10"></div>
            <h1 className='text-4xl fontsemi-bold'>Connect on Social Media</h1>
             <div className="mt-6 flex items-center w-full gap-5">
              <FaFacebook className='text-sky-600 w-5 h-5'/>
              <FaInstagram className='text-sky-600 w-5 h-5'/>
              <FaLinkedin className='text-sky-600 w-5 h-5'/>
              <FaYoutube className='text-sky-600 w-5 h-5'/>
              <FaTwitter className='text-sky-600 w-5 h-5'/>
             </div>
          </div>
          <div data-aos='fade-up' className="bg-white rounded-2xl col-span-1 md:col-span-3 p-10">
            <h1 className='text-3xl font-semibold'>Send Us A Message</h1>
            <p className="text-sm my-3 text-gray-500">Fill out the form below to receive a customized quote and consultation.</p>
            <div className="mt-10">
              <form action="" className='grid grid-cols-2 gap-4'>
                <div className="flex flex-col">
                   <label htmlFor="" className='text-gray-600 font-semibold'>Full Name *</label>
                   <input type="text" placeholder='John Doe'  className='border border-gray-200 px-4 py-2 rounded-xl mt-1' />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className='text-gray-600 font-semibold'>Email Address *</label>
                  <input type="text" placeholder='johndoe@gmail.com' className='border border-gray-200 px-4 py-2 rounded-xl mt-1' />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className='text-gray-600 font-semibold'>Phone Number  *</label>
                  <input type="text" placeholder='+1 (555) 012-3456' className='border border-gray-200 px-4 py-2 rounded-xl mt-1' />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className='text-gray-600 font-semibold'>Destination  *</label>
                  <select type="text" className='border border-gray-200 px-4 py-2 rounded-xl mt-1' > 
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
                  <label htmlFor="" className='text-gray-600 font-semibold'>Travel Date*</label>
                  <input type="date" className='border border-gray-200 px-4 py-2 rounded-xl mt-1' />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className='text-gray-600 font-semibold'>Number Of Travelers *</label>
                  <select type="text" className='border border-gray-200 px-4 py-2 rounded-xl mt-1' >
                  <option value="1 Person">1 Person</option>  
                  <option value="2 Person">2 Person</option>  
                  <option value="3 Person">3 Person</option>  
                  <option value="4 Person">4 Person(Family)</option>  
                   </select>
                </div>
                <div className="flex flex-col col-span-2">
                  <label htmlFor="" className='text-gray-600 font-semibold'> Message </label>
                  <textarea cols={20} rows={5} type="text" className='border border-gray-200 px-4 py-2 rounded-xl mt-1' placeholder='Tell us about your desired vacation place' />
                </div>

                <div className="col-span-2 mt-5 ">
                  <button className='w-full py-5 rounded-xl text-xl text-white font-semibold cursor-pointer hover:bg-sky-800 duration-200 bg-sky-700'>Send Message</button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </section>

    
          <section data-aos='fade-up' className='w-[90%] md:w-[50%] my-10 rounded-2xl mx-auto h-auto bg-linear-to-r from-sky-800 to-slate-900 flex items-center justify-center'>
            <div className="my-10 text-center flex flex-col items-center ">
              <span className='text-sky-400  py-4'>Complimentary Itinerary Design</span>
              <h1 className='text-xl max-w-100 md:text-3xl font-semibold text-white mt-5'>Let's Start Planning Your Dream Vacatio</h1>
              <p className='text-white py-2 max-w-150 py-2'>Contact our team today and receive a free travel consultation with tailored resort recommendations and flight options.</p>
              <button className='text-center flex items-center justify-center bg-sky-700 px-4 py-2 rounded-xl cursor-pointer text-white font-semibold gap-4'> Send Message </button>
            </div>
          </section>

    </div>
  )
}

export default Contact