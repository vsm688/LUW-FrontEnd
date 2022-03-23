import "./Login.css"
import Students2x from "./img/Students@2x.png"
import Teachers2x from "./img/teacher@2x.png"
import { Link } from "react-router-dom"

function Login() {
    return (

        <div className="Container">
            <div className="LeftSection">
                <img src={Students2x}></img>
                <h2>Students</h2>
                <h3>  LOG IN  <span id="signup"> <Link to="/SignUp"> SIGN UP</Link> </span></h3><br></br><br></br>
                <input type="text" placeholder="Enter Email"></input><br></br><br></br>
                <input type="Password" placeholder="Password"></input><br></br><br></br><br></br>

                <button><span className="signupbtn">LOG IN</span></button>
            </div>

            <div className="Bar"></div>

            <div className="RightSection">
                <img src={Teachers2x}></img>
                <h2>Teachers</h2>
                <h3>  LOG IN  <span id="signup"> <Link to="/SignUp"> SIGN UP</Link> </span></h3><br></br><br></br>
                <input type="text" placeholder="Enter Email"></input><br></br><br></br>
                <input type="Password" placeholder="Password"></input><br></br><br></br><br></br>

                <button><span className="signupbtn">LOG IN</span></button>
            </div>

            <h4>Close</h4>



        </div>
    
    )
}

export default Login;