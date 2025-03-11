import Image from "next/image";
import Banner from "../components/Banner";
import Services from "../components/Services";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <main>
      {/* LANDING & HERO */}
      <div className="font-montserrat relative w-full h-[500px] sm:h-[600px] lg:h-[700px] drop-shadow-xl">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="Cleaning Service"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70"></div>{" "}
          {/* Dark overlay */}
        </div>

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold">
            A Cleaner Space, A Brighter Day
          </h1>
          <p className="text-white text-lg sm:text-xl mt-3 max-w-2xl">
            Professional cleaning services for your home, car, and business.
          </p>
          <button className="btn-primary mt-6 mb-6 px-6 py-3 bg-gold text-white font-semibold rounded-lg shadow-md hover:bg-[#B8975E] transition-all">
            Get a Free Quote
          </button>
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold">
            Veteran Owned & Operated
          </h2>
        </div>
      </div>

      {/* BANNER */}
      {/* SERVICES */}
      <Services />
      {/* CONTACT */}
      <ContactForm />
    </main>
  );
}

