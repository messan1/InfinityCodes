import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './css/header.css'

const Header = ({ siteTitle }) => (
  <header className="HeaderGroup">
    <h1>InfinityCodes</h1>
    <div className="headerGroupDetails">
      <ul className="box1">
        <li><Link to="/" className='homeLink'>HOME</Link></li>
        <li><Link to="/">FORMATION</Link></li>
        <li><Link to="/">ARTICLES</Link></li>
        <li><Link to="/">EVENEMENTS</Link></li>
        <li><Link to="/">PROJETS</Link></li>
        <li><Link to="/">CONTACTS</Link></li>
      </ul>
      <ul className="box2">
      <li><Link to="/">LOGIN</Link></li>
      <li><Link to="/">REGISTER</Link></li>
      <li><Link to="/">EN</Link></li>
        
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
