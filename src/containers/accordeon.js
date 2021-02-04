import React from 'react'
import { AccordeonItem } from '../components/accordeon/accordeon'
import { TrialForm } from '../components/accordeon/trialForm/trialForm'

export default function Accordeon() {

    return (
        <div className='Accordeon'>
            <h2>Frequently Asked Questions</h2>

            <AccordeonItem />
            <TrialForm />

        </div>
    )
}