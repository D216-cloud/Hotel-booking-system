import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Pages/Home';
import Footer from './components/Footer';
import AllRooms from './Pages/AllRooms';
import RoomDetails from './Pages/RoomDetails';
import MyBooking from './Pages/MyBooking';
import Hotelreg from './components/Hotelreg';
import Layout from './Pages/HotelOwner/Layout';
import Dashboard from './Pages/HotelOwner/Dashboard';
import AddRoom from './Pages/HotelOwner/AddRoom';
import ListRoom from './Pages/HotelOwner/ListRoom';

const App = () => {

  const IsOwnerPath = useLocation().pathname.includes("owner");

  return (
    <div>

      {!IsOwnerPath && <Navbar />}
      {false && <Hotelreg />}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/roos' element={< AllRooms />} />
          <Route path='/roos/:id' element={<RoomDetails />} />
          <Route path='/my-bookings' element={< MyBooking />} />
          <Route path='/owner' element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path='add-room' element={<AddRoom />} />
              <Route path='list-room' element={<ListRoom />} />
          </Route>
        </Routes>

      </div>
      <Footer />

    </div>
  )
}

export default App