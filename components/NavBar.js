"use client";

import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlinePhone } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

const NavBar = ({ close, handleClose }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(window.scrollY < lastScrollY);
      }
      setLastScrollY(window.scrollY);
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header>
      <nav
        className={`fixed z-50 top-0 left-0 w-full transition-all duration-300 ${
          isVisible
            ? isScrolled
              ? "bg-white shadow-lg"
              : "bg-transparent"
            : "-translate-y-full"
        }`}
      >
        {/* MOBILE NAVBAR */}
        <div className="lg:hidden flex justify-between items-center bg-white p-3">
          <div className="md:w-1/2">
            <Link
              className="flex items-center gap-x-2"
              aria-label="Home Page"
              href="/"
              scroll={true}
            >
              <p className="font-stix text-sky-950 flex flex-col text-3xl text-left md:w-1/2 md:text-5xl">
                <span>Apollos</span> <span cl>Cleaning</span>
              </p>

              <div className="relative w-16 sm:w-32 md:w-40 h-auto mx-auto inline-block overflow-hidden">
                <Image
                  className="object-contain"
                  priority
                  quality={80}
                  width={160} // Base size
                  height={60}
                  alt="logo"
                  src="/images/apollologo.webp"
                />
              </div>
            </Link>{" "}
          </div>

          <div className="ml-4 md:w-1/3">
            <a
              className="flex justify-center gap-x-2 items-center bg-sky-950 text-white rounded-lg px-1 py-2 text-sm md:text-xl"
              href="tel:7575776352"
            >
              <AiOutlinePhone className="" fontSize="1.5em" />
              <span className="text-right md:text-2xl">Request A Quote</span>
            </a>
          </div>
        </div>
        {/* DESKTOP NAVBAR */}
        <div className="p-4 hidden lg:flex flex-row justify-between items-center bg-white">
          <Link
            className="flex items-center"
            aria-label="Home Page"
            href="/"
            scroll={true}
          >
            <div className="relative w-16 sm:w-32 md:w-40 h-auto mx-auto inline-block overflow-hidden">
              <Image
                className="object-contain"
                priority
                quality={80}
                width={106} // Base size
                height={40}
                alt="logo"
                src="/images/apollologo.webp"
              />
            </div>
          </Link>
          <Link
            className="flex items-center"
            aria-label="Home Page"
            href="/"
            scroll={true}
          >
            <p className="font-stix text-sky-950 flex flex-col text-6xl text-center">
              <span>Apollos Cleaning</span>
            </p>
          </Link>
          <ul>
            <li>
              <span className="text-sky-950 text-2xl font-montserrat">
                {" "}
                Request A Quote
              </span>{" "}
              <a
                className="flex text-white text-2xl bg-sky-950 rounded-xl px-2 py-2 gap-x-2 hover:bg-[#4D688C] hover:text-white transition-all"
                href="tel:7575776352"
              >
                <AiOutlinePhone fontSize="1.5em" />
                (757) 577-6352
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
