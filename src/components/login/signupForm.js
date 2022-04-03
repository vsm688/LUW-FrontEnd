import React, { useState } from 'react';

function SigninForm() {
    return (
        <>
            <div className='SigninHighlight'></div>
            <div className='loginFormContainer'>
                <input id='signinForm' type="text" placeholder="  Full Name"
                /> <br />
                <input id='signinForm' type="text" placeholder="  Email Address"
                /> <br />
                <input id='signinForm' type="password" placeholder="  Password"
                /> <br />
                <input id='signinForm' type="password" placeholder="  Confirm Password"
                /> <br />

                <button id='modalButton' >Sign up</button>
            </div>
        </>
    );
}

export default SigninForm;