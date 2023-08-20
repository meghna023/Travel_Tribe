import "./Trip.css"
import Tripdata from "./Tripdata";
import Trip1 from "../assests/5.jpg"
import TripA from "../assests/sing.jpg"
import Trip3 from "../assests/6.jpg"


function Trip(){
  return(
    <div className="trip">
    <h1> Recent Trips</h1>
    <p>You can Discover unique destinations using Google Maps.</p>
    <div className="tripcard">
   
    <Tripdata 
    image={Trip1}
    heading="Trip to Indonesia"
    text="Indonesia is the largest archipelago in the world. It consists of five major islands and about 30 smaller groups. The islands are located at a crossroads between two oceans, the Pacific and Indian Oceans, and straddles two continents, Asia and Australia/Oceania."
    />

     <Tripdata 
    image={TripA}
    heading="Trip to Singapore"
    text="Singapore is a sunny, tropical island in South-east Asia, off the southern tip of the Malay Peninsula.Singapore is famous for being a global financial center, being among the most densely populated places in the world, having a world-class city airport with a waterfall, and a Botanic Garden that is a World Heritage Site. "
    />

     <Tripdata 
    image={Trip3}
    heading="Trip to France"
    text="France is one of the oldest nations on Earth and the most ethnically diverse country in Europe. These deep and broad influences have made France a world leader throughout history in nearly all aspects of culture, including cuisine, wine-making, politics, philosophy, music, art, film, fashion, literature, and sports."
    />
   </div>
  </div>
  );
}
export default Trip;