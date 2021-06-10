import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap";

const AccountModal = ({ show, handleClose, auth }) => {
  const history = useHistory();
  const [name, setName] = useState();

  const handleSubmit = () => {
    auth.login(name, "12345", history.push("/dashboard"));
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Abra sua conta</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Seu nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Seu e-mail</Form.Label>
            <Form.Control type="email" placeholder="Seu e-mail" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formCity">
            <Form.Label className="my-1" htmlFor="formCity">
              Sua cidade
            </Form.Label>
            <Form.Control as="select" className="my-1" id="formCitySelect">
              <option value="0">Florianópolis - SC</option>
              <option value="1">Curitiba - PR</option>
              <option value="2">São Paulo - SP</option>
              <option value="3">Rio de Janeiro - RJ</option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Check
              type="checkbox"
              label="Eu li e concordo com os termos de uso."
            />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Criar Conta
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AccountModal;
