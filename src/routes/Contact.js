import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/2.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <>
      <Navbar/>
      <Hero
      cName= "hero-About"
      heroImg={AboutImg}
      title="Contact"
      url="/"
      btnClass="hide"
      />
      <ContactForm/>
      <Footer/>
    </>
  );
}

export default Contact;
