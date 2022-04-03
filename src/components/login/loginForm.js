import React, { useState } from 'react';

function LoginForm() {
    return (
        <>
            <div className='LoginHighlight'></div>
            <div className='loginFormContainer'>
                <input id='loginForm' type="text" placeholder="  Email Address"
                /> <br />
                <input id='loginForm' type="password" placeholder="  Password"
                /> <br /> <br /> <br />
                <button id='modalButton'>Login</button>
            </div>
        </>
    );
}

export default LoginForm;