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

import Projects from './pages/Projects/Projects';


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

          <Route path="/projects" element={<Projects/>}></Route>
          <Route path='/studentstest/student' element = {<StudentInfoPage/>}></Route>
          <Route path='/teachers' element={<Teachers />} />

        </Routes>
    
      </Router>
    </>
  );
}

export default App;
