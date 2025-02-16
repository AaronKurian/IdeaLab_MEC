'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import idealab from '@/public/idealab.jpeg';
import idealab2 from '@/public/idealab2.jpg';
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

export default function Team() {
  const [showAllMembers, setShowAllMembers] = useState(false);

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

  return (
    <section id="team" className="py-20 bg-[#D9D9D9]">
      <div className="container mx-auto px-6">
        <div className="border-t border-[#bbbbbb] pb-16 mx-12"></div>
        <h2 
          className="text-3xl font-bold text-center mb-12 text-[#353535]"
          data-aos="fade-up"
        >
          Our Team
        </h2>
        
        {/* Faculty Section */}
        <div className="mb-16" data-aos="fade-up" data-aos-delay="100">
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
        <h3 
          className="text-2xl font-semibold text-center mb-8 text-gray-600"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Student Team
        </h3>
        <div className="grid md:grid-cols-4 gap-8">
          {visibleMembers.map((member, index) => (
            <div 
              key={index} 
              className="text-center"
              data-aos="fade-up"
              data-aos-delay={300 + (index * 100)}
            >
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
          <div 
            className="text-center mt-16 -mb-8"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <button
              onClick={() => setShowAllMembers(!showAllMembers)}
              className="flex items-center justify-center mx-auto h-10 w-10 rounded-full bg-white space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
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
  );
} 