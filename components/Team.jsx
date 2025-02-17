'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ChevronDownIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { FaLinkedin } from 'react-icons/fa';
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

const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );

export default function Team() {
  const [showAllMembers, setShowAllMembers] = useState(false);

  const facultyMember = {
    name: "Kannadas P K",
    role: "Faculty in Charge",
    image: sir,
    phone: "+919446275916"
  };

  const teamMembers = [
    {
      name: "Alan Biju",
      role: "Student Ambassodor",
      image: member1,
      phone: "+917907025154",
      linkedin: "https://www.linkedin.com/in/alan--biju/"
    },
    {
      name: "Godson C F",
      role: "Student Ambassodor",
      image: member2,
      phone: "+919656116762",
      linkedin: "https://www.linkedin.com/in/godsonchakkalakkal/"
    },
    {
      name: "Athulya V",
      role: "Student",
      image: member3,
      phone: "+916282456148",
      linkedin: "https://www.linkedin.com/in/athulya-v-b8784b255/"
    },
    {
      name: "Balu Aravind",
      role: "Student",
      image: member4,
      phone: "+918714364808",
      linkedin: "https://www.linkedin.com/in/balu-k-aravind-24aa56307/"
    },
    {
      name: "Meenakshi V J",
      role: "Student",
      image: member5,
      phone: "+917994149329",
      linkedin: "https://www.linkedin.com/in/meenakshi-v-j-9152a3266/"
    },
    {
      name: "Aparna H",
      role: "Student",
      image: member6,
      phone: "+919544001013",
      linkedin: ""
    },
    {
      name: "Aardhra S",
      role: "Student",
      image: member7,
      phone: "+917592823810",
      linkedin: "https://www.linkedin.com/in/aardra-s-a11050342/"
    },
    {
      name: "Uday Shankar Singh",
      role: "Student",
      image: member8,
      phone: "+918714747537",
      linkedin: "https://www.linkedin.com/in/uday-shankar-singh-bs/"
    },
    {
      name: "Parthiv Krishnan",
      role: "Student",
      image: member9,
      phone: "+917736599485",
      linkedin: "https://www.linkedin.com/in/parthiv-krishnan-93b519255/"
    },
    {
      name: "Anirudhan B",
      role: "Student",
      image: member10,
      phone: "+919645879038",
      linkedin: "https://www.linkedin.com/in/anirudhan-b-74a773279/"
    },
    {
      name: "Harish Hari",
      role: "Student",
      image: member11,
      phone: "+918129928750",
      linkedin: "https://www.linkedin.com/in/the-harish-hari/"
    },
    {
      name: "Rohit Jose",
      role: "Student",
      image: member12,
      phone: "+917907687002",
      linkedin: "https://www.linkedin.com/in/rohit-jose12/"
    },
    {
      name: "Arjun Krishnan R",
      role: "Student",
      image: member13,
      phone: "+919496885226",
      linkedin: "https://www.linkedin.com/in/arjun-krishnan-r-162a45274/"
    },
    {
      name: "Prajul George Francis",
      role: "Student",
      image: member14,
      phone: "+919188782622",
      linkedin: "https://www.linkedin.com/in/prajul-francis/"
    },
    {
      name: "Shradha A Shenoy",
      role: "Student",
      image: member15,
      phone: "+919747403338",
      linkedin: "https://www.linkedin.com/in/shradha-a-shenoy-8056b3254/"
    },
    {
      name: "Vaishnav T P",
      role: "Student",
      image: member16,
      phone: "+916238797406",
      linkedin: "https://www.linkedin.com/in/vaishnavtp/"
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
            <div className="flex flex-col md:flex-row divide-y md:divide-x md:divide-y-0 divide-[#bbbbbb] border border-[#bbbbbb] overflow-hidden w-full max-w-sm">
              <div className="flex-1 p-6 text-center">
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
                
                <div className="mt-2">
                  <a 
                    href={`tel:${facultyMember.phone}`}
                    className="inline-flex text-gray-600 hover:text-[#3C6E71] transition-colors"
                  >
                    <PhoneIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Student Team Section */}
        <h3 
          className="text-2xl font-semibold text-center mb-8 text-gray-600"
          data-aos="fade-up"
        >
          Student Team
        </h3>
        <div data-aos="fade-up" data-aos-delay="200">
          {chunk(visibleMembers, 4).map((memberGroup, groupIndex) => (
            <div 
              key={groupIndex}
              className={`flex flex-col md:flex-row divide-y md:divide-x md:divide-y-0 divide-[#bbbbbb] border-l border-r border-[#bbbbbb] ${
                groupIndex === 0 ? 'border-t' : 'border-t border-[#bbbbbb]'
              } ${
                groupIndex === Math.ceil(visibleMembers.length / 4) - 1 ? 'border-b' : ''
              } overflow-hidden`}
            >
              {memberGroup.map((member, index) => (
                <div 
                  key={index} 
                  className="flex-1 p-6 text-center"
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
                  
                  <div className="mt-2 flex justify-center space-x-4">
                    <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#0077b5] transition-colors"
                    >
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                    <a 
                      href={`tel:${member.phone}`}
                      className="text-gray-600 hover:text-[#3C6E71] transition-colors"
                    >
                      <PhoneIcon className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {teamMembers.length > 4 && (
          <div 
            className="text-center mt-16 -mb-8"
            data-aos="fade-up"
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