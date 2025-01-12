import React from "react";
import { SocialIcon } from 'react-social-icons';
import '../styles/index.css';

const style = {
    position: 'relative',
    width: '100%',
    backgroundColor: '#0f3147',
    color: "#a8c4c7",
    textAlign: 'center',
    fontFamily: 'Tajawal, sans-serif',
}

const Footer = () => {
    return(
      <footer style={style}> 
          <SocialIcon style={{margin: "30px"}} target="_blank" url="https://github.com/AnnaReid22"></SocialIcon>
          <SocialIcon style={{margin: "30px"}} target="_blank" url="https://www.linkedin.com/in/anna-reid/"></SocialIcon>
          <SocialIcon style={{margin: "30px"}} target="_blank" bgColor="turquoise" url="https://sketchfab.com/anreid"></SocialIcon>
          <SocialIcon style={{margin: "30px"}} target="_blank" bgColor="lightBlue" url="https://www.youtube.com/channel/UCSDk4I3Y-g9aqUOOf66Ia5g"></SocialIcon>
          <div> Made by Anna :) </div>
      </footer>
  )
}
export default Footer;