import React, { useState } from 'react';
import { NetflixButton, NetflixInput } from '../styled/styledComponent';
import SignUp from "./SignUp.jsx";
import background from "./../Images/background.jpg";
import Logo from './../Images/Logo.png'
import './Login.css';

function Login() {
  const [signin, setSignin] = useState(false)
  const [signEmail, setSignEmail] = useState("")

  return (
    <div className='login__contenedor'
    style={{
        backgroundSize: "cover",
        backgroundImage: `url(
            "${background}"
        )`,
        backgroundPosition: "center center",
        objectFit: "contain",
        backgroundRepeat: "no-repeat",
    }}>
        <img src={Logo}
        alt="Netflix" className="login__logo"/>
        <NetflixButton radius="true" className='login__button' onClick={() => setSignin(true)}>Sign In</NetflixButton>
        <div className="login__info">
          {
            signin ? (<SignUp signEmail={signEmail}/>) :(
              <>
                <h4 className='login__text'>Unlimited flims, TV programmes and more.</h4>
                <h5 className='login__text'>Watch anywhere. Cancel at any time.</h5>
                <h6 className='login__text'>Ready to watch? Enter to email to create or restart your membership.</h6>
                <div className="login__input__block">
                  <form className='login__form'>
                    <NetflixInput
                    className='login__input'
                    placeholder='Email address'
                    type="email"
                    value={signEmail}
                    onChange={(e) => setSignEmail(e.target.value)} />
                    <NetflixButton
                    className='login__button_inset'
                    radius="true"
                    onClick={() => setSignin(true)}>GET STARTED</NetflixButton>
                  </form>
                </div>
              </>
            )
          }
        </div>  
    </div>
  )
}

export default Login