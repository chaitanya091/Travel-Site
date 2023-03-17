import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
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
        </>
    )
}

export default Home;