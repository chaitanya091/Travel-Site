import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
// change image from here
import AboutImg from "../assets/c3.jpg";
import ContactForm from "../components/ContactForm";
 

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
        
        <ContactForm/>
        <Footer/>
        </>
    )
}

export default Contact;