import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/destination-3.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service() {
  return (
    <>
      <Navbar/>
      <Hero
      cName= "hero-About"
      heroImg={AboutImg}
      title="Service"
      url="/"
      btnClass="hide"
      />
      <Trip/>
      <Footer/>
    </>
  );
}

export default Service;
