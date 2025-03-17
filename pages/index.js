import Image from "next/image";
import Banner from "../components/Banner";
import Services from "../components/Services";
import ContactForm from "../components/ContactForm";
import { AiOutlinePhone } from "react-icons/ai";

export default function Home() {
  return (
    <main>
      {/* LANDING & HERO */}
      <div className="font-montserrat relative w-full h-[500px] sm:h-[600px] lg:h-[700px] drop-shadow-xl">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero.webp"
            alt="Apollos Cleaning Service"
            fill
            className="object-cover"
            priority
            quality={80}
          />{" "}
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/70"></div>{" "}
        </div>

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold">
            Anything and Everything Gets Cleaned
          </h1>
          <p className="text-white text-lg sm:text-xl mt-3 max-w-2xl">
            Professional cleaning services for your home, car, and business.
          </p>
          <button className="btn-primary mt-6 mb-6 px-6 py-3 bg-gold text-white font-semibold rounded-lg shadow-md hover:bg-[#b8975e8c] transition-all">
            Get a Free Quote
          </button>
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold">
            Veteran Owned & Operated
          </h2>
        </div>
      </div>

      {/* SERVICES */}
      <Services />
      {/* ADDITIONAL HELP */}
      <section className=" py-16 bg-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-stix text-sky-950 mb-3 lg:text-6xl">
            Need More?
          </h2>{" "}
          <span className="lg:w-1/3 block w-5/6 h-0.5 bg-[#d4b651] mx-auto mb-8"></span>
          <p className="mb-6">
            Contact our team and we will see how our staff can accomodate your
            needs.
          </p>
          <div className="flex justify-center mx-auto ">
            <a
              className="flex items-center justify-between bg-sky-950 text-white rounded-lg p-2 text-lg gap-x-2 hover:bg-[#4D688C] hover:text-white transition-all"
              href="tel:7572158619"
            >
              <AiOutlinePhone fontSize="1.5em" />
              <span className="text-right">(757) 215-8619</span>
            </a>
          </div>
        </div>
      </section>
      {/* CONTACT */}
      <ContactForm />
    </main>
  );
}

