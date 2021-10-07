import React from 'react'
import './GroupProfile.css'
import { Link, useParams } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { getGroup} from '../../services/groups'

export default function GroupProfile(props) {

  const [group, setGroup] = useState(null)

  const {id} = useParams()

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
      <div className='group-name'>{group.name}</div>
        <div className='add-member'>
        {/* <Link className="link" to="/add-group"> */}
        <button className='add-button'>+</button>
      {/* </Link> */}
        </div>

    <div className='group-div'>
      {group.users.map((user) => (
        <div  className='listing-user-div' key={user.id}>
          {/* <Link to={`/gifts/${gift.id}`}> */}
            <Card className="card-container" style={{ height: "11rem" }}>
              <Card.Img
                className="card-img"
                variant="top"
                src={user.image}
                style={{ height: "9rem"}}
              />
              <Card.Body style={{ height: "7rem" }}>
                <Card.Title className="card-name">{user.name}</Card.Title>
                {/* <Card.Text className="card-price">${gift.price}</Card.Text> */}
              </Card.Body>
            </Card>
          {/* </Link> */}
        </div>
      ))}
        </div>
      </div>
      </>
  )
}