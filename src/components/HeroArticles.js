import React, { Component } from "react"
import TypesIcons from "./TypesIcons"
import "./css/HeroArticles.css"
import styled from "styled-components"
import img from '../images/wordpress/les-plugins-extensions.jpg'




const Hero = props => {
  console.log("onPreRouteUpdate");
  return (
    <HeroDiv img={img}>
      <div className="Dark1">
        <div className="IconsGroup1">
          <TypesIcons
            heigth={55}
            width={30}
            backColor={"blue"}
            color={"white"}
            TextColor={"white"}
          />
        </div>
        <div className="CourseGroup1">
          <div className="CourseTitle1">{props.title}</div>
          <div className="author1">Par {props.author}</div>
          <div className="date1">{props.date}</div>
        </div>
      </div>
    </HeroDiv>
  )
}

export default Hero

const HeroDiv = styled.div`
  grid-column: 2/3;
  width: 100%;
  background: url(${props => props.img}) no-repeat;
  background-position: center;
  background-size: cover;
  height: 700px;
  position: relative;
`
