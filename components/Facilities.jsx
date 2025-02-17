'use client';
import { useState } from 'react';
import Image from 'next/image';
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
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function Facilities() {
    const [showAllFacilities, setShowAllFacilities] = useState(false);
    
    const facilities = [
        {
          title: "Epilog Laser Engraver",
          image: tool1,
          description: "EPILOG (CO2) laser engraver machines are used for laser engraving, cutting, marking, and etching. It features three different sizes and various wattage configurations, 60 IPS engraving speeds, and the revolutionary IRIS Camera Positioning System."
        },
        {
          title: "HMT CNC Lathe",
          image: tool2,
          description: "It is a CNC machine tool to perform various operations such as cutting, sanding, knurling, drilling, deformation, facing, and turning, with tools that are applied to the workpiece to create an object with symmetry about that axis."
        },
        {
          title: "HMT CNC Router Machine",
          image: tool3,
          description: "It is a CNC machine used to cut a variety of different shapes in materials such as wood, plastic, MDF and some metals. Basic configuration includes two horizontal routers for round end tenon and mortise, one haunch saw with chip breaker, profiling as electro spindle with ‘c’ axis and double exit angular head."
        },
        {
          title: "PC Workstation",
          image: tool4,
          description: "A desktop with Core i7 processor, 16GB RAM, 1TB SSD and 3050Ti graphics."
        },
        {
          title: "PCB Manufacturing Station",
          image: tool5,
          description: "It includes equipment and machines to produce multi-layer plated-through Printed Circuit Boards (PCBs), to insert leaded and surface mounted devices. It involves the printing of the circuit onto the film present on the copper foil, removal of excess copper using ferric chloride/Hydrochloric acid, drilling holes and silk screen printing."
        },
        {
          title: "Sand blasting machine",
          image: tool6,
          description: "Sandblasting equipment includes systems or machinery, and components in which sand, abrasive, metal shot, and other blast media are driven or propelled using pressurized water, compressed air, or a blast wheel. Sandblasting can remove paint, rust, and residue from oxidation from materials quickly and efficiently."
        },
        {
          title: "Shopbot CNC",
          image: tool7,
          description: "The CNC router can cut materials like wood, plastics, foam, and even soft metals such as aluminum. With the use of the included software, we can design your parts on your computer, and it controls the cutter to make precise cuts."
        },
        {
          title: "Snapmaker",
          image: tool8,
          description: "SNAPMAKER a350t is a 3-in-one modular machine including a 3d printer, laser cutter and CNC engraver. It has built-in Wi-Fi for sending g-code files, plus an option to use a USB memory stick. It comes with a magnetic heated bed for 3D printing, aluminum grid table for laser cutting and mdf board & clamp sets for cnc engraving."
        },
        {
          title: "SolidWorks Software",
          image: tool9,
          description: "It is a solid modelling computer-aided design and engineering application. It is used to develop mechatronics systems from beginning to end. Starting from planning, visual ideation and modelling all the way to final stages of design and building of mechanical, electrical and software elements."
        },
        {
          title: "Sublimation printing station",
          image: tool10,
          description: "Sublimation printing is a specific process of printing that first involves printing onto a special sheet of paper, then transferring that image onto another material (usually polyester or a polyester mix). It can be used to create designs on ceramic mugs, t-shirts etc."
        },
        {
          title: "Ultimaker 2+",
          image: tool11,
          description: "It is a 3D printer with single extrusion swappable nozzles (0.25,0.4,0.6 and 0.8mm), and ability to easily swap and choose pressure of filaments. It uses Fused Deposition Modelling (FDM) and is equipped with new fancaps to ensure the airflow is aimed perfectly below the nozzle, equally from both ends."
        }
      ];
      
    const visibleFacilities = showAllFacilities ? facilities : facilities.slice(0, 3);

  return (
    <section id="facilities" className="py-20 bg-[#D9D9D9]">
      <div className="container mx-auto px-6">
        <div className="border-t border-[#bbbbbb] pb-16 mx-12"></div>
        <h2 
          className="text-3xl font-bold text-center mb-16 text-[#353535]"
          data-aos="fade-up"
        >
          Our Facilities
        </h2>
        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          {visibleFacilities.map((facility, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow max-w-xs w-full md:w-[calc(33.333%-1.33rem)]"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className="text-lg p-4 text-center font-semibold mb-2 text-[#1d3a3b]">{facility.title}</h3>
              <div className="relative h-32 w-32 mx-auto my-4">
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600">{facility.description}</p>
                {/* <button className="mt-3 text-sm text-[#3C6E71] hover:text-[#294a4c] font-semibold">
                  Learn More →
                </button> */}
              </div>
            </div>
          ))}
        </div>

        {facilities.length > 3 && (
          <div 
            className="text-center mt-16 -mb-8"
            data-aos="fade-up"
          >
            <button
              onClick={() => setShowAllFacilities(!showAllFacilities)}
              className="flex items-center justify-center mx-auto rounded-full bg-white h-10 w-10 space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ChevronDownIcon 
                className={`w-7 h-7 transform transition-transform duration-300 ${
                  showAllFacilities ? 'rotate-180' : ''
                }`}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
} 