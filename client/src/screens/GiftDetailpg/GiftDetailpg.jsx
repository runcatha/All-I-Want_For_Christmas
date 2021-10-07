import './GiftDetailpg.css'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOneGift } from '../../services/gifts';
import { Link } from 'react-router-dom'
import { deleteGift } from '../../services/gifts';

export default function GiftDetailpg(props) {
  const [gift, setGift] = useState({});
  const { id } = useParams();
  // const {gifts} = props
  useEffect(() => {
    const fetchGift = async () => {
      const giftData = await getOneGift(id);
      setGift(giftData);
    };
    fetchGift();
    console.log(gift)
    // console.log(props.giftData)
  }, []);

  return (
    <div className='gift-detail'>
      <div className='detail'>
        <div className='gdpg-name'>{gift.name}</div>
        <div className='detail-card'>
          <div className='detail-img'><img src={gift.image} /></div>
          <div className='detail-price'>${gift.price}</div>
          <div className='detail-buy-link'>
            <a className='linkbutton' href={gift.buy_link}>Link to Buy</a></div>
        </div>
        <div className='gift-edit-delete'>
          <div className='gift-edit'>
          <Link className="edit-button" to={`/gifts/${gift.id}/edit`}>
                <button className="editbutton">Edit</button>
              </Link>
          </div>
          <div className='gift-delete'>
          <button
                  className="delete-button"
                  onClick={() => deleteGift(gift._id)}
                >
                  Delete
                </button>
          </div>
        </div>
      </div>
    </div>
  );
}
