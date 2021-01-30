import React, { useState } from 'react';
import { FooterContainer } from "../containers/footer";
import logo from "../logo.svg";
import { Button } from "../components/header/button/button";
import { Form } from '../components';
import firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from '../constants/firebaseConfig'
import { NavLink } from 'react-router-dom'

const headerStyle = {
    background: `url('/images/misc/home-bg.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
}

const formTitle = {
    textAlign: "left",
    fontSize: "32px",
    marginBottom: "20px"
}

const formWrapper = {
    textAlign: "left",
}



// firebase.initializeApp(firebaseConfig)

export default function Signup() {
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [userPasswordRep, setUserPasswordRep] = useState('')

    const submitHandler = (event) => {
        event.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword)
            .then((userCredential) => {
                // Signed in
                <NavLink to='/browse' />
                // var user = userCredential.user;

            })
            .catch((error) => {
                console.error(error.message)
                // var errorCode = error.code;
                // var errorMessage = error.message;
            });
        console.log('enter')
    }

    return (<>
        <div className='header' style={headerStyle}>
            <div className='logoContainer'>
                <img src={logo} alt="netflix_logo" className='logo' />
            </div>
            <Form style={formWrapper}>
                <Form.Title style={formTitle}>Sign Up</Form.Title>
                {/*{error && <Form.Error data-testid="error">{error}</Form.Error>}*/}

                <Form.Base onSubmit={submitHandler} method="POST">
                    <Form.Input
                        placeholder="Email address"
                        onChange={(event) => {
                            setUserEmail(event.target.value.trim())
                        }}
                    />
                    <Form.Input
                        type="password"
                        autoComplete="off"
                        placeholder="Password"
                        onChange={(event) => {
                            setUserPassword(event.target.value.trim())
                        }}
                    />
                    <Form.Input
                        type="password"
                        autoComplete="off"
                        placeholder="Repeat password"
                        onChange={(event) => {
                            setUserPasswordRep(event.target.value.trim())
                        }}
                    />
                    {userPassword === userPasswordRep
                        ? null
                        : (<div>Passwords are not the same</div>)
                    }
                    <Form.Submit type="submit" data-testid="sign-in">
                        Sign Up
          </Form.Submit>
                </Form.Base>

                <Form.TextSmall>
                    This page is protected by Google reCAPTCHA to ensure you&apos;re not a bot. Learn more.
        </Form.TextSmall>
            </Form>
        </div>
        <FooterContainer />
    </>
    )

}