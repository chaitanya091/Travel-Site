import { Component } from "react";
import "./DestinationStyles.css";
import Mounting1 from "../assets/9.jpg";
import Mounting2 from "../assets/10.jpg";
import Mounting3 from "../assets/11.jpg";
import Mounting4 from "../assets/12.jpg";
import Destination from "./Destination";
class DestinationData extends Component{
    render(){
        return(
            <div className={this.props.className}>
            <div className="des-text">
            <h2>{this.props.heading}</h2>
            <p>{this.props.text}</p>
            </div> 
        
        <div className="image">
            <img alt="img" src={this.props.img1}/>

             
            <img alt="img" src={this.props.img2}/>    

        </div>
        </div>
        )
    }
}
export default DestinationData