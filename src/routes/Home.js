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
        heroImg="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
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