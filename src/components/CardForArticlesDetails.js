import React from "react"
import "./css/CardForArticlesDetails.css"
import TypesIcons from "./TypesIcons"
import styled from "styled-components"

const CardForArticlesDetails = props => {
  return (
    <div className="CardContent1">
      <CardImg>
        <div className="DarKCard1" />
      </CardImg>
      
      <div className="SumGroup1">
      <TypesIcons
      heigth={30}
      width={30}
      backColor={"blue"}
      color={"white"}
      TextColor={"#847E7E"}
    />
        <h2>Sapien Lorem Libero Augue Tincidunt</h2>
        <div className="CardInfo1">
          <p className="CardAuthor1">
            By <strong>Messan Christian</strong>
          </p>
          <p className="CardDate1">December 2019</p>
        </div>
      </div>
    </div>
  )
}

export default CardForArticlesDetails

const CardImg = styled.div`
background:gray;
background-position: left;
background-size: cover;
width: 100%;
height:192px;
border-radius: 5px;
position: sticky;

`