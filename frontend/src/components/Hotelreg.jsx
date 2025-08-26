import React from 'react'
import { assets, cities } from '../assets/assets'

const Hotelreg = () => {
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 z-100 flex
    items-center justify-center bg-black/70'>
      <form className='flex bg-white rounded'>
        <img src={assets.regImage} alt="reg-image" className='w-1/2
            rounded-xl hidden md:block' />
        <div className='relative flex flex-col items-center
            md:w-1/2 p-8 md:p-10'>
          <img src={assets.closeIcon} alt="close-icon" className='
                absolute top-4 right-4 h-4 w-4 cursor-pointer' />
          <p className='text-2xl font-semibold mt-6'>Register Your Hotel</p>
          {/* Hotel Name */}
          <div className='w-full mt-4'>
            <lablel htmlfor="name" className="font-medium text-gray-500">Hotel Name</lablel>
            <input
              type="text" id='name'
              placeholder="Type here"
              className="border border-gray-300 rounded w-full px-3 py-2.5 mt-1 outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 placeholder-gray-400 text-sm font-light transition-all duration-200"
              required />
          </div>
          {/* Contect */}
          <div className='w-full mt-4'>
            <lablel htmlfor="contect" className="font-medium text-gray-500">Phone</lablel>
            <input id='contect'
              type="text"
              placeholder="Type here"
              className="border border-gray-300 rounded w-full px-3 py-2.5 mt-1 outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 placeholder-gray-400 text-sm font-light transition-all duration-200"
              required />
          </div>
          {/* adress */}
          <div className='w-full mt-4'>
            <lablel htmlfor="adress" className="font-medium text-gray-500">Adress</lablel>
            <input id='adress'
              type="text"
              placeholder="Type here"
              className="border border-gray-300 rounded w-full px-3 py-2.5 mt-1 outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 placeholder-gray-400 text-sm font-light transition-all duration-200"
              required />
          </div>
          {/* Select City Drop Down */}
          <div className='w-full mt-4 max-w-60 mr-auto'>
            <label htmlFor="city" className='font-medium text-gray-500'>City</label>
            <select id='city' className='border border-gray-200 rounded w-full px-3
            py-2.5 mt-1 outline-indigo-500 font-light' required>
              <option value="">Select City</option>
              {cities.map((city) => (
                <option key={{ city }}>{city}</option>
              ))}
            </select>
          </div>
          <button className='bg-indigo-500 hover:bg-indigo-600 transition-all text-white
          mr-auto px-6 py-2 rounded cursor-pointer mt-6'>Register</button>
        </div>
      </form>

    </div>
  )
}

export default Hotelreg