import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";
import HomeImg from "../assets/13.jpg"

function Home() {
  return (
    <>
    <Navbar/>
    <Hero
    cName = "hero"
    heroImg ={HomeImg}
    title="Explore Your World with Us"
    text="Choose your Favourite Destination"
    buttonText="Travel Plan"
    url="/"
    btnClass="show" 
    />
    <Destination/>
    <Trip/>
    <Footer/>
    </>
  );
}

export default Home;
