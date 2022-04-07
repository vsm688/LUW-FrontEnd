import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Features from './components/Features';
import Teachers from './components/Teachers';
// import Students from './Students';
import './App.css';

import LearningObjectives from "./pages/LearningObjectives/LearningObjectives";
import Instructions from './pages/Instructions/Instructions';
import MakeProject from "./pages/MakeProject/MakeProject";
import SubmitProject from "./pages/SubmitProject/SubmitProject";
import VideoTutorial from "./pages/VideoTutorial/VideoTutorial";
import StudentInfoPage from './pages/StudentInfo/StudentInfoPage';
import { GlobalStyle } from './styles/GlobalStyles';

import Projects from './pages/Projects/Projects';

import Login from './components/login/loginModal';

import { LoginContext } from './Helper/Context';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <GlobalStyle />
      <Router>
       <LoginContext.Provider value={{loggedIn, setLoggedIn}}>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='students/'>
            <Route path='instructions' element={<Instructions />} />
            <Route path='objectives' element={<LearningObjectives />} />
            <Route path='makeproject' element={<MakeProject />} />
            <Route path='submitproject' element={<SubmitProject />} />
            <Route path='tutorial' element={<VideoTutorial />} />
          </Route>

          <Route path="/projects" element={<Projects/>}></Route>
          <Route path='/student' element = {<StudentInfoPage/>}></Route>
          <Route path='/teachers' element={<Teachers />} />
          <Route path='/features' element={<Features />} />

        </Routes>
        </LoginContext.Provider>
      </Router>
    </>
  );
}

export default App;