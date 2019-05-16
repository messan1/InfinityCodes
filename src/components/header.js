import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './css/header.css'

const Header = ({ siteTitle }) => (
  <header className="HeaderGroup">
    <h1>InfinityCodes</h1>
    <div className="headerGroupDetails">
      <ul className="box1">
        <li>HOME</li>
        <li>FORMATION</li>
        <li>ARTICLES</li>
        <li>EVENEMENTS</li>
        <li>PROJETS</li>
        <li>CONTACTS</li>
      </ul>
      <ul className="box2">
        <li>LOGIN</li>
        <li>REGISTER</li>
        <li>EN</li>
        
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
