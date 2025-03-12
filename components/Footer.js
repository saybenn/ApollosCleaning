import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#4D688C] text-white py-8 flex justify-center">
      <p className="text-gray-300 text-sm mt-8">
        © {new Date().getFullYear()} Apollos Cleaning. All rights reserved.
      </p>
    </footer>
  );
}
