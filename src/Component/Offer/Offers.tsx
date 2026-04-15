export default function Offers() {
  const services = [
    {
      title: "Business Websites That Convert",
      desc: "High-performance websites designed to turn visitors into paying customers and boost your brand credibility.",
    },
    {
      title: "Landing Pages That Sell",
      desc: "Modern, fast-loading landing pages tailored for products and services that maximize conversions.",
    },
    {
      title: "E-Commerce Websites",
      desc: "Fully functional online stores with smooth UI, secure checkout, and mobile-first design.",
    },
    {
      title: "Website Redesign",
      desc: "Transform outdated websites into modern, responsive, and visually appealing digital experiences.",
    },
  ];

  return (
    <section className="px-6 py-2 md:px-20">
      {/* Heading */}
      <div className="mb-3 md:mb-10" data-aos="fade-up">
        <h1 className="text-xl  font-bold text-[#1D6EC2] md:mb-8 md:text-3xl">
          What I Can Do For You
        </h1>
      </div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="rounded-2xl border border-gray-100 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Icon circle */}
            <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-600">
              {index + 1}
            </div>

            <h3 className="mb-2 text-lg font-semibold text-gray-800">
              {item.title}
            </h3>

            <p className="text-sm leading-relaxed text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
