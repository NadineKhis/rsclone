import React from 'react'
import { TrialForm } from '../accordeon/trialForm/trialForm'
import './header.css'
import logo from '../../logo.svg'
import { Button } from './button/button'

const headerStyle = {
  background: `url('/images/misc/home-bg.jpg')`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
}

export function Header() {
  return (
    <div className='header' style={headerStyle}>
      <div className='logoContainer'>
        <img src={logo} alt="netflix_logo" className='logo' />
        <Button name='Sign In' page='/signin' />
      </div>
      <h1>Unlimited movies, TV shows, and more.</h1>
      <h2>Watch anywhere. Cancel anytime.</h2>
      <TrialForm />
      <h3>Only new members are eligible for this offer.</h3>
    </div >
  )
}