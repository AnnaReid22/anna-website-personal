import React from "react";
import { SocialIcon } from 'react-social-icons';
import '../index.css';

const style = {
    position: 'relative',
    width: '100%',
    backgroundColor: '#EBA4A6',
    color: 'white',
    textAlign: 'center',
    padding:"5px"
}

class Footer extends React.Component {
  render() {
    return(
      <div style={style}> 
          <SocialIcon style={{margin: "30px"}} target="_blank" url="https://github.com/AnnaReid22"></SocialIcon>
          <SocialIcon style={{margin: "30px"}} target="_blank" url="https://www.linkedin.com/in/anna-reid/"></SocialIcon>
          <SocialIcon style={{margin: "30px"}} target="_blank" network="email" url="mailto:reid.anna.m@gmail.com"></SocialIcon>
          <p> Made by Anna Reid :) </p>
      </div>
  )
  }
}
export default Footer;