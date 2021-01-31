import React, { useState } from 'react';
import { FooterContainer } from "../containers/footer";
import logo from "../logo.svg";
import { Form } from '../components';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database'
import { Redirect, NavLink } from 'react-router-dom'

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

export default function Signup() {
    const [userEmail, setUserEmail] = useState('')
    const [userEmailRemember, setuserEmailRemember] = useState(false)
    const [userPassword, setUserPassword] = useState('')
    const [userPasswordRep, setUserPasswordRep] = useState('')
    const [userNickname, setUserNickname] = useState('')
    const [userLogedIn, setUserLogedIn] = useState(false)

    if (localStorage.getItem('netflixEnteredEmail') && !userEmailRemember) {
        setUserEmail(localStorage.getItem('netflixEnteredEmail'))
        setuserEmailRemember(true)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword)
            .then((userCredential) => {

                var user = userCredential.user;

                firebase.database().ref('users/' + user.uid).set({
                    logedIn: true,
                    nickname: userNickname,
                    userImg: '/images/users/2.png',
                })

                localStorage.setItem('netflixUserID', user.uid)
                setUserLogedIn(true)
            })
            .then(localStorage.removeItem('netflixEnteredEmail'))
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
                <NavLink to='/'><img src={logo} alt="netflix_logo" className='logo' /></NavLink>
            </div>
            <Form style={formWrapper}>
                <Form.Title style={formTitle}>Sign Up</Form.Title>
                {/*{error && <Form.Error data-testid="error">{error}</Form.Error>}*/}

                <Form.Base onSubmit={submitHandler} method="POST">
                    <Form.Input
                        required
                        placeholder="Email address"
                        onChange={(event) => {
                            setUserEmail(event.target.value.trim())
                        }}
                        defaultvalue={localStorage.getItem('netflixEnteredEmail')}
                        value={userEmail}
                    />
                    <Form.Input
                        required
                        type="password"
                        autoComplete="off"
                        placeholder="Password"
                        onChange={(event) => {
                            setUserPassword(event.target.value.trim())
                        }}
                    />
                    <Form.Input
                        required
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
                    <Form.Input
                        required
                        placeholder="Nickname"
                        onChange={(event) => {
                            setUserNickname(event.target.value.trim())
                        }}
                    />
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
        {userLogedIn
            ? <Redirect to='/browse' />
            : null
        }
        {
            localStorage.getItem('netflixUserID') && (firebase.database().ref('/users/' + localStorage.getItem('netflixUserID'))
                .once('value')
                .then((snapshot) => {
                    return (snapshot.val().logedIn)
                }))
                ? <Redirect to='/browse' />
                : null
        }
    </>
    )

}