import './App.css';
import { verifyUser } from './services/users'
import { useHistory } from 'react-router-dom'
import { Route, Switch, Redirect } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import AboutUs from './screens/AboutUs/AboutUs'
import AddGift from './screens/AddGift/AddGift'
import Gift from './screens/Gift/Gift'
import Edit from './screens/Edit/Edit'
import GroupProfile from './screens/GroupProfile/GroupProfile'
import Home from './screens/Home/Home'
import Login from './screens/Login/Login'
import MyWishlist from './screens/MyWishlist/MyWishlist'
import Profile from './screens/Profile/Profile'
import SignUp from './screens/SignUp/SignUp'
import StartAGroup from './screens/StartAGroup/StartAGroup'

const App = () => {
  const history = useHistory()
  const [user, setUser] = useState(null)
  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser()
      user ? setUser(user) : setUser(null)
    }
    fetchUser()
  }, [])
  const handleRedirect = () => {
    history.push('/sign-in')
    alert('Please sign in first')
}
  return (
    <div className="App">
      <div className=".mega-grid">
        <Switch>
        <Route exact path='/'>
            <Home user={user} />
          </Route>
          <Route exact path='/profile'>
            <Profile user={user} />
          </Route>
          <Route path='/my-list'>
            <MyWishlist user={user} />
          </Route>
          <Route path='/start-a-group'>
            <StartAGroup user={user} />
          </Route>
          <Route path='/group-profile'>
            <GroupProfile user={user} />
          </Route>
          <Route path='/cart'>
            <Cart user={user} />
          </Route>
          <Route path='/gift'>
            <Detail user={user} />
          </Route>
          <Route path='add-gift'>
            <AddGift user={user} />
          </Route>
          <Route path='edit-gift'>
            <Edit user={user} />
          </Route>
          <Route path='about-us'>
            <AboutUs user={user} />
          </Route>
          <Route path='/log-in'>
            <Login setUser={setUser} />
          </Route>
          <Route path='/sign-up'>
            <SignUp setUser={setUser} />
          </Route>
          <Route path='log-out'>
            <LogOut setUser={setUser} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
