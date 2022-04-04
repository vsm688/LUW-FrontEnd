import React, { useState } from 'react';
import Axios from 'axios';

function LoginForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [loginStatus, setLoginStatus] = useState('');

    const login = () => {
        Axios.post('http://localhost:3001/login', {
            email: email, 
            password: password,
        }).then((response) => {

            if (response.data.message) {
                setLoginStatus(response.data.message)
            } else {
                setLoginStatus(response.data[0].email)
            };
        });
    };

    return (
        <>
            <div className='LoginHighlight'></div>
            <div className='loginFormContainer'>
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
            </div>
        </>
    );
}

export default LoginForm;