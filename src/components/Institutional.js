import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Institutional.scss";

const Institutional = () => (
  <section className='institutional text-light py-5'>
    <Container>
      <Row>
        <Col xs={12} lg={5} />
        <Col xs={12} lg={7}>
          <h2>Já nascemos digital</h2>
          <p>
            Ullamco non voluptate esse sint qui ex dolor eiusmod amet et sit
            aute. Incididunt in nulla proident reprehenderit laborum
            exercitation sint proident ad cupidatat esse voluptate amet est.
            Nulla pariatur aliquip irure sit. Aute reprehenderit nostrud ad
            minim ex amet sunt. Enim incididunt proident ipsum ipsum cupidatat
            ipsum consequat laboris.
          </p>
          <Button variant="outline-dark">Abra sua conta</Button>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Institutional;
