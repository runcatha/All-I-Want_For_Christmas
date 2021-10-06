import { Link } from 'react-router-dom';
import './Layout.css'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'


const Layout = (props) => (
  <div className='layout'>
      <Nav user={props.currentUser} />
      <div className="layout-children">
          {props.children}
      </div>
      <Footer />
  </div>
)

export default Layout
