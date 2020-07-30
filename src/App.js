import React from 'react';
import { Container, Row, Col, Card, ListGroup, ListGroupItem, Input } from 'react-bootstrap'
import UserA from './Components/UserA'
import UserB from './Components/UserB'
import UserC from './Components/UserC'

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
                    <UserA />
                    <UserB />
                    <UserC />
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
