import { useState } from 'react'
// import { postGift } from '../../services/gifts';
import './AddGift.css'

export default function AddGift(props) {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    price: '',
    buy_link: ''
  })

    const handleChange = (e) => {
      const { name, value } = e.target;
      // const { image, value } = e.target;
      // const { price, value } = e.target;
      // const { buy_link, value } = e.target;
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
        // [image]: value,
        // [price]: value,
        // [buy_link]: value
      }));
    };

  return (
    <div className='add-pg'>
    <form onSubmit={(e)=> {
      e.preventDefault()
      props.handleGiftCreate(formData);
    }}>
      <h3>Add Gift</h3>
      <label>
        <input
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
          type='text'
          name='buy_link'
          placeholder='link to purchase'
          value={formData.buy_link}
          onChange={handleChange}
        />
      </label>
      <br/>
      <button>Submit</button>
      </form>
      </div>
  );
}
