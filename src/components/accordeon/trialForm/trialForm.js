import React from 'react'
import { NavLink } from 'react-router-dom'
import './trialForm.css'

export function TrialForm() {
    return (
        <div className='TrialForm'>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            <div className="input_wrapper">
                <input type="text" placeholder='Email adress' onChange={(event) => {
                    localStorage.setItem('netflixEnteredEmail', event.target.value)
                }} />
                <NavLink to='/signup'><button >TRY 30 DAYS FREE &gt;</button></NavLink>
            </div>
        </div>
    )
} 