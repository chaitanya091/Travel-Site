import React, { Component } from 'react';
import "./ContactusComponentStyles.css";
class Contact extends Component {
    render(){
    return(
        <div className="flex-container">

            <div className="flex-child">
                <h2>Location Information</h2>
                <div>
                    <h3>Our Address</h3>
                    <address>
                        Pune Institute of Computer Technology <br />
                        Pune, Maharashtra,<br />
                        India<br />
                    <i className="fa fa-phone"></i>: +91 8080745386<br />
                     
                    <i className="fa fa-envelope"></i>: <a href="mailto:chaitanyapatilcr7@gmail.com">chaitanyapatilcr7@gmail.com</a>
                    </address>
                </div>
            </div>
            <div className="flex-child">
                <h2>Map of our Location</h2>
                <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.576077541345!2d73.84864491487166!3d18.457547175916037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eac85230ba47%3A0x871eddd0a8a0a108!2sSCTR&#39;S%20Pune%20Institute%20of%20Computer%20Technology!5e0!3m2!1sen!2sin!4v1679244940588!5m2!1sen!2sin" style={{ width:600, height:450, frameborder:0, border:0 }} allowfullscreen="" aria-hidden="false" tabindex="0" ></iframe>
            </div>
        </div>
       
        );
    }
}

export default Contact;