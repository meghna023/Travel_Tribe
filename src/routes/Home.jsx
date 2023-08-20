import Destination from "../components/Destination";
import Hero from "../components/Hero";
import Trip from "../components/Trip";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home (){
  return(
    <>
    <Navbar />
    <Hero
    cName="hero"
    heroImg="https://images.unsplash.com/photo-1618083707368-b3823daa2726?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
     title="Your Journey Your Story"
     text="Choose Your Favourite Destination."
     buttonText="Travel Plan"
     url="/"
     btnClass="show"
     />
     <Destination/>
     <Trip/>
     <Footer/>
    </>
  )
}

export default Home;