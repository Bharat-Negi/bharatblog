import React from "react";
import { Button, Card } from "react-bootstrap";

export default function CardPage(props:any) {
  return (
    <Card>
      {/* Optional: set a width */}
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      {/* Optional: image */}
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <p>{props.email}</p>
        <p></p>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Edit</Button>
        {/* Optional: button */}
      </Card.Body>
    </Card>
  );
}
