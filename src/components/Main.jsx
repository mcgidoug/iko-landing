import React from "react";
import videoBg from "../assets/wallpaper1.mp4";
import { AiFillYoutube, AiFillInstagram } from "react-icons/ai";
import { FaSpotify, FaBandcamp, FaTwitch, FaTiktok } from "react-icons/fa";
import { SiApplemusic } from "react-icons/si";

const Main = () => {
  return (
    <div className="main">
      <video src={videoBg} autoPlay loop muted />
      {/* main page title */}
      <div className="content">
        <h1>IKOSEVETA</h1>
        {/* links container */}
        <div className="links">
          <a
            className="link"
            href="https://www.youtube.com/channel/UCit-UuOFYPtdx44cjIaPTUg"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillYoutube />
          </a>
          <a
            className="link"
            href="https://www.instagram.com/ikoseveta/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillInstagram />
          </a>
          <a
            className="link"
            href="https://open.spotify.com/artist/0EAqN6YKRxw7Hfu0UkTAAC"
            target="_blank"
            rel="noreferrer"
          >
            <FaSpotify />
          </a>
          <a
            className="link"
            href="https://ikoseveta.bandcamp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaBandcamp />
          </a>
          <a
            className="link"
            href="https://www.twitch.tv/ikoseveta"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitch />
          </a>
          <a
            className="link"
            href="https://www.tiktok.com/@ikoseveta"
            target="_blank"
            rel="noreferrer"
          >
            <FaTiktok />
          </a>
          <a
            className="link"
            href="https://music.apple.com/us/artist/ikoseveta/1455868222"
            target="_blank"
            rel="noreferrer"
          >
            <SiApplemusic />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;
