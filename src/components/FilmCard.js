import React from "react";
import Card from 'react-bootstrap/Card';
import {Row, Col, Container} from 'react-bootstrap';

class FilmCard extends React.Component {
  render() {
    return (
        <>
            <Container style={{width:"100%"}}>
                <Card style={{background: '#f4f4f4', marginBottom: "10px"}}>
                <Row>
                    <Col>
                        <Card.Img variant="top" src={this.props.image}/>
                    </Col>
                    <Col xs={8}>
                        <Card.Body>
                            <Card.Title className="text-muted"><h1>{this.props.film}</h1></Card.Title>
                            <p>{this.props.reviewp1}</p>
                            <p>{this.props.reviewp2}</p>
                            <p>{this.props.reviewp3}</p>
                            <p>{this.props.reviewp4}</p>
                            <p>{this.props.reviewp5}</p>
                        </Card.Body>
                    </Col>
                </Row>
                <Card.Footer>
                    <div style={{textAlign: "center"}}>
                        <small>Written: {this.props.date}</small>
                    </div>
                    <div style={{textAlign: "center"}}>
                        <small>Image: {this.props.url}</small>
                    </div>
                </Card.Footer>
                </Card>
            </Container>
        </>
    )
  }
}

export default FilmCard