import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Header = ({ siteTitle }) => (
  <Headers>
    <Content>
      <Items>
        <Item>HOME</Item>
        <Item>FORMATIONS</Item>
        <Item>ARTICE</Item>
        <Item>EVENEMENTS</Item>
        <Item>PROJETS</Item>
        <Item>CONTACT</Item>
        <Item>...</Item>
      </Items>
      <Items>
        <Item>LOGIN</Item>
        <Item>REGISTER</Item>
        <Item>ARTICE</Item>
        <Item>FR</Item>
      </Items>
    </Content>
  </Headers>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const Headers = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 4fr 1.5fr;
`

const Name = styled.h1`
  font-size: 23px;
  font-weigth: 600;
  text-align: center;
  text-color: color;
`

const Content = styled.div`
  grid-column:2/3
  display: grid;
  grid-template-columns: auto auto;
  place-content: center;
  place-items: center;
`

const Block = styled.div``

const Items = styled.ul`
  list-style: none;
`

const Item = styled.li`
  display: inline;
  margin:10px;
`
