import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faUser } from "@fortawesome/free-solid-svg-icons";

import AccountBalance from "../components/AccountBalance";
import AccountPayments from "../components/AccountPayments";
import AccountHistory from "../components/AccountHistory";

import "./Dashboard.scss";

const Dashboard = () => {
  const [activeLink, setActiveLink] = useState(0);

  const links = [
    { text: "Minha conta", path: "/dashboard" },
    { text: "Pagamentos", path: "/dashboard/payments" },
    { text: "Extrato", path: "/dashboard/history" },
  ];

  const data = {
    latestBalance: [
      { date: "22/07", description: "SAQUE 24H 012345", value: "300,00" },
      { date: "21/07", description: "SUPERMERCADO 54354", value: "275,00" },
      { date: "20/07", description: "NETFLIX 315456", value: "30,00" },
      { date: "15/07", description: "FARMÁCIA 6656554", value: "350,00" },
    ],
    futureBalance: [
      { date: "22/07", description: "SALÁRIO 012345", value: "3000,00" },
      { date: "21/07", description: "IMAGINE 54354", value: "275,00" },
      { date: "20/07", description: "NETFLIX 315456", value: "30,00" },
      { date: "15/07", description: "FARMÁCIA 6656554", value: "350,00" },
    ],
    history: [
      {
        date: "17/07",
        description: "SAQUE 24H 012345",
        value: "200,00-",
        balance: "",
      },
      {
        date: "17/07",
        description: "SALDO DO DIA",
        value: "",
        balance: "2.780,00",
      },
      {
        date: "19/07",
        description: "ESTACIONAMENTO 12321",
        value: "12,00-",
        balance: "",
      },
      {
        date: "19/07",
        description: "INTERNET 18653",
        value: "450,00-",
        balance: "",
      },
      {
        date: "19/07",
        description: "SALDO DO DIA",
        value: "",
        balance: "2.318,00",
      },
      {
        date: "21/07",
        description: "SUPERMERCADO 32165",
        value: "275,90-",
        balance: "",
      },
      {
        date: "21/07",
        description: "ESTACIONAMENTO 16812",
        value: "12,00-",
        balance: "",
      },
      {
        date: "21/07",
        description: "SHOPPING 16812",
        value: "180,00-",
        balance: "",
      },
      {
        date: "21/07",
        description: "SALDO DO DIA",
        value: "",
        balance: "1.851,00",
      },
      {
        date: "22/07",
        description: "SUPERMERCADO 168468",
        value: "275,90-",
        balance: "",
      },
    ],
  };

  return (
    <Container className="dashboard py-5">
      <Row>
        <Col xs={12} lg={4}>
          <Row className="align-items-center mb-5">
            <Col xs={3}>
              <span className="dashboard__user-avatar">
                <FontAwesomeIcon icon={faCircle} size="5x" color="#f8f9fa" />
                <FontAwesomeIcon
                  className="dashboard__user-icon"
                  icon={faUser}
                  size="3x"
                  color="#7c7d7d"
                />
              </span>
            </Col>
            <Col xs={9}>
              <h4>Nikson Rotondaro</h4>
              <p className="text-muted">ag: 1234 c/c: 4321-5</p>
            </Col>
          </Row>
          {links.map(({ text, path }, key) => (
            <Link className="dashboard__link" to={path} key={key}>
              <Button
                className={`dashboard__button text-left ${
                  key === activeLink ? " dashboard__button--active " : ""
                }`}
                variant="link"
                size="lg"
                block
                onClick={() => setActiveLink(key)}
              >
                {text}
              </Button>
            </Link>
          ))}
        </Col>
        <Switch>
          <Route path="/dashboard/history">
            <AccountHistory data={data} />
          </Route>
          <Route path="/dashboard/payments">
            <AccountPayments />
          </Route>
          <Route path="/dashboard">
            <AccountBalance data={data} />
          </Route>
        </Switch>
      </Row>
    </Container>
  );
};

export default Dashboard;
