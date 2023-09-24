import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/D22.jpg";
import Mountain3 from "../assets/D11.jpg";
import Mountain4 from "../assets/5.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame.</p>
      
      <DestinationData
      className="first-des"
      heading="Taal Volcano, Batangas"
      text="A stunning natural wonder, it never ceases
      With its picturesque crater lake so vast,
      It's an icon of beauty that will forever last.
      But beneath its serene and tranquil charm,
      Lies a history of eruptions that can alarm.
      Resilient and captivating, it stands tall,
      Taal Volcano, a treasure for all to enthral."
      img1={Mountain1}
      img2={Mountain4}
      />

<DestinationData
className="first-des-reverse"
      heading="Munnar, India"
      text="A lush gem in Kerala's embrace,
      Where emerald tea plantations grace.
      Nestled in the Western Ghats' serene terrain,
      A paradise where nature reigns.
      Misty hills and cool, crisp air,
      Tea-scented breeze beyond compare.
      Waterfalls, wildlife, and trails to roam,
      Munnar's beauty makes it feel like home."
      img1={Mountain3}
      img2={Mountain2}
      />
      
      </div>
  );
};

export default Destination;
