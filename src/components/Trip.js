import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/3.jpg";
import Trip2 from "../assets/D1.jpg";
import Trip3 from "../assets/15.jpg";

function Trip() {
  return (
    <div className="trip">
      <div className="trip">
        <h1>Recent Trips</h1>
        <p>You can discover unique destination using Google Maps.</p>
        <div className="tripcard">
          <TripData
          image={Trip1}
          heading="Trip in Paris"
          text="Experience the enchantment of Paris, the City of Love. Explore iconic landmarks like the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral. Stroll along the romantic Seine River and savor exquisite French cuisine in charming bistros."

          />

<TripData
          image={Trip2}
          heading="Trip in Goa"
          text="Experience the vibrant charm of Goa, India's beach paradise. Relax on golden sands, bask in the tropical sun, and dive into the azure Arabian Sea.
          Explore the rich Portuguese heritage in Old Goa's historic churches and cathedrals. Savor delectable seafood in beachfront shacks and enjoy the lively nightlife in beach towns like Baga and Calangute."
          />

<TripData
          image={Trip3}
          heading="Trip in Bimini Islands"
          text="Escape to the pristine Bimini Islands in The Bahamas, a tropical paradise just 50 miles from Florida's coast. With crystal-clear turquoise waters and powdery white-sand beaches, Bimini offers a serene getaway. Explore vibrant coral reefs teeming with marine life, making it a diver's dream."
          />
        </div>
      </div>
    </div>
  );
}

export default Trip;
