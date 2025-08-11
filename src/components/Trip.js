import TripData from "./TripData";
import "./TripStyles.css";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/6.jpg";
import Trip3 from "../assets/7.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Places</h1>
      <p>You can discover the unique destinatons using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Karnataka"
          text="Karnataka is primarily known for its Heritage destinations and its Wildlife/ National Parks. Apart from that, it is also famous for its magical hill stations, spectacular waterfalls, pilgrimage centres and a 320km long coastline dotted with un-spoilt beaches.Bangalore, Mysore, Mangalore, Hampi, Udupi, Badami,Belur, Dandeli, Sakleshpur, Gokarna, Madikeri, Kanakpura, Shimoga, Murudeshwara, Bandipur, Bheemeshwari, Hassan, Belgaum, and many more."
        />

        <TripData
          image={Trip2}
          heading="Kerala"
          text="Named as one of the ten paradises of the world by National Geographic Traveler, Kerala is famous especially for its ecotourism initiatives and beautiful backwaters. Its unique culture and traditions, coupled with its varied demography, have made Kerala one of the most popular tourist destinations in the world."
        />

        <TripData
          image={Trip3}
          heading="Hyderabad"
          text="Hyderabad is known as The City of Pearls, as once it was the only global centre for trade of large diamonds, emeralds and natural pearls. Many traditional and historical bazaars are located around the city.Located on the outskirts of Hyderabad, Ramoji Film City is certified as the World's largest Film Studio Complex by the Guinness Book of World Records. It is the most famous attraction in Hyderabad. The highlights are the film city tour, Sahas Adventure and holiday carnivals."
        />
      </div>
    </div>
  );
}

export default Trip;
