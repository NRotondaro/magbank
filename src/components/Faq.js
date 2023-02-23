import React, { useState } from "react";
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faWallet,
  faShieldAlt,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import IconText from "./IconText";
import "./Faq.scss";

const Faq = () => {
  const options = [
    { icon: faCreditCard, text: "Cartão de crédito e débito" },
    { icon: faWallet, text: "Conta e abertura" },
    { icon: faShieldAlt, text: "Token digital" },
    { icon: faUserTie, text: "Produtos e serviços" },
  ];

  const [index, setIndex] = useState(0);

  const handleClick = (key) => {
    setIndex(key);
  };

  return (
    <section className="faq text-light">
      <Container className="faq py-5">
        <Row className="justify-content-center">
          <h2 className="faq-title my-5 mx-auto">Dúvidas frequentes</h2>
        </Row>
        <Row className="align-items-center justify-items-center">
          <Col className="d-lg-none mb-5" xs={12}>
            <Row>
              {options.map(({ icon }, key) => (
                <Col className="d-flex justify-content-center" key={key}>
                  <FontAwesomeIcon
                    icon={icon}
                    size="2x"
                    color={key === index ? "#fff" : "#bbb"}
                    onClick={() => handleClick(key)}
                  />
                </Col>
              ))}
            </Row>
            <Row className="justify-content-center mt-5">
              <p className="lead">{options[index].text}</p>
            </Row>
          </Col>

          <Col className="d-none d-lg-block">
            {options.map(({ icon, text }, key) => (
              <IconText
                icon={icon}
                size={3}
                className="mb-3"
                textClassName="lead"
                color={key === index ? "#fff" : "#bbb"}
                onClick={() => handleClick(key)}
                key={key}
              >
                {text}
              </IconText>
            ))}
          </Col>

          <Col>
            <Accordion defaultActiveKey="0" activeKey={`${index}`}>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  Lorem ipsum dolor sit amet
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    Irure nisi nulla aliquip nostrud ipsum cillum et enim Lorem
                    incididunt do laboris. Enim veniam officia ut anim
                    consectetur est dolor officia sint dolore pariatur nisi
                    anim. Reprehenderit officia ad eu ad magna laboris eiusmod
                    nulla id proident. In officia minim cupidatat aliquip do
                    duis.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  Enim aliquip do labore eiusmod tempor ad.
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    Labore culpa magna consectetur sit labore commodo ipsum esse
                    ullamco enim. Dolore in eiusmod ea sit irure qui excepteur
                    cillum occaecat qui sint nulla. Voluptate commodo est
                    exercitation veniam veniam qui laborum irure culpa veniam
                    aute.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                  Laborum fugiat Lorem culpa elit incididunt id esse tempor.
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    Labore culpa magna consectetur sit labore commodo ipsum esse
                    ullamco enim. Dolore in eiusmod ea sit irure qui excepteur
                    cillum occaecat qui sint nulla. Voluptate commodo est
                    exercitation veniam veniam qui laborum irure culpa veniam
                    aute.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="3">
                  Eu commodo magna ut tempor deserunt magna officia mollit.
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    Labore culpa magna consectetur sit labore commodo ipsum esse
                    ullamco enim. Dolore in eiusmod ea sit irure qui excepteur
                    cillum occaecat qui sint nulla. Voluptate commodo est
                    exercitation veniam veniam qui laborum irure culpa veniam
                    aute.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Faq;
