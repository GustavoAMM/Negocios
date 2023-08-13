// Cliente.jsx
import React from "react";
import { Home } from "./Home/Home";
import { About } from "./About/About";
import { Products } from "./Products/Products";
import { Contact } from "./Contact/Contact.jsx";
import { Footer } from "./Footer/Footer";

export function Cliente() {
  return (
    <>
      <Home />
      <About />
      <Products />
      <Contact />
      <Footer />
    </>
  );
}
