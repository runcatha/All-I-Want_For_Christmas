import React from 'react'
import './GroupProfile.css'
import { Link, useParams } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { getGroup} from '../../services/groups'

export default function GroupProfile(props) {

  const [group, setGroup] = useState(null)

  const {id} = useParams()
  const {currentUser} = props
  useEffect(() => {
    const fetchGroup = async () => {
      const groupData = await getGroup(id);
      setGroup(groupData);
    };
    fetchGroup();
  }, []);

  if (!group) return <h1>Loading...</h1>

  return (
    <>
      <div className='group'>
        <h1 id='group-name'>{group.name}</h1>
        <div className='add-and-remove'>
        <div className='add-member'>
        <button id='add-member-button' onClick={() => {props.handleUserToGroupCreate(group, currentUser)}} className='add-button'>+</button>
        </div>
        <div className='remove-group'>
            <button onClick={() => { props.handleGroupDelete(group.id) }} className='remove-group-button'>-</button>
            </div>
        </div>

    <div className='group-div'>
      {group.users.map((user) => (
        <div  className='listing-user-div' key={user.id}>
            <Card className="card-container" style={{ height: "11rem" }}>
              <Card.Img
                className="card-img"
                variant="top"
                src={user.image}
                style={{ height: "9rem"}}
              />
              <Card.Body style={{ height: "7rem" }}>
              <Card.Title className="card-name">{user.first_name} {user.last_name}</Card.Title>
              </Card.Body>
            </Card>
        </div>
      ))}
        </div>
      </div>
      </>
  )
}