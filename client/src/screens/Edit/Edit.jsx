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
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.handleFoodUpdate(id, formData);
      }}
    >
      <h3>Edit Food</h3>
      <label>
        Name:
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <button>Submit</button>
    </form>
  );
}