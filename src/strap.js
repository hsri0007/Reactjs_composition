import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const Strap = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios.get("cate.php").then((res) => setState(res.data));
  }, []);
  // "proxy": "http://vaishnaviventures.com/temp2/temp",
  return (
    <Container>
      <Row>
        {state.map((res) => (
          <Col className="mb-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={`http://vaishnaviventures.com/temp2/temp/${res.cat_image}`}
              />
              <Card.Body>
                <Card.Title>{res.cat_name}</Card.Title>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Strap;
