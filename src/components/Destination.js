import DestinationData from "./DestinationData";
import "./DestinationStyles.css";
import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/3.jpg";
import Mountain4 from "../assets/4.jpg";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Things To Do</h1>
      <p>India gives you the opportunity to see a lot, within a time frame</p>

      <DestinationData
        heading="Travel"
        text="“India will change you forever”, I would hear over and over again as soon as we announced we would travel to India.India is a lot to take in. And India is hard to take. Even though you might read this now thinking ‘I feel like I know what to expect when I go there’, when you get there, India will knock you off your feet. The incredibly diverse scenery for one, which ranges from deserts and mountains in the north to tropical beaches in Goa and the barren moon-like scenery around Hampi. The ornate, grand and mystifying temples, the scrumptious food that bursts with flavors, the wonderfully welcoming people were all things that made me fall in love with India."
        img1={Mountain1}
        img2={Mountain2}
      />

      <DestinationData
        heading="Food"
        text="Indian food is different from rest of the world not only in taste but also in cooking methods. It reflects a perfect blend of various cultures and ages. Just like Indian culture, food in India has also been influenced by various civilizations, which have contributed their share in its overall development and the present form.India is a big country with many states and regions. Each region   offers a unique assortment of dishes and cooking techniques. Each regional cuisine uses its own locally grown herbs, spices, fruits and vegetables. These regional cuisines collectively combined together form the very delightful Indian Cuisine"
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
