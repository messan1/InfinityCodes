import React from "react"
import "./css/ArticlesCard.css"
import TypesIcons from "./TypesIcons"

const ArticlesCard = () => (
  <div className="CardContent">
    <TypesIcons
      heigth={30}
      width={30}
      backColor={"blue"}
      color={"white"}
      TextColor={"#847E7E"}
    />
    <div className="CardImg">
      <div className="DarKCard" />
    </div>
    <div className="SumGroup">
      <h2>Sapien Lorem Libero Augue Tincidunt</h2>
      <div className="CardInfo">
        <p className="CardAuthor">
          By <strong>Messan Christian</strong>
        </p>
        <p className="CardDate">December 2019</p>
      </div>
      <p>
        Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor
        pretium donec dictum. Vici consequat justo enim.…
      </p>
    </div>
  </div>
)

export default ArticlesCard
