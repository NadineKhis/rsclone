import React, { useState } from 'react';
import { FooterContainer } from "../containers/footer";
import logo from "../logo.svg";
import { Button } from "../components/header/button/button";
import { Form } from '../components';
import firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from '../constants/firebaseConfig'
import { Redirect } from 'react-router-dom';

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



firebase.initializeApp(firebaseConfig)

export default function Signin() {
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [userLogedIn, setUserLogedIn] = useState(false)

  const submitHandler = (event) => {
    event.preventDefault()
    firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(user.uid)
        setUserLogedIn(true)
      })
      .catch((error) => {
        console.error(error.message)
        // var errorCode = error.code;
        // var errorMessage = error.message;
      });
  }

  return (<>
    <div className='header' style={headerStyle}>
      <div className='logoContainer'>
        <img src={logo} alt="netflix_logo" className='logo' />
      </div>
      <Form style={formWrapper}>
        <Form.Title style={formTitle}>Sign In</Form.Title>
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
          <Form.Submit type="submit" data-testid="sign-in">
            Sign In
          </Form.Submit>
        </Form.Base>

        <Form.Text>
          New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
        </Form.Text>
        <Form.TextSmall>
          This page is protected by Google reCAPTCHA to ensure you&apos;re not a bot. Learn more.
        </Form.TextSmall>
      </Form>
    </div>
    <FooterContainer />
    {userLogedIn
      ? <Redirect to='/browse' />
      : null
    }
  </>
  )
} 