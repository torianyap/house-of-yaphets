import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar (props) {
  return (
    <>
    <nav className="navbar navbar-light nav-style">
      <div className="container mt-2">
        <NavLink exact to="/" className="navbar-brand">HOY</NavLink>
        <div className="ml-auto d-flex" style={{ position: 'relative' }}>
          <div style={{ cursor: 'pointer', position: 'relative', border: 'solid', borderColor: '#d0d0d0', borderWidth: '1px' , padding: '10px', borderRadius: '5px' }}>
            <span className="fas fa-shopping-cart" style={{ fontSize: '25px', color: 'grey' }}></span>
          </div>
          <div className="mx-3 pl-2" style={{borderLeft: 'solid', borderColor: '#d0d0d0', borderWidth: '1px' }}>
            <div className="navbar-nav">
              <li className="nav-item dropdown">
                <div className="nav-link dropdown-toggle" id="droptoggle"role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span>username</span>
                  <div className="dropdown-menu" aria-labelledby="droptoggle">
                    <span className="dropdown-item">Orders</span>
                    <span className="dropdown-item">Logout</span>
                  </div>
                </div>
              </li>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}