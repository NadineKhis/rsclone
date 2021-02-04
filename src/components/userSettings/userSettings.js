import React, { useState } from 'react'
import imgItems from '../../fixtures/userimages.json'
import './userSettings.css'
import firebase from 'firebase/app'
import { Redirect } from 'react-router-dom'


export function UserSettings() {
    const [userLogedIn, setUserLogedIn] = useState(true)
    const [userNewName, setUserNewName] = useState()
    const [userNewImg, setUserNewImg] = useState()

    const onLogOutClickHandler = () => {
        firebase.database().ref('users/' + localStorage.getItem('netflixUserID')).update({
            logedIn: false
        })
            .then(() => {
                localStorage.removeItem('netflixUserID')
                localStorage.removeItem('netflixCurrentUserIMG')
                setTimeout(() => {
                    setUserLogedIn(false)
                }, 500)
            })
    }

    const onNicknameChangeHandler = (event) => {
        setUserNewName(event.target.value.trim())
    }

    const onSaveClickHandler = () => {
        const newUserSettings = {}

        if (userNewName) {
            newUserSettings.nickname = userNewName
        }

        if (userNewImg) {
            newUserSettings.userImg = userNewImg
        }

        firebase.database().ref('users/' + localStorage.getItem('netflixUserID')).update(newUserSettings)
            .then(() => {
                localStorage.setItem('netflixCurrentUserIMG', userNewImg)
                setUserLogedIn(false)
            }
            )
    }

    const onImgClickHandler = (item) => {
        if (userNewImg === item) {
            setUserNewImg()
        } else {
            setUserNewImg(item)
        }
    }

    return (
        <div className='user_settings'>
            <h2>Choose user icon:</h2>
            <ul>
                {imgItems.map((item, index) => {
                    const cls = []
                    if (userNewImg === item) {
                        cls.push('active_img')
                    }
                    return (
                        <li key={index} onClick={() => onImgClickHandler(item)} className={cls.join(' ')}>
                            <img src={item} alt='user_icon' />
                        </li>
                    )
                })}
            </ul>
            <h2>Change nickname:</h2>
            <input placeholder='Nickname' onChange={onNicknameChangeHandler}></input>

            <div className='buttons'>
                <button onClick={onSaveClickHandler}>Save</button>
                <button onClick={onLogOutClickHandler}>Log out</button>
            </div>
            {userLogedIn
                ? null
                : <Redirect to='/' />
            }
        </div>
    )
}