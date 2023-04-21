import React from "react";
import "../Styles/Avatar.css";

const Avatar= (props) => {
  return (
    <div className={props.classMin==="true" ? "circular-image-container2" :"circular-image-container"}>
      <img src={props.src} alt={props.alt} className="circular-image" />
    </div>
  );
}

export default Avatar;
