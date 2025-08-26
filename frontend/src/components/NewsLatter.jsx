import React from 'react'
import { assets } from '../assets/assets'
import Title from './Title'

const Newsletter = () => {
  return (
    <div className="flex flex-col items-center max-w-5xl w-full rounded-[2rem] px-6 py-20 mx-4 lg:mx-auto my-24 bg-gradient-to-br from-[#1f1f1f] via-[#111] to-black text-white shadow-2xl border border-white/10 backdrop-blur-lg">

      <Title
        title="Stay Inspired"
        subTitle="Subscribe to our newsletter and be the first to discover breathtaking destinations, secret getaways, and exclusive travel deals curated just for you."
      />

      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col md:flex-row items-center justify-center gap-4 mt-10 w-full px-4"
      >
        <input
          type="email"
          required
          className="bg-white/10 text-white placeholder-white/60 px-5 py-3.5 rounded-xl border border-white/30 w-full md:max-w-md focus:outline-none focus:ring-2 focus:ring-white/40 focus:bg-white/20 transition-all duration-300"
          placeholder="Enter your email address"
        />

        <button
          type="submit"
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg hover:brightness-110 hover:scale-105 transition-all duration-300 active:scale-95 group"
        >
          Subscribe
          <img
            src={assets.arrowIcon}
            alt="arrow"
            className="w-4 transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>
      </form>

      <p className="text-gray-400 mt-6 text-xs text-center max-w-md mx-auto">
        By subscribing, you agree to our Privacy Policy and consent to receive exciting updates from us.
      </p>
    </div>
  )
}

export default Newsletter
