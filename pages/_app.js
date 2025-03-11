import Head from "next/head";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "../styles/globals.css"; // ✅ Import Tailwind styles
import Layout from "../components/layout";

export default function App({ Component, pageProps: { ...pageProps } }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

