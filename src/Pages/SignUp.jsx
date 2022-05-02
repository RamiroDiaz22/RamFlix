import React, { useState } from 'react';
import { auth } from './../firebase';
import { NetflixButton, NetflixInput } from '../styled/styledComponent';
import './SignUp.css';
import { useHistory } from 'react-router-dom';

function SignUp({ signEmail }) {
  const [email, setEmail] = useState(signEmail);
  const [password, setPassword] = useState("");
  const history = useHistory()

  const signIn = (e) => {
    e.preventDefault()
    auth.signInWithEmailAndPassword(email, password)
      .then((authUser) => history.push("/home"))
      .catch((err) => alert(err.message))
  }

  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
        .then((authUser) => history.push("/home"))
      .catch((err) => alert(err.message))
  }
  
  return (
    <div className='singUp__contenedor'>
      <h5>Sign In</h5>
      <form className="signUp_form">
        <NetflixInput
        value={email}
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Email'
        className='signUp__email'/>
        <NetflixInput
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password'
        className='signUp__password'/>
        <NetflixButton
        type='submit'
        onClick={(e) => signIn(e)}
        radius="true" wide="medium"
        className='signUp__button'>
          Sign In
        </NetflixButton>
        <h6>New to Netflix?{" "}</h6>
        <span
        onClick={(e) => register(e)}
        className="singUp__Link">
          Sign Up Now.{" "}
        </span>
      </form>
    </div>
  )
}

export default SignUp