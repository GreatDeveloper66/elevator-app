import React from 'react';
import { Container, Row, Col, Card, ListGroup, ListGroupItem, Input } from 'react-bootstrap'
import UserA from './Components/UserA'
import UserB from './Components/UserB'
import UserC from './Components/UserC'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    elevator: state.elevator
  }
}
const bannerStyle = () => ({
  backgroundImage: `url(${require(`./Images/city_skyscraper.jpg`)})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  height: '100vh',
  width: '100vw',
  overflowY: 'hidden'
})
function App(props) {
  return (
    <div className="App" style={bannerStyle()}>
      <Container>
        <Row d-flex="justify-content-center">
          <Col xs={{span:10, offset:1}} sm={{span: 6, offset: 4}} md={{ span: 4, offset:3 }} d-flex="justify-content-center">
              <Card>
                <Card.Body>
                  <Card.Title>
                    Currrent Floor: {props.elevator.Floor} {props.elevator.Direction}
                  </Card.Title>
                 

                </Card.Body>
                <Card.Img variant="bottom" src={require("./Images/elevator_wide.jpg")}>

                </Card.Img>
                <Card.Body>
                <ListGroup className="list-group-flush">
                    <UserA />
                    <UserB />
                    <UserC />
                  </ListGroup>
                </Card.Body>
              </Card>
          </Col>

        </Row>
        
      </Container>
      
    </div>
  );
}

export default connect(mapStateToProps,null)(App)