'use client';
import { motion } from 'framer-motion';

export default function Testimonials() {
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

  return (
    <section id="testimonials" className="py-20 bg-[#f5fafc] font-satoshi">
      <div className="container mx-auto px-6">
        <div className="border-t border-[#bbbbbb] pb-16 mx-12"></div>
        <h2 
          className="text-3xl font-bold text-center mb-12 text-[#353535]"
          data-aos="fade-up"
        >
          Testimonials
        </h2>
        
        <div 
          className="overflow-hidden py-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <motion.div
            className="flex space-x-10 w-max"
            animate={{
              x: ["0%", "-100%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 260,
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
  );
} 