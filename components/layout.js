import Head from "next/head";
// import React, { useState } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

export default function Layout({ children }) {
  // const [close, setClose] = useState(true);
  // const handleClose = () => {
  //   setClose((prevClose) => !prevClose);
  // };
  return (
    <>
      <Head>
        <title>Apollos Cleaning Services</title>
        <meta
          name="description"
          content="Apollos Cleaning provides professional power washing, car detailing, pool cleaning, and carpet cleaning. We deliver top-quality service to keep your home and vehicles spotless and refreshed."
        />
      </Head>
      <div>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
