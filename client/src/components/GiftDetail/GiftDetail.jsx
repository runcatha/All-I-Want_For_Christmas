// import { useState, useEffect } from "react";
// import "./GiftDetail.css";
// import { getGift, deleteGift, updateGift } from "../../services/gifts";
// import { useParams, Link, Redirect } from "react-router-dom";
// import { useHistory } from 'react-router-dom'

// const GiftDetail = (props) => {
//   const [isLoaded, setLoaded] = useState(false);
//   const [isUpdated, setUpdated] = useState(false)
//   const history = useHistory()
//   const { id } = useParams()
//   const [toggleFetch, setToggleFetch] = useState(false)
//   const [gift, setGift] = useState({
//     name: '',
//     image_url: '',
//     price: '',
//     buy_link: ''
//   })

//   const { handleRedirect, user } = props


//   useEffect(() => {
//     const fetchGift = async () => {
//       const gift = await getGift(id);
//       console.log(gift)
//       setGift(gift);
//       setLoaded(true);
//     };
//     fetchGift();
//   }, [id, toggleFetch]);
  

//   const handleDelete = async (event) => {
//     event.preventDefault()
//     await deleteGift(id, gift)
//     setUpdated(true)
//   }
//   if (isUpdated) {
//     return <Redirect to={'/gifts'} />
//   }
//   if (!isLoaded) {
//     return <h1>Loading...</h1>;
//   }

//   return (
//       <div className="gift-detail">
//         <div className="detail">
//           <h1>{gift.name}</h1>
//           <img
//             className="gift-detail-image"
//             src={gift.image_url}
//             alt={gift.name}
//           />
//           <h2>${gift.price}</h2>
//           <div className='directLinkbutton'>
//             <a className='linkbutton' href={gift.buy_link}>Link to Buy</a>
//           </div>
//         </div>
//             {/* </div> */}
//             <h2 className="price">Price: {`$${laptop.price}`}</h2>
//             <div className="button-container">
//               <Link className="edit-button" to={`/gifts/${gift._id}/edit`}>
//                 <button className="editbutton">Edit</button>
//               </Link>

//               {/* <div> */}
//                 <button
//                   className="delete-button"
//                   onClick={() => deleteGift(gift._id)}
//                 >Delete</button>
//               {/* </div> */}

//             </div>
//           </div>
//   );
// };

// export default GiftDetail;