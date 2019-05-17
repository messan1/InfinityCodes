import React from "react"
import Image404 from "../images/404.png"
import "../components/css/404.css"
import Header from "../components/Header"

const NotFoundPage = () => (
  <div className="all404Content">
    <Header />
    <div className="I404Content">
      <img className="I404Image" src={Image404} />
      <div className="I404Text">
        <h1>404</h1>
        <h2>Il semble que vous soyez Perdu</h2>
      </div>
    </div>
  </div>
)

export default NotFoundPage
