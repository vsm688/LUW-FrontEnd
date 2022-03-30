import Students from "./StudentImg/Students.png"
import "./LeftSection.css"
import { Link } from "react-router-dom"


function LeftSection() {
    return (
        <div className="LeftSection">
            
            <img src={Students}></img><br></br>
            <h2>Students</h2>
            <h3> <Link to="/Login"> LOG IN </Link> <span id="signup"> SIGN UP</span></h3><br></br><br></br>
            <input type="text" placeholder="Full Name"></input><br></br><br></br>
            <input type="text" placeholder="Enter Email"></input><br></br><br></br>
            <input type="Password" placeholder="Password"></input><br></br><br></br>
            <input type="Password" placeholder="Confirm Password"></input><br></br><br></br><br></br>

            <button><span className="signupbtn">SIGN UP</span></button>

        </div>
    );

}

export default LeftSection;