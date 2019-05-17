import React from "react"
import "./css/CardForArticlesDetails.css"
import TypesIcons from "./TypesIcons"

const CardForArticlesDetails = props => {
  return (
    <div className="CardContent1">
      <div className="CardImg">
        <div className="DarKCard1" />
      </div>
      
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
        <p>
          Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor
          pretium donec dictum. Vici consequat justo enim.…
        </p>
      </div>
    </div>
  )
}

export default CardForArticlesDetails
