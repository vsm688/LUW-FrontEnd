import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
// import Features from './components/Features';
import Teachers from './components/Teachers';
// import Students from './Students';
import './App.css';

import Instructions from "./pages/Instructions/Instructions";
import LearningObjectives from "./pages/LearningObjectives/LearningObjectives";
import MakeProject from "./pages/MakeProject/MakeProject";
import SubmitProject from "./pages/SubmitProject/SubmitProject";
import VideoTutorial from "./pages/VideoTutorial/VideoTutorial";
import StudentInfoPage from './pages/StudentInfo/StudentInfoPage';
import { GlobalStyle } from './styles/GlobalStyles';



function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
       
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='students' element={<Instructions />}>
            <Route path='instructions' element={<Instructions />} />
            <Route path='/students/objectives' element={<LearningObjectives />} />
            <Route path='/students/makeproject' element={<MakeProject />} />
            <Route path='/students/submitproject' element={<SubmitProject />} />
            <Route path='/students/tutorial' element={<VideoTutorial />} />
          </Route>


          <Route path='/studentstest/student' element = {<StudentInfoPage/>}></Route>
          <Route path='/teachers' element={<Teachers />} />

        </Routes>
    
      </Router>
    </>
  );
}

export default App;


// import React, { useState } from "react";
// import Axios from 'axios';

// function App() {

//     const [nameReg, setNameReg] = useState('');
//     const [emailReg, setEmailReg] = useState('');
//     const [passwordReg, setPasswordReg] = useState('');
    
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const [loginStatus, setLoginStatus] = useState('');

//     const register = () => {
//         Axios.post('http://localhost:3001/register', {
//             name: nameReg,
//             email: emailReg, 
//             password: passwordReg,
//         }).then((response) => {
//             console.log(response);
//         });
//     };

//     const login = () => {
//         Axios.post('http://localhost:3001/login', {
//             email: email, 
//             password: password,
//         }).then((response) => {

//             if (response.data.message) {
//                 setLoginStatus(response.data.message)
//             } else {
//                 setLoginStatus(response.data[0].email)
//             };
//         });
//     };

//     return (
//         <div className="App">
//             <div className="registration">
//                 <h1>SignUp</h1>
//                 <input type="text" placeholder="Full Name" 
//                 onChange={(e) => 
//                 setNameReg(e.target.value)
//                 } /> <br></br><br></br>
               
//                 <input type="text" placeholder="Email"
//                 onChange={(e) => 
//                 setEmailReg(e.target.value)
//                 }
//                 /> <br></br><br></br>
                
//                 <input type="text" placeholder="Password"
//                 onChange={(e) => 
//                 setPasswordReg(e.target.value)
//                 }
//                 /> <br></br><br></br>
//                 <button onClick={register}>Sign Up</button>
//             </div>
//         <div className="login">
//             <h1>Login</h1>
//             <input type="text" placeholder="Email" onChange={(e) => 
//                 setEmail(e.target.value)
//                 }
//                 /> <br></br><br></br>
//             <input type="password" placeholder="Password" onChange={(e) => 
//                 setPassword(e.target.value)
//                 }
//                 /> <br></br><br></br>
//             <button onClick={login}>Login</button>
//         </div>

//         <h1>{loginStatus}</h1>
//         </div>
//     )
// }

// export default App;
