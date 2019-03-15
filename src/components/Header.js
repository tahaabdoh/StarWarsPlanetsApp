import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <Col className="justify-content-center align-self-center header" sm={6}>
            <div className="left-panel text-center">
                <Link to={'/#'}> <img className="logo" alt="starwars" src="../images/star-wars.svg" />
                </Link>
                <h4 className="title">Planets </h4>
                <div className="desc">
                    Reactjs application using swapi.co
                </div>
            </div>
        </Col>


    )
}

export default Header;