import { Link } from 'react-router-dom';
import './Home.css'

const Home = (props) => {


  return (
    <div className='home'>
      <h1 id='home-welcome'>Welcome</h1>
      {/* <img src="https://i.imgur.com/41IXfju.png"
        id='bell'
        alt='bell' /> */}
      <div className='home-welcome'>
        <div className='login-home'>
        <Link to='/log-in' id='link-to-login'>
          <p>Log In</p>
          </Link>
          </div>
        <div className='sign-up-home'>
        <Link to='/sign-up' id='link-to-signup'>
          <p>Sign Up</p>
          </Link>
          </div>
      </div>
</div>
  )
}


export default Home