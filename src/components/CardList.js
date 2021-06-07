import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./CardList.scss";

const CardList = ({ posts }) => (
  <Container>
    <Row>
      {posts && posts.map((post) => (
        <Col xs={12} lg={4} key={post.id}>
          <Card className="mx-auto my-3">
            <Card.Img variant="top" src={post.image} />
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>{post.excerpt}</Card.Text>
              <Button variant="danger">{post.action}</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default CardList;
