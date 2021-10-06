import { Link } from 'react-router-dom';
import './Home.css'

const Home = (props) => {


  return (
    <div className='home'>
      <img src="https://i.imgur.com/41IXfju.png"
        id='bell'
        alt='bell' />
      <div className='home-welcome'>
      <h1>Welcome</h1>
      </div>
</div>
  )
}


export default Home