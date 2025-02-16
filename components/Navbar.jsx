'use client';
import { useState } from 'react';
import Image from 'next/image';
import idealab2 from '@/public/idealab2.jpg';

export default function Navbar() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    email: '',
    college: '',
    className: '',
    appointmentDate: '',
    equipment: '',
    description: ''
  });

  const facilities = [
    {
      title: "3D Printing Lab",
      image: "/3dprinter.png",
      description: "State-of-the-art 3D printing facilities for rapid prototyping and model creation."
    },
    {
      title: "Electronics Lab",
      image: "/electronics.png",
      description: "Fully equipped electronics workspace with testing and development tools."
    },
    {
      title: "Co-working Space",
      image: "/coworking.png",
      description: "Modern collaborative workspace designed for team projects and startup activities."
    },
  ];

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', bookingForm);
    setIsBookingOpen(false);
    setBookingForm({
      name: '',
      phone: '',
      email: '',
      college: '',
      className: '',
      appointmentDate: '',
      equipment: '',
      description: ''
    });
  };

  return (
    <>
      <nav className="relative z-10 container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image 
            src={idealab2}
            alt="IDEALAB MEC Logo" 
            width={50} 
            height={50} 
            className="rounded-full" 
          />
          <span className="ml-3 text-xl font-bold">IDEALAB MEC</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="text-white hover:text-transparent hover:bg-gradient-to-r hover:from-red-500 hover:via-blue-500 hover:to-yellow-500 bg-clip-text">About</a>
          <a href="#events" className="text-white hover:text-transparent hover:bg-gradient-to-r hover:from-red-500 hover:via-blue-500 hover:to-yellow-500 bg-clip-text">Events</a>
          <a href="#facilities" className="text-white hover:text-transparent hover:bg-gradient-to-r hover:from-red-500 hover:via-blue-500 hover:to-yellow-500 bg-clip-text">Facilities</a>
          <a href="#team" className="text-white hover:text-transparent hover:bg-gradient-to-r hover:from-red-500 hover:via-blue-500 hover:to-yellow-500 bg-clip-text">Team</a>

          <button 
            onClick={() => setIsBookingOpen(true)} 
            className="bg-white text-[#2a559e] px-4 py-2 -mt-2 rounded-full font-semibold hover:bg-blue-50 transition-colors"
          >
            Book Facility
          </button>
        </div>
      </nav>

      {/* Booking Dialog */}
      {isBookingOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800 flex-1 text-center">Request Equipment</h2>
              <button 
                onClick={() => setIsBookingOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 border border-gray-300 text-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={bookingForm.name}
                  onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  required
                  className="w-full px-3 py-2 border border-gray-300 text-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={bookingForm.phone}
                  onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 text-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={bookingForm.email}
                  onChange={(e) => setBookingForm({...bookingForm, email: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">College</label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 border border-gray-300 text-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={bookingForm.college}
                  onChange={(e) => setBookingForm({...bookingForm, college: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Class Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 border border-gray-300 text-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={bookingForm.className}
                  onChange={(e) => setBookingForm({...bookingForm, className: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Appointment Date</label>
                <input
                  type="date"
                  required
                  className="w-full px-3 py-2 border border-gray-300 text-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={bookingForm.appointmentDate}
                  onChange={(e) => setBookingForm({...bookingForm, appointmentDate: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Equipment</label>
                <select
                  required
                  className="w-full px-3 py-2 border text-gray-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={bookingForm.equipment}
                  onChange={(e) => setBookingForm({...bookingForm, equipment: e.target.value})}
                >
                  <option value="">Select Equipment</option>
                  {facilities.map((facility, index) => (
                    <option key={index} value={facility.title}>
                      {facility.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  required
                  className="w-full px-3 py-2 border text-gray-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
                  value={bookingForm.description}
                  onChange={(e) => setBookingForm({...bookingForm, description: e.target.value})}
                  placeholder="Please describe your intended use..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-semibold"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
} 