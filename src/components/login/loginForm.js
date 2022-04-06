import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function LoginForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [loginStatus, setLoginStatus] = useState('');

    const [loggedIn, setLoggedIn] = useState(false);

    Axios.defaults.withCredentials = true;

    const login = () => {
        Axios.post('http://localhost:3001/login', {
            email: email, 
            password: password,
        }).then((response) => {

            if (response.data.loggedIn) {
                localStorage.setItem("loggedIn", true);
                localStorage.setItem("name", response.data.name);
            } else {
                setLoginStatus(response.data[0].email)
            };
        });
    };

    useEffect(() => {
        Axios.get("http://localhost:3001/login").then((response) => {
            if (response.data.loggedIn == true)
            
        console.log(response);
        });
    }, []);

    return (
        <>
            <div className='LoginHighlight'></div>
            <form className='loginFormContainer'>
                <input id='loginForm' type="text" placeholder="  Email Address" 
                onChange={(e) => 
                setEmail(e.target.value)
                }
                /> <br />
                <input id='loginForm' type="password" placeholder="  Password" 
                onChange={(e) => 
                setPassword(e.target.value)
                }
                /> <br /> <br /> <br />
                <button id='modalButton' onClick={login}>Login</button>
                <h2>{loginStatus}</h2>
            </form>
        </>
    );
}

export default LoginForm;