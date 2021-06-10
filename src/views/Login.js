import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Row, Col, Form, Image, Button } from "react-bootstrap";
import logo from "../assets/magbank.svg";

import "./Login.scss";

const Login = ({ text, auth }) => {

  const [name, setName] = useState();
  const [account, setAccount] = useState();
  const history = useHistory();

  const handleClick = () => {
    auth.login(name, account, history.push('/dashboard'));
  }

  return (
  <section className="login">
    <div className="login__container">
      <Row>
        <Col className="text-center text-light">
          <Image src={logo} className="mb-5" />
          <Form>
            <Form.Group controlId="formBasicEName">
              <Form.Label className="lead">
                <b>Nome e sobrenome</b>
              </Form.Label>
              <Form.Control type="text" value={name} onChange={(e) => setName(e.currentTarget.value)} />
            </Form.Group>

            <Form.Group  controlId="formBasicAccount">
              <Form.Label className="lead">
                <b>Número da conta</b>
              </Form.Label>
              <Form.Control type="number" value={account} onChange={(e) => setAccount(e.currentTarget.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="lead">
                <b>Senha</b>
              </Form.Label>
              <Form.Control type="password" />
            </Form.Group>

            <Button className='mt-3' variant="success" type="submit" onClick={handleClick}>
              Entrar
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  </section>
)};

export default Login;
