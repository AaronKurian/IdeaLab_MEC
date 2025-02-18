import Image from 'next/image';
import { AiOutlineMail } from 'react-icons/ai';
import { FaTwitter, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import mec from '@/public/mec.png';
import idealab from '@/public/idealab.jpeg';
import cognicor from '@/public/cognicor.webp';

export default function Footer() {
  return (
    <footer className="bg-[#353535] text-white py-12 font-satoshi">
      <div className="container mx-auto px-6">
        {/* Logos Section */}
        <div 
          className="flex justify-center space-x-8 sm:space-x-12 mb-8 px-2"
          data-aos="fade-up"
        >
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
        <div 
          className="text-center mb-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h3 className="text-xl font-semibold mb-4">Connect with us</h3>
          <div className="flex justify-center space-x-6">
            <a href="mailto:idealab@mec.ac.in" className="flex items-center space-x-2 text-red-600 hover:text-red-800">
              <AiOutlineMail size={24} />
            </a>
            <a href="https://twitter.com/idealab_mec" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com/idealab_mec" className="flex items-center space-x-2 text-yellow-600 hover:text-yellow-800">
              <FaInstagram size={24} />
            </a>
            <a href="tel:+919605169646" className="flex items-center space-x-2 text-green-600 hover:text-green-800">
              <FaPhoneAlt size={22} />
            </a>
          </div>
          <div className="space-y-2 pt-6">
            <p className="font-semibold">Model Engineering College</p>
            <p>Thrikkakara, Kochi</p>
            <p>Kerala, PIN: 682021</p>
          </div>
        </div>

        <div 
          className="text-center text-gray-400 space-y-2 mb-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p>Managed by Institute of Human Resource Development</p>
          <p>Established by Government of Kerala</p>
        </div>

        {/* Copyright */}
        <div 
          className="text-center text-sm text-gray-500 border-t border-gray-700 pt-4"
          
        >
          <p>Copyright © 2025</p>
        </div>
      </div>
    </footer>
  );
} 