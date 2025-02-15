'use client';
import { useState } from 'react';
import { motion } from "framer-motion";
import { CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import Image from "next/image";
import mec from '@/public/mec.png';
import idealab from '@/public/idealab.jpeg';
import cognicor from '@/public/cognicor.webp';
import member1 from '@/public/alan_biju.jpg';
import member2 from '@/public/godson.png';
import member3 from '@/public/Athulya.jpg';
import member4 from '@/public/Balu.jpeg';
import member5 from '@/public/Meenakshi.jpg';
import member6 from '@/public/Aparna_H.jpg';
import member7 from '@/public/aardra.JPG';
import member8 from '@/public/Uday.jpg';
import member9 from '@/public/parthiv.jpg';
import member10 from '@/public/anirudhan.jpg';
import member11 from '@/public/harish_hari.jpg';
import member12 from '@/public/rohit.jpeg';
import member13 from '@/public/arjun.jpeg';
import member14 from '@/public/prajul.jpeg';
import member15 from '@/public/shradha.jpg';
import member16 from '@/public/vaishnav.jpg';
import sir from '@/public/sir.jpeg'
import event1 from '@/public/event1.jpeg';
import event2 from '@/public/event2.jpg';
import event3 from '@/public/event3.jpg';
import event4 from '@/public/event4.jpg';
import event5 from '@/public/event5.jpg';
import event6 from '@/public/event6.jpg';
import event7 from '@/public/event7.jpg';
import event8 from '@/public/event8.jpg';
import event9 from '@/public/event9.jpg';
import tool1 from '@/public/tool1.png';  
import tool2 from '@/public/tool2.png';  
import tool3 from '@/public/tool3.png';  
import tool4 from '@/public/tool4.png';  
import tool5 from '@/public/tool5.png';  
import tool6 from '@/public/tool6.png';  
import tool7 from '@/public/tool7.png';  
import tool8 from '@/public/tool8.png';  
import tool9 from '@/public/tool9.png';  
import tool10 from '@/public/tool10.png'; 
import tool11 from '@/public/tool11.png'; 

export default function Home() {
  const [showAllMembers, setShowAllMembers] = useState(false);
  const [showAllEvents, setShowAllEvents] = useState(false);
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

  const facultyMember = {
    name: "Kannadas P K",
    role: "Faculty in Charge",
    image: sir
  };

  const teamMembers = [
    {
      name: "Alan Biju",
      role: "Student Ambassodor",
      image: member1,
    },
    {
      name: "Godson C F",
      role: "Student Ambassodor",
      image: member2,
    },
    {
      name: "Athulya V",
      role: "Student",
      image: member3,
    },
    {
      name: "Balu Aravind",
      role: "Student",
      image: member4,
    },
    {
      name: "Meenakshi V J",
      role: "Student",
      image: member5,
    },
    {
      name: "Aparna H",
      role: "Student",
      image: member6,
    },
    {
      name: "Aardhra S",
      role: "Student",
      image: member7,
    },
    {
      name: "Uday Shankar Singh",
      role: "Student",
      image: member8,
    },
    {
      name: "Parthiv Krishnan",
      role: "Student",
      image: member9,
    },
    {
      name: "Anirudhan B",
      role: "Student",
      image: member10,
    },
    {
      name: "Harish Hari",
      role: "Student",
      image: member11,
    },
    {
      name: "Rohit Jose",
      role: "Student",
      image: member12,
    },
    {
      name: "Arjun Krishnan R",
      role: "Student",
      image: member13,
    },
    {
      name: "Prajul George Francis",
      role: "Student",
      image: member14,
    },
    {
      name: "Shradha A Shenoy",
      role: "Student",
      image: member15,
    },
    {
      name: "Vaishnav T P",
      role: "Student",
      image: member16,
    },
  ];

  const visibleMembers = showAllMembers ? teamMembers : teamMembers.slice(0, 4);

  const pastEvents = [
    {
      title: "EUREKA",
      date: "27-07-2024",
      location: "Idealab/Fablab",
      image: event1,
    },
    {
      title: "TinyML Hands-on workshop",
      date: "22-08-2023",
      location: "SDPK hall",
      image: event2,
    },
    {
      title: "Inauguration",
      date: "31-07-2023",
      location: "Internal AUD",
      image: event3,
    },
    {
      title: "Technical training of core members",
      date: "01-06-2023",
      location: "IDEA Lab",
      image: event4,
    },
    {
      title: "2-Day Workshop on Hands on Training in Advanced Equipments of IDEA Lab",
      date: "26-05-2023",
      location: "IDEA Lab",
      image: event5,
    },
    {
      title: "FDP: Hands-on training of Designing & Wood router engraving & cutting",
      date: "18-04-2023",
      location: "IDEA Lab",
      image: event6,
    },
    {
      title: "Raspberry-Pi Workshop",
      date: "28-03-2023",
      location: "IDEA Lab",
      image: event7,
    },
    {
      title: "Community partnership for Technopreneur 2023",
      date: "26-03-2023",
      location: "Zamra International Center",
      image: event8,
    },
    {
      title: "Assisting coding with AI for Arduino",
      date: "25-03-2023",
      location: "IDEALAB",
      image: event9,
    },
  ];

  const visibleEvents = showAllEvents ? pastEvents : pastEvents.slice(0, 3);

  const facilities = [
    {
      title: "Epilog laser engraver",
      image: tool1,
      description: "EPILOG (CO2) laser engraver machines are used for laser engraving, cutting, marking, and etching. It features three different sizes and various wattag..."
    },
    {
      title: "Hmt cnc lathe",
      image: tool2,
      description: "It is a CNC machine tool to perform various operations such as cutting, sanding, knurling, drilling, deformation, facing, and turning, with tools that..."
    },
    {
      title: "HMT CNC router machine",
      image: tool3,
      description: "It is a CNC machine used to cut a variety of different shapes in materials such as wood, plastic, MDF and some metals. Basic configuration includes t..."
    },
    {
      title: "PC workstation",
      image: tool4,
      description: "A desktop with Core i7 processor, 16GB RAM, 1TB SSD and 3050Ti graphics."
    },
    {
      title: "PCB manufacturing station",
      image: tool5,
      description: "It includes equipment and machines to produce multi-layer plated-through Printed Circuit Boards (PCBs), to insert leaded and surface mounted devices. ..."
    },
    {
      title: "Sand blasting machine",
      image: tool6,
      description: "Sandblasting equipment includes systems or machinery, and components in which sand, abrasive, metal shot, and other blast media are driven or propelle..."
    },
    {
      title: "Shopbot CNC",
      image: tool7,
      description: "The CNC router can cut materials like wood, plastics, foam, and even soft metals such as aluminum. With the use of the included software, we can desig..."
    },
    {
      title: "Snapmaker",
      image: tool8,
      description: "SNAPMAKER a350t is a 3-in-one modular machine including a 3d printer, laser cutter and CNC engraver. It has built-in Wi-Fi for sending g-code files, p..."
    },
    {
      title: "SolidWorks Software",
      image: tool9,
      description: "It is a solid modelling computer-aided design and engineering application. It is used to develop mechatronics systems from beginning to end. Starting ..."
    },
    {
      title: "Sublimation printing station",
      image: tool10,
      description: "Sublimation printing is a specific process of printing that first involves printing onto a special sheet of paper, then transferring that image onto a..."
    },
    {
      title: "Ultimaker 2+",
      image: tool11,
      description: "It is a 3D printer with single extrusion swappable nozzles (0.25,0.4,0.6 and 0.8mm), and ability to easily swap and choose pressure of filaments. It u..."
    }
  ];
  const testimonials = [
    { name: "Arjun Raj", text: "IdeaLab MEC helped me turn my project into reality!" },
    { name: "Neha Unnikrishnan", text: "An amazing space to collaborate and innovate." },
    { name: "Adwaith Krishna", text: "Great mentors and a fantastic environment for creativity!" },
    { name: "Megha Suresh", text: "Best place for tech enthusiasts at MEC!" },
    { name: "Vishnu Menon", text: "A hub for innovation and hands-on learning!" },
    { name: "Anjali Pradeep", text: "I got the best guidance for my startup idea here!" },
    { name: "Rahul Dev", text: "The best place to work on real-world projects!" },
    { name: "Sneha Ramesh", text: "I learned so much about entrepreneurship at IdeaLab." },
    { name: "Sidharth Babu", text: "The perfect place to bring ideas to life!" },
    { name: "Gowri Nair", text: "The mentors here helped me refine my project idea." },
    { name: "Harish Kumar", text: "Being part of IdeaLab has been an incredible experience!" },
    { name: "Athira Mohan", text: "A great community of like-minded innovators." },
    { name: "Kiran Rajeev", text: "I built my first prototype here with amazing support!" },
    { name: "Reshma Pillai", text: "A must-join space for all MEC students who love tech." },
    { name: "Manoj Krishna", text: "If you have an idea, IdeaLab is the place to make it happen!" },
    { name: "Arjun Raj", text: "IdeaLab MEC helped me turn my project into reality!" },
    { name: "Neha Unnikrishnan", text: "An amazing space to collaborate and innovate." },
    { name: "Adwaith Krishna", text: "Great mentors and a fantastic environment for creativity!" },
    { name: "Megha Suresh", text: "Best place for tech enthusiasts at MEC!" },
    { name: "Vishnu Menon", text: "A hub for innovation and hands-on learning!" },
    { name: "Anjali Pradeep", text: "I got the best guidance for my startup idea here!" },
    { name: "Rahul Dev", text: "The best place to work on real-world projects!" },
    { name: "Sneha Ramesh", text: "I learned so much about entrepreneurship at IdeaLab." },
    { name: "Sidharth Babu", text: "The perfect place to bring ideas to life!" },
    { name: "Gowri Nair", text: "The mentors here helped me refine my project idea." },
    { name: "Harish Kumar", text: "Being part of IdeaLab has been an incredible experience!" },
    { name: "Athira Mohan", text: "A great community of like-minded innovators." },
    { name: "Kiran Rajeev", text: "I built my first prototype here with amazing support!" },
    { name: "Reshma Pillai", text: "A must-join space for all MEC students who love tech." },
    { name: "Manoj Krishna", text: "If you have an idea, IdeaLab is the place to make it happen!" },
    { name: "Arjun Raj", text: "IdeaLab MEC helped me turn my project into reality!" },
    { name: "Neha Unnikrishnan", text: "An amazing space to collaborate and innovate." },
    { name: "Adwaith Krishna", text: "Great mentors and a fantastic environment for creativity!" },
    { name: "Megha Suresh", text: "Best place for tech enthusiasts at MEC!" },
    { name: "Vishnu Menon", text: "A hub for innovation and hands-on learning!" },
    { name: "Anjali Pradeep", text: "I got the best guidance for my startup idea here!" },
    { name: "Rahul Dev", text: "The best place to work on real-world projects!" },
    { name: "Sneha Ramesh", text: "I learned so much about entrepreneurship at IdeaLab." },
    { name: "Sidharth Babu", text: "The perfect place to bring ideas to life!" },
    { name: "Gowri Nair", text: "The mentors here helped me refine my project idea." },
    { name: "Harish Kumar", text: "Being part of IdeaLab has been an incredible experience!" },
    { name: "Athira Mohan", text: "A great community of like-minded innovators." },
    { name: "Kiran Rajeev", text: "I built my first prototype here with amazing support!" },
    { name: "Reshma Pillai", text: "A must-join space for all MEC students who love tech." },
    { name: "Manoj Krishna", text: "If you have an idea, IdeaLab is the place to make it happen!" },
    { name: "Arjun Raj", text: "IdeaLab MEC helped me turn my project into reality!" },
    { name: "Neha Unnikrishnan", text: "An amazing space to collaborate and innovate." },
    { name: "Adwaith Krishna", text: "Great mentors and a fantastic environment for creativity!" },
    { name: "Megha Suresh", text: "Best place for tech enthusiasts at MEC!" },
    { name: "Vishnu Menon", text: "A hub for innovation and hands-on learning!" },
    { name: "Anjali Pradeep", text: "I got the best guidance for my startup idea here!" },
    { name: "Rahul Dev", text: "The best place to work on real-world projects!" },
    { name: "Sneha Ramesh", text: "I learned so much about entrepreneurship at IdeaLab." },
    { name: "Sidharth Babu", text: "The perfect place to bring ideas to life!" },
    { name: "Gowri Nair", text: "The mentors here helped me refine my project idea." },
    { name: "Harish Kumar", text: "Being part of IdeaLab has been an incredible experience!" },
    { name: "Athira Mohan", text: "A great community of like-minded innovators." },
    { name: "Kiran Rajeev", text: "I built my first prototype here with amazing support!" },
    { name: "Reshma Pillai", text: "A must-join space for all MEC students who love tech." },
    { name: "Manoj Krishna", text: "If you have an idea, IdeaLab is the place to make it happen!" },
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
    <div className="min-h-screen">
      <header className="relative w-full h-screen text-white">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/server.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

        {/* Navbar */}
        <nav className="relative z-10 container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image 
              src={idealab} 
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

        {/* Hero Section */}
        <div className="relative z-10 container mx-auto  pt-40 px-6 py-20 text-center">
          <h1 className="text-5xl font-bold mb-4">Innovate. Create. Transform.</h1>
          <p className="text-xl mb-16">The Innovation and Entrepreneurship Hub of Model Engineering College</p>
          {/* <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
            Join Us
          </button> */}
        </div>
      </header>

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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={bookingForm.name}
                  onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={bookingForm.phone}
                  onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={bookingForm.email}
                  onChange={(e) => setBookingForm({...bookingForm, email: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">College</label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={bookingForm.college}
                  onChange={(e) => setBookingForm({...bookingForm, college: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Class Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={bookingForm.className}
                  onChange={(e) => setBookingForm({...bookingForm, className: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Appointment Date</label>
                <input
                  type="date"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={bookingForm.appointmentDate}
                  onChange={(e) => setBookingForm({...bookingForm, appointmentDate: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Equipment</label>
                <select
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
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

      {/* About Section */}
      <section id="about" className="py-20 bg-[#D9D9D9]">
        <div className="container mx-auto px-6  md:px-12">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#353535]">About Us</h2>
          <div className="flex flex-col divide-y md:flex-row md:divide-x md:divide-y-0 divide-[#bbbbbb] border border-[#bbbbbb] overflow-hidden">
            {/* Box 1 */}
            <div className="flex-1 p-12 text-white">
              <h2 className="text-2xl font-semibold text-[#1d3a3b]">What We Do</h2>
              <p className="mt-2 list-disc list-inside text-gray-600">
              IDEALAB MEC is a student-run innovation hub that fosters entrepreneurship
              and technical excellence. We provide a platform for students to transform
              their ideas into reality through mentorship, resources, and collaboration.
              </p>
            </div>
            {/* Box 2 */}
            <div className="flex-1 p-12 text-white">
              <h2 className="text-2xl font-semibold text-[#1d3a3b]">Our Mission</h2>
              <p className="mt-2 list-disc list-inside text-gray-600">
              To create a vibrant ecosystem of innovation and entrepreneurship
              within MEC, enabling students to develop solutions for real-world
              problems and build successful startups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section id="initiatives" className="py-20 bg-[#D9D9D9] ">
        <div  className="border-t border-[#bbbbbb] pb-16 mx-12"></div>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#353535]">Our Initiatives</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Startup Incubation",
                description: "Supporting student startups with resources and mentorship",
                icon: "🚀",
              },
              {
                title: "Workshops",
                description: "Regular technical and entrepreneurial skill development sessions",
                icon: "💡",
              },
              {
                title: "Innovation Lab",
                description: "State-of-the-art facilities for prototyping and development",
                icon: "🔬",
              },
            ].map((initiative, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{initiative.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-[#1d3a3b]">{initiative.title}</h3>
                <p className="text-gray-600">{initiative.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-[#D9D9D9]">
        <div className="container mx-auto px-6">
        <div  className="border-t border-[#bbbbbb] pb-16 mx-12"></div>
          <h2 className="text-3xl font-bold text-center mb-16 text-[#353535]">Past Events</h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {visibleEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow max-w-sm mx-auto w-full">
                <div className="relative h-72 w-auto">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-center mb-4 line-clamp-2 min-h-[3.5rem] text-[#1d3a3b]">{event.title}</h3>
                  <div className="flex items-center space-x-2 text-gray-600 mb-3">
                    <CalendarIcon className="w-5 h-5" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPinIcon className="w-5 h-5" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Show More Events Button */}
          {pastEvents.length > 3 && (
            <div className="text-center mt-16 -mb-8">
              <button
                onClick={() => setShowAllEvents(!showAllEvents)}
                className="flex items-center justify-center mx-auto rounded-full bg-white h-10 w-10 space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
              >
                {/* <span>{showAllEvents ? 'Show Less' : 'Show More'}</span> */}
                <ChevronDownIcon 
                  className={`w-7 h-7 transform transition-transform duration-300 ${
                    showAllEvents ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-20 bg-[#D9D9D9]">
        <div className="container mx-auto px-6">
        <div  className="border-t border-[#bbbbbb] pb-16 mx-12"></div>
          <h2 className="text-3xl font-bold text-center mb-16 text-[#353535] ">Our Facilities</h2>
          <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow max-w-xs w-full md:w-[calc(33.333%-1.33rem)]">
                <h3 className="text-lg  p-4 text-center font-semibold mb-2 text-[#1d3a3b]">{facility.title}</h3>
                <div className="relative h-32 w-32 mx-auto my-4">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600 line-clamp-3">{facility.description}</p>
                  <button className="mt-3 text-sm text-[#3C6E71] hover:text-[#294a4c] font-semibold">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials Section */}

      <section id="testimonials" className="py-20 bg-[#D9D9D9]">
        <div className="container mx-auto px-6">
                <div  className="border-t border-[#bbbbbb] pb-16 mx-12"></div>

          <h2 className="text-3xl font-bold text-center mb-12 text-[#353535]">Testimonials</h2>
           
            <div className="overflow-hidden py-10 ">
              <motion.div
                className="flex space-x-10 w-max"
                animate={{
                  x: ["0%", "-100%"],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 160,
                  ease: "linear",
                }}
              >
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                  <div key={index} className="relative min-w-[250px] min-h-[150px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-yellow-500 to-blue-500 rounded-lg p-[2px]">
                    <div className="w-full h-full bg-white rounded-lg p-6 shadow-lg">
                      <p className="text-gray-700 italic">"{testimonial.text}"</p>
                      <h3 className="mt-4 font-semibold text-[#3C6E71]">- {testimonial.name}</h3>
                    </div>
                  </div>
                </div>
                
                ))}
              </motion.div>
            </div>
  
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-[#D9D9D9]">
        <div className="container mx-auto px-6">
        <div  className="border-t border-[#bbbbbb] pb-16 mx-12"></div>
          <h2 className="text-3xl font-bold text-center mb-12 text-[#353535]">Our Team</h2>
          
          {/* Faculty Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-center mb-8 text-gray-600">Faculty</h3>
            <div className="flex justify-center">
              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full bg-gradient-to-br from-red-500 via-blue-500 to-green-500 p-[3px]">
                  <Image
                    src={facultyMember.image}
                    alt={facultyMember.name}
                    width={180} 
                    height={180}
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#1d3a3b]">{facultyMember.name}</h3>
                <p className="text-gray-600">{facultyMember.role}</p>
              </div>
            </div>
          </div>

          {/* Student Team Section */}
          <h3 className="text-2xl font-semibold text-center mb-8 text-gray-600">Student Team</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {visibleMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full bg-gradient-to-br from-red-500 via-blue-500 to-green-500 p-[3px]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={180} 
                      height={180}
                      className="rounded-full object-cover w-full h-full"
                    />
              </div>
                <h3 className="text-xl font-semibold text-[#1d3a3b]">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>

          {/* Show More Button */}
          {teamMembers.length > 4 && (
            <div className="text-center mt-16 -mb-8">
              <button
                onClick={() => setShowAllMembers(!showAllMembers)}
                className="flex items-center justify-center mx-auto h-10 w-10  rounded-full bg-white space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
              >
                {/* <span>{showAllMembers ? '' : ''}</span> */}
                <ChevronDownIcon 
                  className={`w-7 h-7 transform transition-transform duration-300 ${
                    showAllMembers ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#353535] text-white py-12">
        <div className="container mx-auto px-6">
          {/* Logos Section */}
          <div className="flex justify-center space-x-12 mb-8 ">
            <Image
              src={mec}
              alt="MEC Logo"
              width={100}
              height={100}
              className="object-contain"
            />
            <Image
              src={idealab}
              alt="IDEALAB Logo"
              width={100}
              height={100}
              className="object-contain"
            />
            <Image
              src={cognicor}
              alt="Cognicor Logo"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>

          {/* Contact Information */}
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold mb-4">Connect with us</h3>
              <div className="flex justify-center space-x-6">
                <a href="mailto:contact@idealabmec.com" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
                  <span>📧</span>
                  <span>Email Us</span>
                </a>
                <a href="https://instagram.com/idealabmec" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
                  <span>📱</span>
                  <span>Follow Us</span>
                </a>
              </div>
            <div className="space-y-2">
              <p className="font-semibold">Model Engineering College</p>
              <p>Thrikkakara, Kochi</p>
              <p>Kerala, PIN: 682021</p>
              <p>Contact: <a href="mailto:idealab@mec.ac.in" className="hover:text-blue-300">idealab@mec.ac.in</a></p>
              <p>Phone: <a href="tel:9605169646" className="hover:text-blue-300">9605169646</a></p>
            </div>
          </div>
          <div className="text-center text-gray-400 space-y-2 mb-8">
            <p>Managed by Institute of Human Resource Development</p>
            <p>Established by Government of Kerala</p>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-500 border-t border-gray-700 pt-4">
            <p>Copyright © 2025 </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
