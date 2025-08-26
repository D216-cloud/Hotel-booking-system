import React from 'react'
import Title from './Title'
import { assets, exclusiveOffers } from '../assets/assets'

const ExclusiveOffer = () => {
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30'>
      
      {/* Title and Button */}
      <div className='flex flex-col md:flex-row items-center justify-between w-full'>
        <Title
          align='left'
          title='Exclusive Offers'
          subTitle='Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.'
        />
        <button className="view-all-btn group flex items-center gap-2 text-blue-600 font-semibold hover:underline mt-4 md:mt-0">
          View All Offers
          <img
            src={assets.arrowIcon}
            alt="arrow-icon"
            className='group-hover:translate-x-1 transition-transform duration-200'
          />
        </button>
      </div>

      {/* Offers Cards */}
      <div className="grid gap-6 mt-10 w-full md:grid-cols-2 lg:grid-cols-3">
        {exclusiveOffers.map((item, index) => {
          const priceoff = index === 0 ? 25 : 20

          return (
            <div
              key={item._id}
              className="group relative flex flex-col justify-between gap-4 px-4 pt-12 pb-5 rounded-xl text-white bg-no-repeat bg-cover bg-center overflow-hidden border-wrap-card transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-[1.02]"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-0"></div>

              {/* Discount Badge */}
              <p className="z-10 px-3 py-1 absolute top-4 left-4 text-xs bg-white text-gray-800 font-medium rounded-full shadow-md">
                {priceoff}% OFF
              </p>

              {/* Content */}
              <div className="z-10">
                <p className="text-2xl font-semibold font-playfair drop-shadow-sm">{item.title}</p>
                <p className="text-sm text-white/90 mt-1">{item.description}</p>
                <p className="text-xs text-white/60 mt-3">Expires {item.expiryDate}</p>
              </div>

              {/* CTA Button */}
              <button className="z-10 flex items-center gap-2 font-medium cursor-pointer mt-4 text-white hover:underline">
                View Offer
                <img
                  className="invert group-hover:translate-x-1 transition-transform duration-200"
                  src={assets.arrowIcon}
                  alt="arrowIcon"
                />
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ExclusiveOffer
