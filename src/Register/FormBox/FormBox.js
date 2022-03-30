import LeftSection from "../LeftSection/LeftSection";
import MiddleBar from "../MiddleBar/MiddleBar";
import RightSection from "../RightSection/RightSection";
import "./FormBox.css"

function FormBox() {



    return (
        <div className = "CenteringDiv">
            <div className="Container">


                <LeftSection></LeftSection>
                <MiddleBar></MiddleBar>
                <RightSection></RightSection>

                <h4>Close</h4>







            </div>
        </div>


    )
}

export default FormBox;