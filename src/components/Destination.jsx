import trek1 from "../assests/td_3.jpg"
import trek2 from "../assests/td_2.jpg"
import beach1 from "../assests/beach_1.jpg"
import beach2 from "../assests/beach_2.jpg"
import DestinationData from "./DestinationData";
import "./Destination.css"

const Destination = () => {
  return(
    <div className="destination">
    <h1>Popular Destination</h1>
    <p>Tours give you the opportunity to see a lot,within a time frame.</p>
    

    <DestinationData
    className="first-des"
    heading="Triund Hill, Mcleodganj"

    text="Grade: Moderate Mcleodganj to Triund 2800 mtrs, 9 kms gradual trek. The trek offer panoramic views Bhagsu village, Mcleodganj, Dharamsala valley and distant views of Shivalik hills and plains of Kangra valley. The trek is moderate nature. Triund is a large land of green grass and pasture like. One can see the mighty Dhauladhar ranges just above the eyes. This is the base camp and climatization point for trekkers climbing the Inderahara point in the Mt. Dhauladhar."

    img1={trek1}
    img2={trek2}
    />
    <DestinationData
    className="first-des-reverse"
    heading="Radhanagar Beach, Havelock Island"

    text="Radhanagar Beach is known as one of the most beautiful beaches in Asia. It is titled as the 7th most beautiful beach in the world.It is a treat to watch during sunrise and sunset.Radhanagar Beach is one of the most famous attractions in Havelock Island and the Andaman and Nicobar Islands itself. "
    img1={beach1}
    img2={beach2}
    />
    </div>
    );
  };

  export default Destination;
