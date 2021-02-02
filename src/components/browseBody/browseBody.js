import React from 'react'
import './browseBody.css'
import { FilmCategoryItem } from '../filmCategoryItem/filmCategoryItem'
import { UserSettings } from '../userSettings/userSettings'

export function BrowseBody(props) {
    console.log(props.bodyType)
    const browseStyle = {
        background: `url('/images/misc/joker1.jpg') no-repeat top`,
        backgroundSize: 'cover',
        height: '720px',
        maxWidth: '1920px',
    }
    {
        switch (props.bodyType) {
            case 'main':
                return (
                    <div className='browseBody_wrapper'>
                        <div className='current_film_describe' style={browseStyle}>
                            <h2>Watch Joker now</h2>
                            <p>Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks - the one he paints for his job as a clown, and the guise he projects in a futile attempt to feel like he&apos;s part of the world around him.</p>
                            <button>Play</button>
                        </div>
                        <div className='main_wrapper'>
                            <FilmCategoryItem />
                        </div>
                    </div>
                )
            case 'collection':
                return (<div style={{ color: 'white' }}>Collection</div>)
            case 'settings':
                return <UserSettings />
        }
    }



}