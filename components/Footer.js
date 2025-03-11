import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#4D688C] text-white py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Logo & Copyright */}
        <div className="text-center md:text-left lg:text-center">
          <h2 className="text-white font-stix text-2xl font-bold lg:text-4xl">
            Apollos Cleaning
          </h2>

          <div className="mt-4 relative w-16 sm:w-32 md:w-40 h-auto mx-auto inline-block overflow-hidden">
            <Image
              className="object-contain"
              priority
              width={160} // Base size
              height={60}
              alt="logo"
              src="/images/apollologo.png"
            />
          </div>
        </div>

        {/* Navigation Links */}
        {/* <nav className="mt-4 md:mt-0">
          <ul className=" flex space-x-6">
            <li>
              <a
                href="#services"
                className="text-white  hover:text-gray-300 transition"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-white hover:text-gray-300 transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav> */}

        {/* Social Media Icons */}
        <div className="flex flex-col space-x-4 mt-4 md:mt-0">
          <div className="flex justify-between">
            <a
              href="#"
              className="text-white hover:text-gray-300 transition lg:text-3xl text-xl"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition lg:text-3xl text-xl"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition lg:text-3xl text-xl"
            >
              <FaTwitter />
            </a>
          </div>

          <p className="text-gray-300 text-sm mt-8">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
