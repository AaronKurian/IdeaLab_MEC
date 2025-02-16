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
export default function Facilities() {
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
          description: "SNAPMAKER a350t is a 3-in-1 modular machine including a 3d printer, laser cutter and CNC engraver. It has built-in Wi-Fi for sending g-code files, p..."
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
          {facilities.map((facility, index) => (
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
  );
} 