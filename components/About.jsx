export default function About() {
  return (
    <section id="about" className="py-20 bg-[#f5fafc] font-satoshi">
      <div className="container mx-auto px-6  md:px-12">
        <h2 
          data-aos="fade-up"
          className="text-3xl font-bold text-center mb-12 text-[#353535]"
        >
          About Us
        </h2>
        <div className="flex flex-col divide-y md:flex-row md:divide-x md:divide-y-0 divide-[#bbbbbb] border border-[#bbbbbb] overflow-hidden">
          <div 
            data-aos="fade-up"
            data-aos-delay="100"
            className="flex-1 p-12 text-white"
          >
            <h2 className="text-2xl font-semibold text-[#1d3a3b]">What We Do</h2>
            <p className="mt-2 list-disc list-inside text-gray-600">
              IDEALAB MEC is a student-run innovation hub that fosters entrepreneurship
              and technical excellence. We provide a platform for students to transform
              their ideas into reality through mentorship, resources, and collaboration.
            </p>
          </div>
          <div 
            data-aos="fade-up"
            data-aos-delay="200"
            className="flex-1 p-12 text-white"
          >
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
  );
} 