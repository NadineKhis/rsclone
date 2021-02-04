import React from 'react'
import { JumbotronContainer } from '../containers/jumbotron';
import { FooterContainer } from "../containers/footer";
import Accordeon from '../containers/accordeon'
import { HeaderContainer } from "../containers/header";
import { Redirect } from 'react-router-dom';
import firebase from 'firebase/app'
import 'firebase/database'

export default function Home() {
    return (
        <>
            <HeaderContainer />
            <JumbotronContainer />
            <Accordeon />
            <FooterContainer />
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

