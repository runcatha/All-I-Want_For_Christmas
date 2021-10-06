import './App.css';
// import { verifyUser } from './services/users'
import { Route, Switch, Redirect, useHistory } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Layout from './components/Layout/Layout';
import Login from './screens/Login/Login';
import SignUp from './screens/SignUp/SignUp';
import MainContainer from './components/MainContainer/MainContainer';

import {
  loginUser,
  signUpUser,
  verifyUser,
  removeToken,
} from './services/auth';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push('/profile');
  };

  const handleSignUp = async (signUpData) => {
    const userData = await signUpUser(signUpData);
    setCurrentUser(userData);
    history.push('/profile');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
  };

  return (
    <div className='App'>
      <Layout currentUser={currentUser} handleLogout={handleLogout}>
        <Switch>
          <Route path='/log-in'>
            <Login handleLogin={handleLogin} />
          </Route>
          <Route path='/sign-up'>
            <SignUp handleSignUp={handleSignUp} />
          </Route>
          {/* <Route path='/about-us'>
            <AboutUs/>
          </Route> */}
          <Route path='/'>
            <MainContainer />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
