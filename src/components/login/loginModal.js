import React, { useRef, useEffect, useState } from 'react';
import './loginModal.css';
import Students from './images/Students.png';
import Teachers from './images/teacher.png';
import LoginForm from './loginForm';
import SigninForm from './signupForm';
import Navbar from '../Navbar';
import Footer from '../Footer';

function Login () {

    const [openLogin, setOpenLogin] = useState(false);
    const [openSignin, setSignin] = useState(true);

    const myRef = useRef(null);

useEffect(() => {
    myRef.current.scrollIntoView();
});    

    return (
        <>
               <div ref={myRef}></div>
               <Navbar></Navbar>
        <div className='modalBackground'>
        <div className='modalContainer'>
            <div className='modalMainContainer'>
                {/* ----------------- student signup / login side with opposite useState switches --------------- */}
                <div className='leftContainer'>
                    <div className='imageContainer'>
                        <img id='studentImage' src={Students}></img>
                    </div>
                    <div className='ModalHeader'>
                        <h1>Students</h1>
                    </div>
                    <div className='switchContainer'>
                        <button id='loginButton' onClick={() => {
                            setOpenLogin(true);
                            setSignin(false);
                        }}
                        >LOG IN</button>
                        <button id='signupButton' onClick={() => {
                            setOpenLogin(false);
                            setSignin(true);
                        }}
                        >SIGN UP</button>
                    </div>
                    <div className='loginFormContainer'>
                        {openLogin && <LoginForm />}
                        {openSignin && <SigninForm />}
                    </div>
                </div>
                {/* ----------------- teacher signup / login side with opposite useState switches --------------- */}
                <div className='rightContainer'>

                    {/* <div className='closeButton'>
                        <button onClick={() => closeModal(false)}> X </button>
                    </div> */}
                    <div className='imageContainer'>
                        <img id='teacherImage' src={Teachers}></img>
                    </div>
                    <div className='ModalHeader'>
                        <h1>Teachers</h1>
                    </div>
                    <div className='switchContainer'>
                        <button id='loginButton' onClick={() => {
                            setOpenLogin(true);
                            setSignin(false);
                        }}
                        >LOG IN</button>
                        <button id='signupButton' onClick={() => {
                            setOpenLogin(false);
                            setSignin(true);
                        }}
                        >SIGN UP</button>
                    </div>
                    <div className='loginFormContainer'>
                    {openLogin && <LoginForm />}
                        {openSignin && <SigninForm />}
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer></Footer>
    </>
    )
}
export default Login;