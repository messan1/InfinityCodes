import React from "react"
import TypesIcons from "./TypesIcons"
import "./css/HeroArticles.css"
import styled from "styled-components"

const slugify = require("@sindresorhus/slugify")

const HandleImage = name => {
  return require(`../images/wordpress/${name}.jpg`)
}

const Hero = props => (
  <HeroDiv img={HandleImage(slugify(props.title))}>
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
        <div className="CourseTitle1">
          {props.title}
        </div>
        <div className="author1">By {props.author}</div>
        <div className="date1">{props.date}</div>
      </div>
    </div>
  </HeroDiv>
)
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
