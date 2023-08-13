import { Navbar } from "./Navbar/Navbar";
import {Home } from "./Home/Home";
import { About } from "./About/About";
import {Products} from "./Products/Products";
import { Contact } from "./Contact/Contact.jsx";
import { Footer } from "./Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Products />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
