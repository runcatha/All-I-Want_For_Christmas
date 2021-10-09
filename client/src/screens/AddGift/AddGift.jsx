import { useState } from "react";
import "./AddGift.css";

export default function AddGift(props) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
    buy_link: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="add-pg">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.handleGiftCreate(formData);
        }}
      >
        <h1 id="add-gift-hOne">Add Gift</h1>
        <div className="add-form">
          <label>
            <input
              type="text"
              name="name"
              placeholder="product name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            <input
              type="text"
              name="image"
              placeholder="image link"
              value={formData.image}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            <input
              type="number"
              name="price"
              placeholder="price"
              value={formData.price}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            <input
              type="text"
              name="buy_link"
              placeholder="link to purchase"
              value={formData.buy_link}
              onChange={handleChange}
            />
          </label>
          <br />
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
