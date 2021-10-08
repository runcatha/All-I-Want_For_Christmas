import React from 'react';
import { slide as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import './Sidebar.css'

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen })
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu() {
    this.setState({ menuOpen: false })
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu() {
    this.setState(state => ({ menuOpen: !state.menuOpen }))
  }

  closeAllMenusOnEsc = (e) => {
    e = e || window.event;
    if (e.key === 'Escape' || e.keyCode === 27) {
      this.setState({ menuOpen: false });
    }
    this.closeMenu()
  };

  authenticatedOptions = (
    <>
      <NavLink className="link" to="/profile">Profile</NavLink>
      <NavLink className="link" to="/my-list">My List</NavLink>
      <NavLink className="link" to="/start-a-group">Start a Group</NavLink>
      <NavLink className="link" to="/cart">Cart</NavLink>
      <NavLink onClick={() => this.closeMenu()} className="link menu-item" to="/sign-out">
        Sign Out
      </NavLink>
    </>
  );

  unauthenticatedOptions = (
    <>
      <NavLink onClick={() => this.closeMenu()} className="link menu-item" to="/sign-up">
        Sign Up
      </NavLink>
      <NavLink onClick={() => this.closeMenu()} className="link menu-item" to="/log-in">
        Log In
      </NavLink>
    </>
  );

  alwaysOptions = (
    <>
      <NavLink onClick={() => this.closeMenu()} className="link menu-item" to="/about-us">
        About Us
      </NavLink>
    </>
  );

  render() {
    return (
      // Pass on our props
      <Menu
        rightuseHistory
        disableAutoFocus
        isOpen={this.state.menuOpen}
        onStateChange={(state) => this.handleStateChange(state)}
        customOnKeyDown={this.closeAllMenusOnEsc}
      >
        <main id="page-wrap">
          {this.alwaysOptions}
          {this.props.currentUser ? this.authenticatedOptions : this.unauthenticatedOptions}
        </main>
      </Menu>
    )
  }
}