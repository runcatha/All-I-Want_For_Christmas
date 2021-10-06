import { useState } from 'react';

export default function SignUp(props) {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    profileimage: '',
  });

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
        props.handleRegister(formData);
      }}
    >
      <h3>Sign Up</h3>
      <label>
        <input
          placeholder='first name'
          type='text'
          name='firstname'
          value={formData.firstname}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        <input
          placeholder='last name'
          type='text'
          name='lastname'
          value={formData.lastname}
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
          type='link'
          name='profileimage'
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <button>Welcome!</button>
    </form>
  );
}