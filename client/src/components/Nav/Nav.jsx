import './Nav.css'
import { NavLink, Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import React from 'react';
import Sidebar from '../Sidebar/Sidebar'

const Nav = ({ user }) => {
  const authenticatedOptions = (
    <>
      <NavLink className="link" to="/profile">Profile</NavLink>
      <NavLink className="link" to="/my-list">My List</NavLink>
      <NavLink className="link" to="/start-a-group">Start a Group</NavLink>
      <NavLink className="link" to="/cart">Cart</NavLink>
      <NavLink className="link" to="/log-out">Log Out</NavLink>
    </>
  )
  const unauthenticatedOptions = (
    <>
      <NavLink className="link" to="/sign-up">Sign Up</NavLink>
      <NavLink className="link" to="/log-in">Log In</NavLink>
    </>
  )
  const alwaysOptions = (
    <>
      <NavLink className="link" to="/about-us">About Us</NavLink>
      <NavLink className="link" to="/">Home</NavLink>
    </>
  )

  return (
    <nav>
      <div className="nav">
        <NavLink className="logo" to="/">
          <img src='https://i.imgur.com/ZYtHBLw.png'
            alt='home'
            id='home-link' />
        </NavLink>
        <div className='nav-block'>
          <div className="links">
            {user && <div className="link welcome">Welcome, {user.username}</div>}
            {alwaysOptions}
            {user ? authenticatedOptions : unauthenticatedOptions}
          </div>
        </div>
      </div>
      {/* <Sidebar user={user} pageWrapId={"page-wrap"} outerContainerId={"App"} /> */}
    </nav >
  )
}
export default Nav