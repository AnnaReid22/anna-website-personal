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
            <Container style={{marginTop:"50px"}}>
                <Card style={{background: '#f4f4f4', marginBottom: "20px"}}>
                    <h1 style={{marginTop:"50px"}}>{this.props.title}</h1>
                    <Container style={{paddingLeft:"30%", paddingRight:"30%"}}>
                        <div>
                            <Slider {...settings}>
                                <div>
                                    <img width="100%" src={this.props.image1} alt="img1"></img>
                                </div>
                                <div>
                                    <img width="100%" src={this.props.image2} alt="img2"></img>
                                </div>
                                <div>
                                    <img width="100%" src={this.props.image3} alt="img3"></img>
                                </div>
                            </Slider>
                        </div>
                    </Container>
                    <Row>
                        <Col>
                            <Card.Body>
                                <Card.Title className="text-muted"><h1>{this.props.film}</h1></Card.Title>
                                <p>{this.props.description}</p>
                            </Card.Body>
                        </Col>
                    </Row>
                        <Card.Footer>
                            <div style={{textAlign: "center"}}>
                                <small>{this.props.date}</small>
                            </div>
                        </Card.Footer>
                </Card>
            </Container>
        </>
    )
  }
}
export default PortfolioCard