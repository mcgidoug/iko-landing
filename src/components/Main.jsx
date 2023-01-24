import React from "react";
import videoBg from "../assets/wallpaper1.mp4";

const Main = () => {
  return (
    <div className="main">
      <video src={videoBg} autoPlay loop muted />
      <div className="content">IKOSEVETA</div>
    </div>
  );
};

export default Main;
