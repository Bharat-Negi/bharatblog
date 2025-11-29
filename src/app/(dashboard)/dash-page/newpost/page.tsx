import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";

export default function newPost() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h3>New Post Table</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>
                  <div className="d-flex gap-2">
                    <i className="bi bi-pencil-square"></i>
                    <i className="bi bi-trash3"></i>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}
