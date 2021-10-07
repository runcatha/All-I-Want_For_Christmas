import React from 'react'
import './MyWishlist.css'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
// import Gift from '../../components/Gift/Gift'

export default function Gifts(props) {

  return (
    <>
      <div className='wishlist'>
    <h3>My Wishlist</h3>

    <div className='wishlist-div'>
      {props.gifts.map((gift) => (
        <div  className='listing-wishlist-div' key={gift.id}>
          <Link to={`/gifts/${gift.id}`}>
            <Card className="card-container" style={{ height: "11rem" }}>
              <Card.Img
                className="card-img"
                variant="top"
                src={gift.image}
                style={{ height: "9rem"}}
              />
              <Card.Body style={{ height: "7rem" }}>
                <Card.Title className="card-name">{gift.name}</Card.Title>
                <Card.Text className="card-price">${gift.price}</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </div>
      ))}
      </div>
      </div>
      </>
  )
}