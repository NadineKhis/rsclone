import React from 'react'
import './button.css'

export function Button(props) {
    return (
        <a href={props.page}>
            <button className='sign_button'>
                {props.name}
            </button>
        </a>

    )
} 