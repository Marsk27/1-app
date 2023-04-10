import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="assets/c.jpg"
        title="Contact"
        // text="Choose Your Favorite Destination"
        // buttonText="Travel Plan"
        // url="/"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
