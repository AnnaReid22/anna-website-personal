import React from "react";
import { SocialIcon } from 'react-social-icons';
import '../styles/index.css';

const style = {
    position: 'relative',
    width: '100%',
    backgroundColor: '#0f3147',
    color: "#a8c4c7",
    textAlign: 'center',
    padding:"5px",
    fontFamily: 'Tajawal, sans-serif',
}

const Footer = () => {
    return(
      <footer style={style}> 
          <SocialIcon style={{margin: "30px"}} target="_blank" url="https://github.com/AnnaReid22"></SocialIcon>
          <SocialIcon style={{margin: "30px"}} target="_blank" url="https://www.linkedin.com/in/anna-reid/"></SocialIcon>
          <SocialIcon style={{margin: "30px"}} target="_blank" url="https://www.flickr.com/photos/150186457@N06/"></SocialIcon>
          <SocialIcon style={{margin: "30px"}} target="_blank" bgColor="turquoise" url="https://sketchfab.com/anreid"></SocialIcon>
          <SocialIcon style={{margin: "30px"}} target="_blank" bgColor="lightBlue" url="https://www.youtube.com/channel/UCSDk4I3Y-g9aqUOOf66Ia5g"></SocialIcon>
          <SocialIcon style={{margin: "30px"}} target="_blank" bgColor="white" url="https://medium.com/@reid.anna"></SocialIcon>
          <SocialIcon style={{margin: "30px"}} target="_blank" network="email" url="mailto:reid.anna.m@gmail.com"></SocialIcon>
          <div> Made by Anna Reid :) </div>
      </footer>
  )
}
export default Footer;