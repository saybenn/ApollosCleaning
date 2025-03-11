import { FaBroom, FaCar, FaSwimmingPool, FaSprayCan } from "react-icons/fa";

const services = [
  {
    id: 1,
    name: "Power Washing",
    icon: <FaSprayCan />,
    description:
      "High-pressure cleaning for driveways, sidewalks, and exteriors.",
  },
  {
    id: 2,
    name: "Car Detailing",
    icon: <FaCar />,
    description: "Interior and exterior car cleaning with precision and care.",
  },
  {
    id: 3,
    name: "Pool Cleaning",
    icon: <FaSwimmingPool />,
    description: "Keep your pool crystal clear and safe to swim in.",
  },
  {
    id: 4,
    name: "Carpet Cleaning",
    icon: <FaBroom />,
    description: "Deep carpet cleaning to remove stains, dirt, and odors.",
  },
];

export default function Services() {
  return (
    <section className="py-16 bg-gray-200">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-stix text-sky-950 mb-4 lg:text-6xl">
          Our Services
        </h2>
        <span className="block w-5/6 h-0.5 bg-[#d4b651] mx-auto mb-14"></span>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="flex flex-col items-center">
              <div className="w-20 h-20 flex items-center justify-center bg-[#4D688C] text-white rounded-full shadow-lg text-3xl">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mt-4 text-neutral-800 lg:text-3xl">
                {service.name}
              </h3>
              <p className="text-center max-w-xs mt-2 lg:text-xl">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-20">
          <a
            href="#contact"
            className="px-6 py-3 bg-[#d4b651] text-white font-semibold rounded-lg shadow-md hover:bg-[#B8975E] transition-all font-montserrat hover:text-white"
          >
            Book Now
          </a>
        </div>
      </div>
    </section>
  );
}
