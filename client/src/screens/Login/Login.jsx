import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
export default function Login(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className='login-form'>
      <h1>Login</h1>
      <div className='present-box'>
    <form 
      onSubmit={(e) => {
      e.preventDefault();
      props.handleLogin(formData);
    }}>
        {/* <img src="https://i.imgur.com/Q8cKrcY.png"
                      id='present'
                      alt='present' /> */}
      <div className='login'>
      </div>
      <div className='form-box'>
      <label>
              <input
                className='login-input'
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
                className='login-input'
            placeholder='Password'
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <br />
        <Link to='/sign-up'
        id='login-to-signup' >Not a member? Sign up here!</Link>
        <br />
      <button id='welcome-login'>Welcome!</button>
        </div>
        </form>
        </div>
        </div>
  );
}