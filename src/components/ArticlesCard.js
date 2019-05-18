import React from "react"
import "./css/ArticlesCard.css"
import TypesIcons from "./TypesIcons"
import styled from "styled-components"
import { Link } from "gatsby"
const slugify = require("@sindresorhus/slugify")
const HandleImage = name => {
  return require(`../images/wordpress/${name}.jpg`)
}

const ArticlesCard = props => (
  <div className="CardContent">
    <TypesIcons
      heigth={30}
      width={30}
      backColor={"blue"}
      color={"white"}
      TextColor={"#847E7E"}
    />
    <CardImg img={HandleImage(slugify(props.title))}>
      <Link to={props.link} state={{ title: props.title }}>
        <div className="DarKCard" />
      </Link>
    </CardImg>
    <div className="SumGroup">
      <Link to={props.link} state={props.title}>
        <h2>{props.title}</h2>
      </Link>
      <div className="CardInfo">
        <p className="CardAuthor">
          By <strong>{props.author}</strong>
        </p>
        <p className="CardDate">{props.date}</p>
      </div>
    </div>
  </div>
)

export default ArticlesCard

const CardImg = styled.div`
  background: url(${props => props.img});
  background-position: left;
  background-size: cover;
  width: 100%;
  height: 192px;
  border-radius: 5px;
  position: sticky;

  :hover .DarKCard {
    background-color: black;
    transition: 0.2s cubic-bezier(0.1, 0.8, 0.2, 1);
  }
`
