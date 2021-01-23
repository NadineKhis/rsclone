import React from 'react'
import { FooterContainer } from "../containers/footer";
import logo from "../logo.svg";
import { Button } from "../components/header/button/button";
import { Form } from '../components';

const headerStyle = {
  background: `url('/images/misc/home-bg.jpg')`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
}

const formTitle = {
  textAlign: "left",
  fontSize: "32px",
  marginBottom: "20px"
}

const formWrapper = {
  textAlign: "left",
}

export default function Signin() {
  return (<>
    <div className='header' style={ headerStyle }>
      <div className='logoContainer'>
        <img src={logo} alt="netflix_logo" className='logo' />
        <Button name='Sign In' page='/signin' />
      </div>
      <Form style={ formWrapper }>
        <Form.Title style={ formTitle }>Sign In</Form.Title>
        {/*{error && <Form.Error data-testid="error">{error}</Form.Error>}*/}

        <Form.Base method="POST">
          <Form.Input
            placeholder="Email address"

          />
          <Form.Input
            type="password"
            autoComplete="off"
            placeholder="Password"
          />
          <Form.Submit  type="submit" data-testid="sign-in">
            Sign In
          </Form.Submit>
        </Form.Base>

        <Form.Text>
          New to Netflix? <Form.Link to="">Sign up now.</Form.Link>
        </Form.Text>
        <Form.TextSmall>
          This page is protected by Google reCAPTCHA to ensure you&apos;re not a bot. Learn more.
        </Form.TextSmall>
      </Form>
    </div>
      <FooterContainer/>
    </>
  )
} 