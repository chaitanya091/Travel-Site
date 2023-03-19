import "./ContactFormStyles.css";
import Contact from "./ContactusComponent"
function ContactForm(){
    return(
        <div>
            <Contact/>
            <div className="form-container">
                <h1>Send a message to us!</h1>
                <form>
                    <input placeholder="Name"/>
                    <input placeholder="Email"/>
                    <input placeholder="Subject"/>
                    <textarea placeholder="message" rows="4"></textarea>
                    <button>Send Message</button>
                </form>
            </div>     
        </div>
         

      
    )
}
export default ContactForm;