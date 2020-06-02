// Write your Character component here
import React, { useState } from 'react';
import {
  Card, Collapse, CardBody,
  CardTitle, CardSubtitle, Button,
  ListGroup, ListGroupItem
} from 'reactstrap';

const Character = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="d-flex justify-content-center align-items-center mb-4">
      <Card className="character-card" style={{ width: '300px', height: '325px' }}>
        <CardBody>
          <CardTitle className="font-weight-bold">{props.info.name}</CardTitle>
          <CardSubtitle>Born: {props.info.birth_year}</CardSubtitle>
          <Button outline color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>
            {isOpen ? 'Click here to close info' : 'Click for more info'}
          </Button>
          <Collapse isOpen={isOpen}>
          <ListGroup flush>
            <ListGroupItem>Eye Color: {props.info.eye_color}</ListGroupItem>
            <ListGroupItem>Hair Color: {props.info.hair_color}</ListGroupItem>
            <ListGroupItem>Height: {props.info.height} cm</ListGroupItem>
            <ListGroupItem>Mass: {props.info.mass} kg</ListGroupItem>
          </ListGroup>
          </Collapse>
        </CardBody>
      </Card>
    </div>
  );
};

export default Character;