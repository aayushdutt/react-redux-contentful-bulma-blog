import React from 'react'
import {NavLink} from 'react-router-dom'

class Header extends React.Component {

  state = {
    isActive: false,
  }

  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }))
  }

  render() {
    return (
      <nav className="navbar"
          aria-label="main navigation"
          style={{
            borderBottom: 'solid 1px #dddddd',
          }}>
        <div className="navbar-brand">
          <NavLink
            className="navbar-item"
            to="/"
            activeClassName="is-active"
          >
            <i className="fab fa-lg fa-connectdevelop" style={{marginRight: "10px"}}></i>
            <span>AayushDutt</span>
          </NavLink>
          <button className="button navbar-burger" onClick={this.toggleNav}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className={ this.state.isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
          <div className="navbar-start">
            <NavLink
              className="navbar-item"
              to="/blog"
              activeClassName="is-active"
            >
              <span className="icon has-text-primary" style={{ marginRight: 5 }}>
                <i className="fas fa-code"></i>
              </span>
              Code Blog
            </NavLink>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" >
                Projects
              </a>
              <div className="navbar-dropdown">
                <a className="navbar-item">
                  Overview
                </a>
                <hr className="navbar-divider" />
                <a className="navbar-item">
                  This Site
                </a>
                <a className="navbar-item" >
                  Angular The React Way
                </a>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <a className="navbar-item" href="https://github.com/aayushdutt">
              <span className="icon">
                <i className="fab fa-lg fa-github"></i>
              </span>
            </a>
            <a className="navbar-item" href="https://twitter.com/aayushdutt">
              <span className="icon has-text-info" style={{ color: '#0084FF' }}>
                <i className="fab fa-lg fa-twitter"></i>
              </span>
            </a>
            <a className="navbar-item" href="http://resume.AayushDutt.com">
              Resume
              <span className="icon" style={{ color: '#0077B5', marginLeft: 5 }}>
                <i className="fab fa-lg fa-linkedin"></i>
              </span>
            </a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header