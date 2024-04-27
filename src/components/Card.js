import React from 'react';
import { Card, Col, Container } from 'react-bootstrap';
import weatherappImage from '../assets/img/weatherapp.png';
import '../App.css';

function WeatherAppCard() {
    const handleCardClick = () => {
        window.open("https://weather.shouxdev.hu", "_blank");
    };

    return (
        <Container>
            <Col >
                <Card
                    className="weather-app-card"
                    onClick={handleCardClick}
                >
                    <Card.Img
                        variant="top"
                        src={weatherappImage}
                        alt="Weather App"
                        className="card-image"
                    />
                    <Card.Body>
                        <Card.Text className="card-description">
                            This is my weather app project. It allows users to check the weather forecast for different locations.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Container>
    );
}

export default WeatherAppCard;
