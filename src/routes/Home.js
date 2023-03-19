import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Destination from "../components/Destination";
import Trip from "../components/Trip"
function Home(){
    return(
        <>  
        <Navbar/>
        <Hero
        cName="hero"
        heroImg="https://images.alphacoders.com/127/1271701.jpg"
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination."
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
        />
        <Destination/>
        <Trip/>
        </>
    )
}

export default Home;