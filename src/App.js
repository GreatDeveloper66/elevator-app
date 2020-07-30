import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Container>
        <Row d-flex="justify-content-center">
          <Col xs={{span:10, offset:1}} sm={{span: 4, offset: 4}} md={{ span: 6, offset:3 }} d-flex="justify-content-center">
              Greetings!!
          </Col>

        </Row>
        
      </Container>
      
    </div>
  );
}

export default App;
