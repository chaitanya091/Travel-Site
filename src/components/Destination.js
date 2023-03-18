//import image
import Mounting1 from "../assets/9.jpg";
import Mounting2 from "../assets/10.jpg";
import Mounting3 from "../assets/11.jpg";
import Mounting4 from "../assets/12.jpg";
import "./DestinationStyles.css";


// Arrow Function
const Destination = () =>{
    return(
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame</p>
        
        <div className="first-des">
            <div className="des-text">
            <h2>Taal Volcano, Batangas</h2>
            <p>One of the most iconic views Luzon,Mt. Taal boasts a volcano inside a lake inside an island island. if you fancy closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for begineers. Guides will assist you most of the way,and you'll see the peculiar environment found on an active volcano, including volcanic rocks and stream vents.The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!</p>
            </div>
        
        <div className="image">
            <img alt="img" src={Mounting1}/>

             
            <img alt="img" src={Mounting2}/>    

        </div>
        </div>
        </div>
         
        
    )
}
export default Destination;