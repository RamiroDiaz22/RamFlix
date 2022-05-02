import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setPrice } from '../features/PriceSlice';
import { NetflixButton } from '../styled/styledComponent';
import './Plans.css';

function Plans({ cost, children, color, wide }) {
  const dispatch = useDispatch();
  const history = useHistory()

  const handleClick = (cost) => {
    dispatch(setPrice(cost))
    history.push("/checkout")
  };

  return (
    <div className='plans__contenedor'>
      <h5 className='plans__standard'>{children}</h5>
      <NetflixButton
      wide={wide}
      color={color}
      onClick={() => handleClick(cost)}
      >
        Subscribe
      </NetflixButton>
    </div>
  )
}

export default Plans