import { useState } from 'react';

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
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.handleSignUp(formData);
      }}
    >
      <h3>Sign Up</h3>
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
          placeholder='profile image link'
          type='text'
          name='image'
          value={formData.image}
          onChange={handleChange}
        />
      </label>
      <br />
      <button>Welcome!</button>
    </form>
  );
}