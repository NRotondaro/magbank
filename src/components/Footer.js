import React from 'react';
import { Container, Row, Col, Image} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import logo from '../assets/magbank.png';
import applestore from '../assets/applestore.png';
import googleplay from '../assets/googleplay.png';

import './Footer.scss';


const Footer = () => (
    <footer className='footer'>
        <Container>
            <Row className='text-center py-5'>
                <Col xs={12} lg={6} className='text-lg-left mb-3'>
                    <Image src={logo} />
                </Col>
                <Col xs={12} lg={4} className='mb-3'>
                    <Image src={applestore} />
                    <Image src={googleplay} className='ml-2'/>
                </Col>
                <Col xs={12} lg={2} className='d-flex align-items-center justify-content-center'>
                    <a href='http://facebook.com/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                    <FontAwesomeIcon icon={faFacebookSquare} color='#7c7c7c' size='2x'/>
                    </a>
                    <a href='http://twitter.com/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                    <FontAwesomeIcon icon={faTwitter} color='#7c7c7c' size='2x' className='ml-2'/>

                    </a>
                    <a href='http://youtube.com/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                    <FontAwesomeIcon icon={faYoutube} color='#7c7c7c' size='2x' className='ml-2'/>

                    </a>
                </Col>
            </Row>
        </Container>
    </footer>
);

export default Footer;