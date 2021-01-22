import React, { Component } from 'react'
import './loading.css'

export function Loading(props) {
    return (
        <div className='loading_wrapper' >
            <h2>Who's watching?</h2>
            <div className='current_user' onClick={props.onClick}>
                <img src={props.userImg} alt="user_img" className='user_img' />
                <h3>User</h3>
            </div>
        </div >
    )
} 