import React, { useState } from 'react'
import { assets, facilityIcons, roomsDummyData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

// ✅ Custom Checkbox
const CheckBox = ({ label, selected = false, onChange = () => { } }) => {
  return (
    <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm relative">
      <input
        type="checkbox"
        checked={selected}
        onChange={(e) => onChange(e.target.checked, label)}
        className="peer hidden"
      />
      <div className={`w-5 h-5 border rounded-sm flex items-center justify-center transition
        ${selected ? 'bg-blue-600 border-blue-600' : 'border-gray-400 bg-white'}`}>
        {selected && <span className="text-white text-xs">✔</span>}
      </div>
      <span className='font-light select-none'>{label}</span>
    </label>
  )
}

// ✅ Custom Radio Button
const RadioButton = ({ label, selected = false, onChange = () => { } }) => {
  return (
    <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
      <input
        type="radio"
        name='sortOption'
        checked={selected}
        onChange={() => onChange(label)}
        className="w-4 h-4 accent-blue-600"
      />
      <span className='font-light select-none'>{label}</span>
    </label>
  )
}

const AllRooms = () => {
  const navigate = useNavigate();
  const [openFilters, setOpenFilters] = useState(true);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedSort, setSelectedSort] = useState('');

  const rooomTypes = [
    "Single Bed",
    "Double Bed",
    "Luxury Bed",
    "Family Suite",
  ];

  const priceRange = [
    '0 to 500',
    '500 to 1000',
    '1000 to 2000',
    '2000 to 3000',
  ];

  const sortOptions = [
    "Price Low to High",
    "Price High to Low",
    "Newest First"
  ];

  const handleFilterChange = (checked, label) => {
    if (checked) {
      setSelectedFilters([...selectedFilters, label]);
    } else {
      setSelectedFilters(selectedFilters.filter((item) => item !== label));
    }
  };

  const handleSortChange = (label) => {
    setSelectedSort(label);
  };

  return (
    <div className='flex flex-col-reverse lg:flex-row items-start justify-between
    pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32'>
      <div>
        <div>
          <h1 className='font-playfair text-4xl md:text-[40px]'>
            Hotel Rooms
          </h1>
          <p className='text-sm md:text-base text-gray-500/90 mt-2'>
            Take Advantages Of Our Limited-time And Special Package To Enhance Your Stay And <br /> create Unforgettable memories.
          </p>
        </div>

        {roomsDummyData.map((room) => (
          <div key={room._id} className='flex flex-col md:flex-row items-start py-10 gap-6
          border-b border-gray-300 last:pb-30 last:border-0'>

            <img onClick={() => { navigate(`/roos/${room._id}`); window.scrollTo(0, 0); }}
              src={room.images[0]} alt="hotel-img" title='View Room Details'
              className='max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer transition hover:scale-[1.015]' />

            <div className='md:w-1/2 flex flex-col gap-2'>
              <p className='text-gray-500'>{room.hotel.city}</p>

              <p onClick={() => { navigate(`/roos/${room._id}`); window.scrollTo(0, 0); }}
                className='text-gray-800 text-3xl font-playfair cursor-pointer hover:text-blue-600 transition'>
                {room.hotel.name}
              </p>

              <div className='flex flex-col gap-1'>
                <div className='flex items-center gap-2'>
                  <div className='flex text-yellow-400 text-lg'>
                    ★★★★☆
                  </div>
                  <p className='text-sm text-gray-600'>200+ reviews</p>
                </div>

                <div className='flex items-center gap-1 text-gray-500 text-sm'>
                  <img src={assets.locationIcon} alt="location-Icon" className='w-4 h-4' />
                  <span>{room.hotel.address}</span>
                </div>

                <div className='flex flex-wrap items-center mt-3 mb-6 gap-4'>
                  {room.amenities.map((item, index) => (
                    <div key={index} className='flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F5F5FF]/70'>
                      <img src={facilityIcons[item]} alt={item} className='w-5 h-5' />
                      <p className='text-xs'>{item}</p>
                    </div>
                  ))}
                </div>

                <p className='text-xl font-medium text-gray-700'>${room.pricePerNight} /night</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className='bg-white w-80 border border-gray-300 text-gray-600 rounded-lg shadow-sm
      max-lg:mb-8 min-lg:mt-16'>

        <div className={`flex items-center justify-between px-5 py-3 border-b border-gray-300`}>
          <p className='text-base font-semibold text-gray-800'>FILTERS</p>
          <div>
            <span onClick={() => setOpenFilters(!openFilters)}
              className='lg:hidden cursor-pointer text-sm font-medium text-blue-500'>
              {openFilters ? 'HIDE' : 'SHOW'}
            </span>
            <span className='hidden lg:block text-sm font-medium text-red-500 cursor-pointer'>
              CLEAR
            </span>
          </div>
        </div>

        <div className={`${openFilters ? 'h-auto' : 'h-0 lg:h-auto'} overflow-hidden transition-all duration-300`}>
          <div className='px-5 pt-5'>
            <p className='font-medium text-gray-800 pb-2'>Popular Filters</p>
            {rooomTypes.map((room, index) => (
              <CheckBox
                key={index}
                label={room}
                selected={selectedFilters.includes(room)}
                onChange={handleFilterChange}
              />
            ))}
          </div>

          <div className='px-5 pt-5'>
            <p className='font-medium text-gray-800 pb-2'>Price Ranges</p>
            {priceRange.map((range, index) => (
              <CheckBox
                key={index}
                label={`$ ${range}`}
                selected={selectedFilters.includes(`$ ${range}`)}
                onChange={handleFilterChange}
              />
            ))}
          </div>

          <div className='px-5 pt-5 pb-7'>
            <p className='font-medium text-gray-800 pb-2'>Sort By</p>
            {sortOptions.map((option, index) => (
              <RadioButton
                key={index}
                label={option}
                selected={selectedSort === option}
                onChange={handleSortChange}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllRooms
