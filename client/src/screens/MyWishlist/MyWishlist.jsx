import React from 'react'
import './MyWishlist.css'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Gift from '../../screens/Gift/Gift'

export default function Gifts(props) {

  return (
    <div className='my-wishlist'>
      <h3>My Wishlist</h3>

      {props.gifts.map((gift, index) => (
        // <p key={gift.id}>{gift.name}</p>
        <Link className='link' to={`/gifts/${gift._id}`}>

        <Gift
          id={gift.id}
            name={gift.name}
            image={gift.image}
          price={gift.price}
          buy_link={gift.buy_link}
            key={index}
          />
          </Link>
          
      ))}
    </div>
  )
}