import React from 'react'
import { Logo } from '../browsePageLogo/logo'
import './browseNav.css'

export function BrowseNav(props) {

    return (
        <div className='browse_nav'>
            <Logo />
            { props.userLogedIn && props.dataLoaded
                ? (<div className='browse_nav_menu'>
                    <div className='navigation'>
                        <ul className='navigation_menu'>
                            <li className='active'>Main</li>
                            <li>Series</li>
                            <li>Films</li>
                        </ul>
                    </div>
                    <ul className='navigation_icons'>
                        <li><img src="/images/icons/search.png" alt="search" className='search_icon' /></li>
                        <li><img src={props.userImg} alt="user_icon" className='smal_user_icon' /></li>
                    </ul>

                </div>)
                : null}
        </div >
    )
}
