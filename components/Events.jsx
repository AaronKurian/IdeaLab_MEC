'use client';
import { useState } from 'react';
import Image from 'next/image';
import { CalendarIcon, MapPinIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import event1 from '@/public/event1.jpeg';
import event2 from '@/public/event2.jpg';
import event3 from '@/public/event3.jpg';
import event4 from '@/public/event4.jpg';
import event5 from '@/public/event5.jpg';
import event6 from '@/public/event6.jpg';
import event7 from '@/public/event7.jpg';
import event8 from '@/public/event8.jpg';
import event9 from '@/public/event9.jpg';

export default function Events() {
  const [showAllEvents, setShowAllEvents] = useState(false);

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

  return (
    <section id="events" className="py-20 bg-[#f5fafc] font-satoshi">
      <div className="container mx-auto px-6">
        <div className="border-t border-[#bbbbbb] pb-16 mx-12"></div>
        <h2 className="text-3xl font-bold text-center mb-16 text-[#353535]" data-aos="fade-up">Past Events</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {visibleEvents.map((event, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-b from-white to-gray-100 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow max-w-sm mx-auto w-full"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative h-72 w-auto m-2 rounded-lg">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold text-center mb-4 line-clamp-2 min-h-[3.5rem] text-[#1d3a3b]">{event.title}</h3>
                <div className="flex justify-center">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <CalendarIcon className="w-5 h-5" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <MapPinIcon className="w-5 h-5" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {pastEvents.length > 3 && (
          <div 
            className="text-center mt-16 -mb-8"
            data-aos="fade-up"
          >
            <button
              onClick={() => setShowAllEvents(!showAllEvents)}
              className="flex items-center justify-center mx-auto rounded-full bg-white h-10 w-10 space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
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
  );
} 