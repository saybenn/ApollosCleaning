import Image from "next/image";

const services = [
  {
    id: 1,
    name: "Power Washing",
    image: "/images/power.webp",
    description:
      "Revitalize your home’s exterior with our high-pressure power washing service. Whether it's your driveway, sidewalks, deck, or siding, we use industrial-grade pressure washers and eco-friendly cleaning solutions to remove built-up dirt, grime, and mold. See your surfaces restored to their original look, giving your property instant curb appeal.",
  },
  {
    id: 2,
    name: "Car Detailing",
    image: "/images/car.webp",
    description:
      "Your car deserves the best care, inside and out. Our detailing service includes deep interior cleaning with high-powered vacuums, steam cleaning for stubborn stains, and leather conditioning for a fresh, like-new feel. On the exterior, we use clay bar treatments, premium wax, and power polishers to bring back that showroom shine. Let us transform your vehicle and make every drive a luxury experience.",
  },
  {
    id: 3,
    name: "Lawn Care",
    image: "/images/lawn.webp",
    description:
      "Keep your yard looking sharp and healthly with our professional lawn care service. We use mowers, edgers, and blowers to give your lawn a clean, manicured finish. We  handle mowing, trimming, and edging with precision, and also offer fertilization and weed control to promote vibrant, lush growth. All you have to do is sit back and enjoy a perfectly groomed outdoor space.",
  },
  {
    id: 4,
    name: "Carpet Cleaning",
    image: "/images/carpet.webp",
    description:
      "Bring your carpets back to life with our deep-cleaning service. We use industrial-strength steam cleaners, powerful suction vacuums, and pet-safe, non-toxic cleaning solutions to remove stubborn stains, dust, and odors. Whether it's high-traffic areas, pet accidents, or just a refresh, our process leaves your carpets looking and smelling brand new.",
  },
];

export default function Services() {
  return (
    // <section className="py-16 bg-gray-200">
    //   <div className="max-w-6xl mx-auto text-center">
    //     <h2 className="text-5xl font-stix text-sky-950 mb-3 lg:text-6xl">
    //       Our Menu
    //     </h2>
    //     <span className="block w-5/6 h-0.5 bg-[#d4b651] mx-auto mb-14"></span>

    //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    //       {services.map((service) => (
    //         <div
    //           key={service.id}
    //           className="py-8 flex flex-col items-center font-montserrat relative w-full h-[500px] sm:h-[600px] lg:h-[700px] drop-shadow-xl"
    //         >
    //           {/* <div className="w-20 h-20 flex items-center justify-center bg-[#4D688C] text-white rounded-full shadow-lg text-3xl">
    //             {service.icon}
    //           </div> */}
    //           {/* BACKGROUND IMAGE */}
    //           <div className="absolute inset-0">
    //             <Image
    //               src={service.image}
    //               alt="Cleaning Service"
    //               fill
    //               className="object-cover"
    //               priority
    //             />{" "}
    //             {/* Dark overlay */}
    //             <div className="absolute inset-0 bg-black/70"></div>{" "}
    //           </div>
    //           {/* TEXT OVERLAY */}
    //           <h3 className="absolute inset-0 flex flex-col items-center justify-center text-4xl font-semibold mt-4 text-neutral-800 lg:text-3xl mb-4">
    //             {service.name}
    //           </h3>
    //           <p className="text-center max-w-xs mt-2 lg:text-xl">
    //             {service.description}
    //           </p>
    //         </div>
    //       ))}
    //     </div>
    //     <div className="mt-20">
    //       <a
    //         href="#contact"
    //         className="px-6 py-3 bg-[#d4b651] text-white font-semibold rounded-lg shadow-md hover:bg-[#b8975e8c] transition-all font-montserrat hover:text-white"
    //       >
    //         Book Now
    //       </a>
    //     </div>
    //   </div>
    // </section>
    <section className=" pt-16 bg-gray-200">
      <div className="lg:max-w-full max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-stix text-sky-950 mb-3 lg:text-6xl">
          Our Menu
        </h2>
        <span className="lg:w-1/3 block w-5/6 h-0.5 bg-[#d4b651] mx-auto mb-16"></span>

        <div className="shadow-up-lg grid grid-cols-1 lg:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative w-full h-[400px] sm:h-[450px] lg:h-[500px] overflow-hidden"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover"
                  priority
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/70"></div>
              </div>

              {/* Text Overlay */}
              <div className="absolute inset-0 flex flex-col  justify-center text-left px-4 font-montserrat">
                <h2 className="text-white text-4xl sm:text-3xl font-bold lg:text-5xl">
                  {service.name}
                </h2>
                <p className="text-white text-sm sm:text-base mt-6 max-w-md leading-6 lg:leading-7">
                  {service.description}
                </p>
                <div className="mt-10">
                  <a
                    href="#contact"
                    className="px-4 py-2 bg-[#d4b651] text-white font-semibold rounded-lg shadow-md hover:bg-[#b8975e8c] transition-all font-montserrat hover:text-white"
                  >
                    Book Today
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
