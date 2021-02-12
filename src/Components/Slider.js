
import React from 'react';
import { Carousel } from 'react-bootstrap';
import photo1 from '../images/photo1.jpg';
import photo2 from '../images/photo2.jpg';
import photo3 from '../images/photo3.jpg';
import photo4 from '../images/photo4.jpg';
import photo5 from '../images/photo5.jpg';

export default function Slider(){
    return (
        <Carousel>
            <Carousel.Item style={{'height': '900px'}}>
                <img
                    className="d-block w-100"
                    src={photo1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item style={{'height': '900px'}}>
                <img
                    className="d-block w-100"
                    src={photo2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item style={{'height': '900px'}}>
                <img
                    className="d-block w-100"
                    src={photo3}
                    alt="third slide"
                />
            </Carousel.Item>
            <Carousel.Item style={{'height': '900px'}}>
                <img
                    className="d-block w-100"
                    src={photo4}
                    alt="Fourth slide"
                />
            </Carousel.Item>
            <Carousel.Item style={{'height': '900px'}}>
                <img
                    className="d-block w-100"
                    src={photo5}
                    alt="Fifth slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}