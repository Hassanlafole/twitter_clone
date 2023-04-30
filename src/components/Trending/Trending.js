import React from "react";
import {
    Card,
    ListGroup,
    InputGroup,
    Form,
    Button,
} from "react-bootstrap";
export default function Trending() {
  // Let's create the trending section of twitter using React Bootstrap. show a search box and then a card with a list of trending topics with a title of "What's happening".
  return (
    <div style={{ padding: '30px' }}>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Search Twitter"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
              Search
            </Button>
          </InputGroup>
      <Card>
        <Card.Body>
          <Card.Title>What's happening</Card.Title>
          <ListGroup style={{ border: "none", fontWeight: 'bold' }}>
            <ListGroup.Item style={{ border: "none" }}>Cras justo odio</ListGroup.Item>
            <ListGroup.Item style={{ border: "none" }}>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item style={{ border: "none" }}>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item style={{ border: "none" }}>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item style={{ border: "none" }}>Vestibulum at eros</ListGroup.Item>
            </ListGroup>

        </Card.Body>
      </Card>
    </div>
  );
}
