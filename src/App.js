import React, { useEffect } from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap'
import UserA from './Components/UserA'
import UserB from './Components/UserB'
import UserC from './Components/UserC'
import MoveElevatorFloor from './Actions/MoveElevatorFloor'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    elevator: state.elevator,
    message: state.message
  }
}

const mapDispatchToProps = dispatch => {
  return {
    moveFloor: () => {
      dispatch(MoveElevatorFloor())
    }
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
  useEffect(() => {
    const interval = setInterval(() =>{
      console.log('This will run every second')
      props.moveFloor()
    }, 1000)
    return () => clearInterval(interval)
  }, [])
  return (
    <div className="App" style={bannerStyle()}>
      <Container>
        <Row d-flex="justify-content-center">
          <Col xs={{span:10, offset:1}} sm={{span: 6, offset: 4}} md={{ span: 4, offset:3 }} d-flex="justify-content-center">
              <Card>
                <Card.Body>
                  <Card.Title>
                    Currrent Floor: {props.elevator.floor} {props.elevator.direction}
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
        <Row d-flex="justify-content-center">
          <Col xs={{span:10, offset:1}} sm={{span: 6, offset: 4}} md={{ span: 4, offset:3 }} d-flex="justify-content-center">
          <h2 className="text-danger">{props.message}</h2>
          </Col>
        </Row>
      </Container>
      
    </div>
  );
}

export default connect(mapStateToProps,mapDispatchToProps)(App)