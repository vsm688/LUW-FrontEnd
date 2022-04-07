import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

    function LoginForm() {

        // const [name] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');

        const [errorMessage, setErrorMessage] = useState('');

        const navigate = useNavigate();

        const login = () => {

            Axios.post("http://localhost:5000/student/login", {
                email: email,
                password: password,
            }).then((response) => {
                if (response.data.loggedIn) {
                    localStorage.setItem("loggedIn", true);
                    localStorage.setItem("email", response.data.email);
                    console.log(response);
                    navigate("/student");
                } else {
                    setErrorMessage(response.data.message);
                }
            });
        };

        return (
            <>
                <div className='LoginHighlight'></div>
                <div className='loginFormContainer'>
                    <input className='loginForm' type="text" placeholder="  Email Address"
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                    /> <br />
                    <input className='loginForm' type="password" placeholder="  Password"
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                    /> <br /> <br /> <br />
                    <button id='modalButton' onClick={login}>Login</button> <br />
                    <h4 style={{ color: "red" }}> {errorMessage} </h4>
                </div>
            </>
        );
    }

export default LoginForm;

