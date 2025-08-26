import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const HotelCard = ({ room, index }) => {
  return (
    <Link
      to={'/roos/' + room._id}
      onClick={() => scrollTo(0, 0)}
      key={room._id}
      className="relative max-w-[280px] w-full rounded-xl overflow-hidden bg-white text-gray-700 shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative overflow-hidden rounded-t-xl h-48 sm:h-56">
        <img
          src={room.images[0]}
          alt={`${room.hotel.name} room`}
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
        {index % 2 === 0 && (
          <p className="absolute top-3 left-3 text-xs font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full shadow-md select-none">
            Best Seller
          </p>
        )}
      </div>

      <div className="p-5 flex flex-col justify-between h-48">
        <div>
          <div className="flex items-center justify-between mb-1">
            <p className="font-playfair text-lg font-semibold text-gray-900 truncate">
              {room.hotel.name}
            </p>
            <div className="flex items-center gap-1 text-yellow-500 font-semibold select-none">
              <img src={assets.starIconFilled} alt="star icon" className="w-4 h-4" />
              <span>4.5</span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <img src={assets.locationIcon} alt="location icon" className="w-4 h-4" />
            <span className="truncate">{room.hotel.address}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-6">
          <p className="text-lg font-semibold text-gray-900">
            ${room.pricePerNight} <span className="text-sm font-normal text-gray-600">/ night</span>
          </p>
          <button
            className="px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg shadow-md hover:from-blue-700 hover:to-blue-600 transition-colors duration-300"
            type="button"
          >
            Book Now
          </button>
        </div>
      </div>
    </Link>
  )
}

export default HotelCard
