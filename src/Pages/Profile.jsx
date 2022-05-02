import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectUser, login } from '../features/UserSlice.js';
import { auth } from '../firebase.js';
import { NetflixButton } from '../styled/styledComponent.js';
import Nav from './../Components/Nav.jsx';
import Plans from './../Components/Plans.jsx';
import Avatar from './../Images/Avatar.png';
import './Profile.css';

function Profile() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()
  const history = useHistory()

  const signOut = () => {
    auth.signOut();
    dispatch(login(null));
    history.push('/');
  }

  return (
    <div className='profile__contenedor'>
      <Nav />
      <div className="profile__body">
        <h3>Edit Profile</h3>
          <div className="profile__info">
            <img className='profile__avatar' src={Avatar} alt="Avatar" />
            <div className="profile__details">
              <div className="profile__plans">
                <h6 className='profile__email'>{user.email}</h6>
                <h5 className='profile__plan'>Plans</h5>
                <Plans cost={7.99}>Netfilx Standard</Plans>
                <Plans cost={11.99}>Netfilx Basic</Plans>
                <Plans wide="medium" color="grey" cost={15.99}>Netfilx Premiun</Plans>
                <NetflixButton wide="fullWidth" onClick={signOut}>Sign Out</NetflixButton>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
