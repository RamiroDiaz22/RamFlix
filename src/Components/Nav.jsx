import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Logo from './../Images/Logo.png';
import Avatar from './../Images/Avatar.png';
import './Nav.css';

function Nav() {
  const [show, handleShow] = useState(false)
  const history = useHistory()

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                handleShow(true);
            } else handleShow(false)
        });
        return () => {
            window.removeEventListener("scroll", {})
        }
    }, [])

  return (
    <div className={`nav ${show && "nav__black"}`}>

        <img src={Logo}
        alt="Netflix" className="nav__logo"
        onClick={() => history.push("/home")} />
        <img className='nav__avatar'
        onClick={() => history.push("/profile")}
        src={Avatar} alt="Avatar" />
    </div>
  )
}

export default Nav