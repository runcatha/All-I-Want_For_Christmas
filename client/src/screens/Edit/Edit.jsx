import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Edit.css'

export default function FoodEdit(props) {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    price: '',
    buy_link: ''
  });
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const singleGift = props.gifts.find(gift=> gift.id === Number(id) )
      setFormData({
        name: singleGift.name,
        image: singleGift.image,
        price: singleGift.price,
        buy_link: singleGift.buy_link,
      });
    }
    if (props.gifts.length) {
      prefillFormData();
    }
  }, [props.gifts, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className='edit-pg'>
    <form onSubmit={(e)=> {
      e.preventDefault()
      props.handleGiftUpdate(id, formData);
    }}>
        <h1>Edit Gift</h1>
        <div className='edit-form'>
      <label>
          <input
            id='eg-name'
          type='text'
          name='name'
          placeholder='product name'
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
          <input
            id='eg-image'
          type='text'
          name='image'
          placeholder='image link'
          value={formData.image}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
          <input
            id='eg-price'
          type='text'
          name='price'
          placeholder='price'
          value={formData.price}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
          <input
            id='eg-buy'
          type='text'
          name='buy_link'
          placeholder='link to purchase'
          value={formData.buy_link}
          onChange={handleChange}
        />
      </label>
      <br/>
      <button id='eg-submit'>Submit</button>
      </div>
      </form>
      </div>
  );
}