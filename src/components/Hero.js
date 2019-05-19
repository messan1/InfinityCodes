import React from "react"
import TypesIcons from "./TypesIcons"
import "./css/Hero.css"
import styled from 'styled-components'
import Myimage from '../images/wordpress.jpg'

const Hero = props => (
  <HeroDiv>
    <div className="Dark">
      <TypesIcons
        heigth={55}
        width={30}
        backColor={"blue"}
        color={"white"}
        TextColor={"white"}
      />
      <div className="CourseGroup">
        <div className="CourseTitle">
          {props.heroTitle}
        </div>
        <div className="author">Par {props.author}</div>
        <div className="date">{props.date}</div>
      </div>
    </div>
  </HeroDiv>
)
export default Hero

const HeroDiv = styled.div`
    grid-column: 2/3;
    width: 100%;
    background: url(${Myimage}) no-repeat;
    background-position: center;
    background-size: cover;
    height: 700px;
    position: relative;
    @media(max-width:652px){
      height: 400px;
    }
`
