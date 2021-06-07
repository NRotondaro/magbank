import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
    faMobileAlt,
    faMobile,
    faGlobe,
    faShieldAlt,
  } from "@fortawesome/free-solid-svg-icons";
import IconText from './IconText';
import "./Institutional.scss";

const Institutional = () => (
  <section className='institutional text-light py-5'>
    <Container>
      <Row>
        <Col xs={12} lg={5} />
        <Col xs={12} lg={7}>
          <h2 className='institutional-title my-5'>Já nascemos digital</h2>
          <p className='mb-5'>
            Ullamco non voluptate esse sint qui ex dolor eiusmod amet et sit
            aute. Incididunt in nulla proident reprehenderit laborum
            exercitation sint proident ad cupidatat esse voluptate amet est.
            Nulla pariatur aliquip irure sit. Aute reprehenderit nostrud ad
            minim ex amet sunt. Enim incididunt proident ipsum ipsum cupidatat
            ipsum consequat laboris.
          </p>
          <div className='px-2'>
            <IconText icon={faMobileAlt} size='2' color='#fff' className='mt-5'>
                Sem fila sem burocracia
            </IconText>
            <IconText icon={faMobile} size='2' color='#fff' className='mt-5'>
                Simples e prático
            </IconText>
            <IconText icon={faGlobe} size='2' color='#fff' className='mt-5'>
                Abertura de conta 100% online
            </IconText>
            <IconText icon={faShieldAlt} size='2' color='#fff' className='mt-5'>
                Transações mais seguras
            </IconText>
            <Button className='mt-5' variant="outline-light">
                Abra sua conta
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Institutional;
