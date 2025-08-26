import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets' // Ensure avatar1, avatar2, avatar3 exist

const reviews = [
  {
    id: 1,
    name: "Aarav Sharma",
    location: "New Delhi, India",
    rating: 5,
    comment: "Truly a five-star experience! The staff was friendly, the rooms were luxurious, and every detail was taken care of.",
    avatar: assets.avatar1,
  },
  {
    id: 2,
    name: "Lily Thompson",
    location: "London, UK",
    rating: 4,
    comment: "A beautiful property with amazing views. The atmosphere was peaceful and relaxing — highly recommended!",
    avatar: assets.avatar2,
  },
  {
    id: 3,
    name: "Carlos Mendez",
    location: "Barcelona, Spain",
    rating: 5,
    comment: "I had an unforgettable stay. Everything was perfect — from the check-in to the cozy rooms and gourmet dining.",
    avatar: assets.avatar3,
  },
]

const StarRating = ({ count }) => (
  <div className="flex gap-1">
    {Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`${i < count ? "text-yellow-400" : "text-gray-300"}`}>★</span>
    ))}
  </div>
)

const OurGuest = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 py-20 
    bg-gradient-to-r from-sky-300/40 via-sky-100/20 to-transparent
    min-h-screen"
    >
      {/* Rating Overview */}
      <div className="text-center mb-10">
        <p className="text-sm text-gray-600 uppercase tracking-widest mb-2">Rated 4.9/5 by 500+ guests</p>
        <div className="flex justify-center items-center text-yellow-400 text-2xl mb-2">
          <StarRating count={5} />
        </div>
        <p className="text-gray-500 text-sm">based on verified reviews</p>
      </div>

      {/* Title Section */}
      <Title
        title="Hear from Our Happy Guests"
        subTitle="Timeless experiences, unforgettable stays — see what makes us truly exceptional."
      />

      {/* Guest Review Cards */}
      <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white shadow-md rounded-2xl p-6 group transition-all hover:shadow-lg border border-gray-200">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={assets.heartIcon}
                alt={review.name}
                className="w-14 h-14 rounded-full object-cover border border-gray-300"
              />
              <div>
                <h3 className="text-lg font-semibold">{review.name}</h3>
                <p className="text-sm text-gray-500">{review.location}</p>
                <StarRating count={review.rating} />
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurGuest
