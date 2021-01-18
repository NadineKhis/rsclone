import React from 'react'
import './button.css'
import PropTypes from 'prop-types';

export function Button(props) {
    return (
        <a href={props.page}>
            <button className='sign_button'>
                {props.name}
            </button>
        </a>
    )
}

Button.propTypes = {
  page: PropTypes.node,
  name: PropTypes.node,
}
