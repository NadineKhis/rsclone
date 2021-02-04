import React, { useState } from 'react'
import './loading.css'
import firebase from 'firebase/app'
import 'firebase/database'
import { DataLoadingEffect } from '../dataLoadingEffect/dataLoadingEffect'

export function Loading(props) {
    const [currentUserName, setCurrentUserName] = useState('')
    const [currentUserImg, setCurrenUserImg] = useState('')

    if (!currentUserName && localStorage.getItem('netflixUserID')) {
        firebase.database().ref('/users/' + localStorage.getItem('netflixUserID'))
            .once('value')
            .then((snapshot) => {
                setCurrentUserName(snapshot.val().nickname)
                setCurrenUserImg(snapshot.val().userImg)
                localStorage.setItem('netflixCurrentUserIMG', snapshot.val().userImg)
            })
    }

    return (
        currentUserName !== ('')
            ? (
                <div className='loading_wrapper' >
                    <h2>Who's watching?</h2>
                    <div className='current_user' onClick={props.onClick}>
                        <img src={currentUserImg || '/images/users/2.png'} alt="user_img" className='user_img' />
                        <h3>{currentUserName}</h3>
                    </div>
                </div>)
            : <DataLoadingEffect />
    )
} 