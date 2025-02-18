export default function Initiatives() {
  return (
    <section id="initiatives" className="py-20 bg-[#f5fafc] font-satoshi">
      <div className="border-t border-[#bbbbbb] pb-16 mx-12"></div>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#353535]" data-aos="fade-up">Our Initiatives</h2>
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
            <div 
              key={index} 
              className="bg-gradient-to-b from-white to-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-4xl mb-4">{initiative.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-[#1d3a3b]">{initiative.title}</h3>
              <p className="text-gray-600">{initiative.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 