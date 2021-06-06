import React from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconText = ({
  icon,
  size = 1,
  color = "#000",
  className = "",
  children,
}) => (
  <Row>
    <Col xs={2} className="d-flex justify-content-center">
      <FontAwesomeIcon icon={icon} size={size} color={color} />
    </Col>
    <Col xs={10} className={className}>
      {children}
    </Col>
  </Row>
);

export default IconText;
