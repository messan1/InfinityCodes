import React from "react"
import TypesIcons from "./TypesIcons"
import "./css/Hero.css"

const Hero = () => (
  <div className="Hero">
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
)
export default Hero
