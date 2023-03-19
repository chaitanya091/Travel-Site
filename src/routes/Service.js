import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/6.jpg";
import Footer from "../components/Footer"
function Service(){
    return(
        <>  
        <Navbar/>
              <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Service"
          
        btnClass="hide"
        />
        <Footer/>
        </>
    )
}

export default Service;