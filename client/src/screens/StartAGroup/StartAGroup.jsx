import { useState } from 'react'
import './StartAGroup.css'
import {Link} from 'react-router-dom';

export default function AddGroup(props) {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    members: ''
  })

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

  return (
    <div className='add-group-pg'>
    <form onSubmit={(e)=> {
      e.preventDefault()
      props.handleGroupCreate(formData);
    }}>
        <h1>Add A Group!</h1>
        <div className='add-group-form'>
      <label>
        <input
          type='text'
          name='name'
          placeholder='group name'
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
      {/* <br />
      <label>
        <input
          type='text'
          name='members'
          placeholder='members'
          value={formData.members}
          onChange={handleChange}
        />
      </label> */}
      <br />
      <button>Let's Go!</button>
      </div>
      </form>
      </div>
  );
}