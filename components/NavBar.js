"use client";

import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlinePhone } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

const NavBar = ({ close, handleClose }) => {
  //User Session

  //State
  const [show, setShow] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [navShow, setNavShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(false);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setNavShow(false);
      } else {
        // if scroll up show the navbar
        setNavShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  //Use Effect
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <header>
      <nav
        style={{
          top: navShow ? "0px" : "-11%",
          background: navShow || lastScrollY > 0 ? "white" : "transparent",
        }}
      >
        {/* MOBILE NAVBAR */}
        <div className="lg:hidden flex justify-between items-center bg-white p-3">
          <div className="w-1/2">
            <Link
              className="flex items-center"
              aria-label="Home Page"
              href="/"
              scroll={true}
            >
              <p className="font-stix text-sky-950 flex flex-col text-3xl text-center">
                <span>Apollos</span> <span>Cleaning</span>
              </p>
              <div className="relative w-16 sm:w-32 md:w-40 h-auto mx-auto inline-block overflow-hidden">
                <Image
                  className="object-contain"
                  priority
                  width={160} // Base size
                  height={60}
                  alt="logo"
                  src="/images/apollologo.png"
                />
              </div>
            </Link>{" "}
          </div>

          <div className="w-1/2 ml-4">
            <a
              className="flex items-center bg-sky-950 text-white rounded p-2 text-lg"
              href="tel:7572158619"
            >
              Request A Quote
            </a>
          </div>
        </div>
        {/* DESKTOP NAVBAR */}
        <div
          className="p-4 hidden lg:flex flex-row justify-between items-center bg-white"
          onMouseLeave={() => setIsShown(false)}
        >
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
                width={160} // Base size
                height={60}
                alt="logo"
                src="/images/apollologo.png"
              />
            </div>
          </Link>
          <Link
            className="flex items-center"
            aria-label="Home Page"
            href="/"
            scroll={true}
          >
            <p className="font-stix text-[#4D688C] flex flex-col text-6xl text-center">
              <span>Apollos Cleaning</span>
            </p>
          </Link>
          <ul>
            <li>
              <span className="text-[#4D688C] text-2xl font-montserrat">
                {" "}
                Request A Quote
              </span>{" "}
              <a
                className="flex text-white text-2xl bg-[#4D688C] rounded-xl px-2 py-2"
                href="tel:7572158619"
              >
                <AiOutlinePhone fontSize="1.5em" />
                (757) 215-8619
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
