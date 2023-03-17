import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/4.jpg";
import "../components/HeroStyles.css";

function About(){
    return(
        <>  
        <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="About"
          
        btnClass="hide"
        />
        </>
    )
}

export default  About;