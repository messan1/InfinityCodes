import React from "react"
import TypesIcons from "./TypesIcons"
import "./css/HeroArticles.css"

const Hero = () => (
  <div className="Hero1">
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
          Vitae Nec Adipiscing Quis
          <br /> Semper Quam Tellus Nascetur
        </div>
        <div className="author1">By Messan christian</div>
        <div className="date1">December 2019</div>
      </div>
    </div>
  </div>
)
export default Hero
