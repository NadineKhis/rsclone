import React from 'react'
import imgItems from '../../fixtures/userimages.json'
import './userSettings.css'

export function UserSettings() {
    return (
        <div className='user_settings'>
            <h2>Choose user icon:</h2>
            <ul>
                {imgItems.map((item, index) => {
                    return (
                        <li>
                            <img src={item} />
                        </li>
                    )
                })}
            </ul>
            <h2>Change nickname:</h2>
            <input placeholder='Nickname'></input>

            <div className='buttons'>
                <button>Save</button>
                <button>Log out</button>
            </div>
        </div>
    )
}