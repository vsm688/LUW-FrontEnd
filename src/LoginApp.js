import { BrowserRouter, Routes, Route } from "react-router-dom"
import FormBox from "./components/FormBox/FormBox";
import "./App.css"
import Login from "./components/login/Login"
import SignUp from "./components/SignUp";





function App() {
  
  
  return (
     
    <div className="App">

      
      

          <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<FormBox></FormBox>} ></Route>
                <Route path="/Login" element={<Login></Login>}></Route>
                <Route path="/SignUp" element={<SignUp></SignUp>} ></Route>
            </Routes>
          </BrowserRouter>
      
      
      
      
      </div>

    );

}


export default App;

