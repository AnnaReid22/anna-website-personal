import React from "react";
import Card from 'react-bootstrap/Card';
import {Row, Col, Container} from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class PortfolioCard extends React.Component {
  render() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return (
        <>
            <Container style={{marginTop:"50px"}} className="card-one">
                <Card style={{backgroundColor: 'transparent', marginBottom: "20px"}}>
                    <h1 style={{marginTop:"50px"}}>{this.props.title}</h1>
                    <Container style={{paddingLeft:"10%", paddingRight:"10%"}}>
                        <div>
                            <Slider {...settings}>
                                <img width="100%" src={this.props.image1} alt="img1"></img>
                                <img width="100%" src={this.props.image2} alt="img2"></img>
                                <img width="100%" src={this.props.image3} alt="img3"></img>
                            </Slider>
                        </div>
                    </Container>
                    <Row>
                        <Card.Body>
                            <Card.Title className="text-muted"><h3>{this.props.film}</h3></Card.Title>
                            <p>{this.props.description}</p>
                            <div style={{textAlign: "center"}}>
                                <small>{this.props.date}</small>
                            </div>
                        </Card.Body>
                    </Row>
                </Card>
            </Container>
        </>
    )
  }
}
export default PortfolioCard