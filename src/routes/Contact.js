import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
// change image from here
import AboutImg from "../assets/5.jpg";


function Contact(){
    return(
        <>  
        <Navbar/>
           <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Contact"
          
        btnClass="hide"
        />
        <Footer/>
        </>
    )
}

export default Contact;