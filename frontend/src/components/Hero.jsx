import React from 'react'
import { assets, cities } from '../assets/assets'

const Hero = () => {
  return (
    <div
      className="flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32
                 text-white bg-[url('/src/assets/Hero-Background.jpg')] bg-no-repeat bg-cover bg-center
                 min-h-screen"
    >
      <p className="bg-[#49B9FF]/60 px-4 py-1.5 rounded-full mt-20 font-semibold text-sm tracking-wide shadow-lg max-w-max">
        The Ultimate Hotel Experience
      </p>

      <h1 className="font-playfair text-3xl md:text-5xl lg:text-[56px] md:leading-[56px] font-extrabold max-w-xl mt-4 drop-shadow-md">
        Discover Your Perfect Gateway Destination
      </h1>

      <p className="max-w-2xl mt-3 text-sm md:text-base text-slate-200 drop-shadow-sm">
        Unparalleled Luxury And Comfort Await At The World’s Most Exclusive Hotels And Resorts. Start Your Journey Today.
      </p>

      <form className="bg-white bg-opacity-90 text-gray-700 rounded-xl px-8 py-6 mt-10 flex flex-col md:flex-row gap-6 max-md:items-start max-md:mx-auto shadow-lg w-full max-w-5xl">
        
        {/* Destination Input */}
        <div className="flex flex-col">
          <label htmlFor="destinationInput" className="flex items-center gap-2 text-gray-900 font-semibold mb-1">
            <img src={assets.calenderIcon} alt="calendar icon" className="h-5" />
            Destination
          </label>
          <input
            list="destinations"
            id="destinationInput"
            type="text"
            className="rounded-md border border-gray-300 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-400"
            placeholder="Type here"
            required
          />
          <datalist id="destinations">
            {cities.map((city, index) => (
              <option value={city} key={index} />
            ))}
          </datalist>
        </div>

        {/* Check In Input */}
        <div className="flex flex-col">
          <label htmlFor="checkIn" className="flex items-center gap-2 text-gray-900 font-semibold mb-1">
            <img src={assets.calenderIcon} alt="calendar icon" className="h-5" />
            Check in
          </label>
          <input
            id="checkIn"
            type="date"
            className="rounded-md border border-gray-300 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-400"
          />
        </div>

        {/* Check Out Input */}
        <div className="flex flex-col">
          <label htmlFor="checkOut" className="flex items-center gap-2 text-gray-900 font-semibold mb-1">
            <img src={assets.calenderIcon} alt="calendar icon" className="h-5" />
            Check out
          </label>
          <input
            id="checkOut"
            type="date"
            className="rounded-md border border-gray-300 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-400"
          />
        </div>

        {/* Guests Input */}
        <div className="flex flex-col">
          <label htmlFor="guests" className="text-gray-900 font-semibold mb-1">
            Guests
          </label>
          <input
            min={1}
            max={4}
            id="guests"
            type="number"
            className="rounded-md border border-gray-300 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-400 max-w-[80px]"
            placeholder="1"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="flex items-center justify-center gap-2 rounded-md bg-black py-3 px-6 text-white font-semibold hover:bg-gray-900 transition-colors max-md:w-full max-md:py-3"
        >
          <img src={assets.searchIcon} alt="Search Icon" className="h-5" />
          <span>Search</span>
        </button>
      </form>
    </div>
  )
}

export default Hero
