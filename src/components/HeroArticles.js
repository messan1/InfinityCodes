import React ,{Component} from "react"
import TypesIcons from "./TypesIcons"
import "./css/HeroArticles.css"
import styled from "styled-components"
const slugify = require("@sindresorhus/slugify")


class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      location:window.location.pathname
     };
  }
  render() {
    const HandleImage = name => {
      return require(`../images/wordpress/${name}.jpg`)
    }
    
    const HandlePath = location =>{
      var path ="";
      for (let i=1;i<location.length;i++){
        path+=location[i];
      }
      return path
    }
    
    var myPath = window.location.pathname;
    return (
      <HeroDiv img={HandleImage(slugify(HandlePath(this.state.location)))}>
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
            {this.props.title}
          </div>
          <div className="author1">Par {this.props.author}</div>
          <div className="date1">{this.props.date}</div>
        </div>
      </div>
    </HeroDiv>
    );
  }
}

export default Hero;



const HeroDiv = styled.div`
  grid-column: 2/3;
  width: 100%;
  background: url(${props => props.img}) no-repeat;
  background-position: center;
  background-size: cover;
  height: 700px;
  position: relative;
`
