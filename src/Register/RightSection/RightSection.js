import "./RightSection.css"
import Teacher from "./Teacher/teacher.png"
import {Link} from "react-router-dom"


function RightSection() {
    return (

        <div className="RightSection">

            
            <img src={Teacher}></img><br></br>
            <h2>Teachers</h2>
            <h3> <Link to="/Login"> LOG IN </Link> <span id="signup"> SIGN UP </span></h3><br></br><br></br>
            <input type="text" placeholder="Full Name"></input><br></br><br></br>
            <input type="text" placeholder="Enter Email"></input><br></br><br></br>
            <input type="Password" placeholder="Password"></input><br></br><br></br>
            <input type="Password" placeholder="Confirm Password"></input><br></br><br></br><br></br>

            <button><span className="signupbtn">SIGN UP</span></button><br></br>

            

            
        </div>
    )    
}

export default RightSection;