import { useState } from 'react';
import './SignUp.css'

export default function SignUp(props) {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(formData)
  };

  return (
    <div className='sign-up-div'>
      <div className='stocking-box'>
        <div className='sign-up'>
      <h1 id='sign-up-su'>Sign Up</h1>
        </div>
        <div className='sign-up-input'>
    <form className='form-su'
      onSubmit={(e) => {
        e.preventDefault();
        props.handleSignUp(formData);
      }}
    >
      <label>
        <input
          placeholder='first name'
          type='text'
          name='first_name'
          value={formData.first_name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
              <input
                id='last-name-su'
          placeholder='last name'
          type='text'
          name='last_name'
          value={formData.last_name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
              <input
                id='username-su'
          placeholder='Username'
          type='text'
          name='username'
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
              <input
                id='email-su'
          placeholder='email'
          type='text'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
              <input
                id='password-su'
          placeholder='password'
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
              <input
                id='image-su'
          placeholder='profile image link'
          type='text'
          name='image'
          value={formData.image}
          onChange={handleChange}
        />
      </label>
      <br />
      <button id='welcome-su'>Welcome!</button>
          </form>
          </div>
        </div>
      </div>
  );
}