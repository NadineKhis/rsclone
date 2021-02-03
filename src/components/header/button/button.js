import React from 'react'
import './button.css'
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'

export function Button(props) {
    return (
        <NavLink to={props.page}>
            <button className='sign_button'>
                {props.name}
            </button>
        </NavLink>
    )
}

Button.propTypes = {
    page: PropTypes.node,
    name: PropTypes.node,
}
