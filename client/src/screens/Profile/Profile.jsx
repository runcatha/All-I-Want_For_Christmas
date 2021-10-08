import React from "react";
import './Profile.css'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

export default function Profile(props) {

  return (
  <div className='profile'>
    <div className='my-wishlist-and-add-group'>
        <div className='profile-my-wishlist'>
          <Link to='/my-list' id='my-list-link'>
          <p id='my-list-p'>My List</p>
          <img src='https://i.imgur.com/bMPc50L.jpg'
            id='profile-to-my-list'
          alt='present' />
          </Link>
        </div>
        <div className='profile-add-group'>
          <Link to='/start-a-group' id='add-group-link'>
          <img src='https://i.imgur.com/yGPCkHm.png'
            id='profile-to-add-group'
          alt='group' />
          </Link>
        </div>
      </div>
      <div className='your-groups-with-cards'>
      <div className='groups'>
        <h1 id='your-groups-p'>Your Groups</h1>
        <div className='groups-div'>
      {props.groups.map((group) => (
        <div  className='listing-groups-div' key={group.id}>
          <Link to={`/groups/${group.id}`}>
            <Card className="card-container" style={{ height: "12rem" }}>
              <Card.Body style={{ height: "7rem" }}>
                <Card.Title className="card-name">{group.name}</Card.Title>
              <Card.Img
                className="card-img"
                variant="top"
                src={group.image}
                style={{ height: "9rem"}}
              />
              </Card.Body>
            </Card>
          </Link>
        </div>
      ))}
            </div>
      </div>
      </div>
  </div>
  )
}