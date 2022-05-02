import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectprice } from '../features/PriceSlice';
import "./Paypal.css"

export default function Paypal() {
  const price = useSelector(selectprice)

  const paypal = useRef();

  useEffect(() => {
    window.paypal.Buttons({
      createOrder: (data, actions, err) => {
        return actions.order.create({
          intent: "CAPTURE",
          purchase_units: [
            {
              description: "RamFlix",
              amount: {
                value: price
              }
            }
          ]
        })
      },
      onApprove: async (data, actions) => {
        const order = await actions.order.capture();
        console.log(order)
      },
      onError: err => console.log(err),
    }).render(paypal.current)
  }, [price])

  return (
    <div className="paypal__contenedor">
      <div ref={paypal} className="paypal__button"></div>
    </div>
  )
}
