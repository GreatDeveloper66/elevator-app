import React from 'react';
import { Container, Row, Col, Card, ListGroup, ListGroupItem, Input } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Container>
        <Row d-flex="justify-content-center">
          <Col xs={{span:10, offset:1}} sm={{span: 4, offset: 4}} md={{ span: 6, offset:3 }} d-flex="justify-content-center">
              <Card>
                <Card.Body>
                  <Card.Title>
                    Currrent Floor: 1
                  </Card.Title>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>User A: Floor 4 </ListGroupItem>
                    <ListGroupItem><input type="number"></input></ListGroupItem>
                    <ListGroupItem>User B: Floor 4</ListGroupItem>
                    <ListGroupItem><input type="number"></input></ListGroupItem>
                    <ListGroupItem>User C: Floor 6</ListGroupItem>
                    <ListGroupItem><input type="number"></input></ListGroupItem>
                  </ListGroup>

                </Card.Body>
                <Card.Img variant="bottom" src="#">

                </Card.Img>
              </Card>
          </Col>

        </Row>
        
      </Container>
      
    </div>
  );
}

export default App;
