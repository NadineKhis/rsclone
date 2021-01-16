import React from 'react'
import './accordeon.css'
import { AccordeonItem } from './accordeoneItem'

export default function Accordeon() {

    return (
        <div className='Accordeon'>
            <h2>Frequently Asked Questions</h2>

            <AccordeonItem />

            <div className='email_wrapper'>
                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                <div className="input_wrapper">
                    <input type="text" placeholder='Email adress' />
                    <button>TRY 30 DAYS FREE ></button>
                </div>
            </div>
        </div>
    )
}