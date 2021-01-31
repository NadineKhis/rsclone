import React from 'react'
import './dataLoadingEffect.css'

export function DataLoadingEffect() {
    return (
        <div className='loading_state'>
            <img src='./images/misc/loading.gif' alt="loading_circle" className='user_img' />
        </div>
    )
}