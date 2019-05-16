import React, { Component } from "react"
import "./css/TypesIcons.css"

const TypesIcons = props => {
    const {height,width,backColor,color,TextColor} = props
  return (
    <div className="TypesIconsGroup">
      <div
        className="SmallIcon"
        style={{
          width: width,
          height: height,
          backgroundColor: backColor,
          color: color,
        }}
      >
        W
      </div>
      <div className="Lines" />
      <div className="Typeof" style={{ color:TextColor}}>
        Wordpress
      </div>
    </div>
  )
}
export default TypesIcons
