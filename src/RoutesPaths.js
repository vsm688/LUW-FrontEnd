import { BrowserRouter,Routes,Route } from "react-router-dom";
import Instructions from "./pages/Instructions";
import LearningObjectives from "./pages/LearningObjectives";
import MakeProject from "./pages/MakeProject";
import SubmitProject from "./pages/SubmitProject";
import VideoTutorial from "./pages/VideoTutorial";
import SideMenu from "./components/styles/SideMenu/SideMenu";
import App from "./App";
const RoutesPaths = () => {
    return(
    <BrowserRouter>
        <Routes>
            <Route path = "/instructions" element = {<Instructions/>}> </Route>
            <Route path = "/objectives" element = {<LearningObjectives/>}> </Route>
            <Route path = "/makeproject" element = {<MakeProject/>}> </Route>
            <Route path = "/submitproject" element = {<SubmitProject/>}> </Route>
            <Route path = "/videotutorial" element = {<VideoTutorial/>}> </Route>
        </Routes>
    </BrowserRouter>
)

}

export default RoutesPaths;