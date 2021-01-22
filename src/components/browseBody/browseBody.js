import React from 'react'
import './browseBody.css'
import { FilmCategoryItem } from '../filmCategoryItem/filmCategoryItem'

export function BrowseBody(props) {

    const browseStyle = {
        background: `url('/images/misc/joker1.jpg') no-repeat top`,
        backgroundSize: 'cover',
        height: '720px',
        maxWidth: '1920px',
    }
    return (
        <div className='browseBody_wrapper'>
            <div className='current_film_describe' style={browseStyle}>
                <h2>Watch Joker now</h2>
                <p>Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks - the one he paints for his job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world around him.</p>
                <button>Play</button>
            </div>
            <div className='main_wrapper'>
                <FilmCategoryItem category={props.categoryes} onLeftArrowClick={props.onLeftArrowClick} onRightArrowClick={props.onRightArrowClick} />
            </div>
        </div>
    )
}