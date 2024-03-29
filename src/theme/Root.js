import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '@docsearch/css';

// Default implementation, that you can customize
export default function Root({ children }) {
  return (
    <div>
      <Navbar />
      <>{children}</>
      <Footer />
    </div>
  );
}
