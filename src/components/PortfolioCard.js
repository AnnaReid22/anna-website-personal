import React from "react";
import Card from 'react-bootstrap/Card';
import {Row, Container} from 'react-bootstrap';
import { FaLink } from 'react-icons/fa';
import "../styles/portfolioCard.css";

const PortfolioCard = (props) => {
    return (
        <>
            <Container style={{marginTop:"50px"}} className="card-one">
                <Card style={{backgroundColor: 'transparent', marginBottom: "20px", padding: "15px", minHeight: "600px"}}>
                    <h1 style={{marginTop:"50px"}}>{props.title}</h1>
                    <Container>
                        <img width="100%" maxHeight="100%" src={props.image1} text-align="center" alt="img1"></img>
                    </Container>
                    <Row>
                        <Card.Body>
                            <p>{props.description}</p>
                            <div style={{textAlign: "center"}}>
                                <small>{props.date}</small>
                                {props.link ? <a href={props.link} style={{marginLeft: '15px'}} 
                                                 target="_blank"
                                                 rel="noopener noreferrer"><FaLink /></a> : null}
                            </div>
                            
                        </Card.Body>
                    </Row>
                </Card>
            </Container>
        </>
    )
}

export default PortfolioCard