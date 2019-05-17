import React from "react"
import TypesIcons from "./TypesIcons"
import "./css/Hero.css"
import styled from 'styled-components'

const Hero = () => (
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
          Vitae Nec Adipiscing Quis
          <br /> Semper Quam Tellus Nascetur
        </div>
        <div className="author">By Messan christian</div>
        <div className="date">December 2019</div>
      </div>
    </div>
  </HeroDiv>
)
export default Hero

const HeroDiv = styled.div`
    grid-column: 2/3;
    width: 100%;
    background: url("./images/ratl.jpg") no-repeat;
    background-position: center;
    background-size: cover;
    height: 700px;
    position: relative;
`
