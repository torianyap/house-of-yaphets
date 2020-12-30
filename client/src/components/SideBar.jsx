import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SideBar (props) {
  return (
    <>
    <div className="sidebar-container">
      <div className="sidebar-logo">HOY</div>
      <ul className="sidebar-navigation">
        <li className="header">Navigation</li>
        <li>
          <NavLink exact to="/">
            <i className="fas fa-home" aria-hidden="true"></i> Homepage
          </NavLink>
        </li>
        <li>
          <NavLink to="/sbk">
            <i className="fas fa-cookie-bite" aria-hidden="true"></i> SiemBoKoe
          </NavLink>
        </li>
        <li>
          <NavLink to="/sbk-supplies">
            <i className="fas fa-cookie-bite" aria-hidden="true"></i> SBK Supplies
          </NavLink>
        </li>
        <li>
          <NavLink to="batik-nuswantoro">
            <i className="fas fa-cookie-bite" aria-hidden="true"></i> Batik Nuswantoro
          </NavLink>
        </li>
        <li>
          <NavLink to="/propola">
            <i className="fas fa-cookie-bite" aria-hidden="true"></i> Propola Store
          </NavLink>
        </li>
        <li>
          <NavLink to="/zihqeren">
            <i className="fas fa-cookie-bite" aria-hidden="true"></i> Zihqeren
          </NavLink>
        </li>
      </ul>
    </div>
    </>
  )
}