import React, { useState } from 'react'
import { Logo } from '../browsePageLogo/logo'
import './browseNav.css'
import firebase from 'firebase/app'
import 'firebase/database'
import { Redirect } from 'react-router-dom'

export function BrowseNav(props) {
    const [userMenuActive, setUserMenuActive] = useState(false)
    const [userLogedIn, setUserLogedIn] = useState(true)

    function onUserIconClickHandler() {
        setUserMenuActive(!userMenuActive)
    }

    function onExitClickHandler() {
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

    return (
        <div className='browse_nav'>
            <Logo />
            { props.userLogedIn
                ? (<div className='browse_nav_menu'>
                    <div className='navigation'>
                        <ul className='navigation_menu'>
                            <li onClick={props.onMainClick}>Main</li>
                            <li onClick={props.onCollectionClick}>My collection</li>
                        </ul>
                    </div>
                    <ul className='navigation_icons'>
                        <li><img src="/images/icons/search.png" alt="search" className='search_icon' /></li>
                        <li onClick={onUserIconClickHandler}><img src={localStorage.getItem('netflixCurrentUserIMG')} alt="user_icon" className='smal_user_icon' /></li>
                    </ul>
                    {userMenuActive
                        ? (<ul className='user_menu'>
                            <li onClick={props.onSettingsClick}>Settings</li>
                            <li onClick={onExitClickHandler}>Log out</li>
                        </ul>)
                        : null
                    }
                </div>)
                : null}
            {userLogedIn
                ? null
                : <Redirect to='/' />
            }
        </div >
    )
}
