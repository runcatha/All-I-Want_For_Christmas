// import React from 'react'
// import './Group.css'
// import { Link } from 'react-router-dom'
// import { Card } from 'react-bootstrap'
// // import Gift from '../../components/Gift/Gift'

// export default function Groups(props) {

//   return (
//     <>
//       <div className='group'>
//       <div className='group-name'>{group.name}</div>
//         <div className='add-gift'>
//         <Link className="link" to="/add-group">
//         <button className='add-button'>+</button>
//       </Link>
//         </div>

//     <div className='group-div'>
//       {props.users.map((users) => (
//         <div  className='listing-wishlist-div' key={user.id}>
//           <Link to={`/gifts/${gift.id}`}>
//             <Card className="card-container" style={{ height: "11rem" }}>
//               <Card.Img
//                 className="card-img"
//                 variant="top"
//                 src={gift.image}
//                 style={{ height: "9rem"}}
//               />
//               <Card.Body style={{ height: "7rem" }}>
//                 <Card.Title className="card-name">{gift.name}</Card.Title>
//                 <Card.Text className="card-price">${gift.price}</Card.Text>
//               </Card.Body>
//             </Card>
//           </Link>
//         </div>
//       ))}
//         </div>
//       </div>
//       </>
//   )
// }