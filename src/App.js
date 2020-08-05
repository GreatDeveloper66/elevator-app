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
          <Col xs={{span:12}} sm={{span: 8, offset: 4}} md={{ span: 5, offset:4 }} lg={{span: 4, offset: 4}} d-flex="justify-content-center">
              <Card>
              <Card.Img src={require("./Images/elevator_wide.jpg")} />
              <Card.ImgOverlay>
                <Card.Body>
                  <Card.Title>
                    <h3 className="text-danger">Currrent Floor: {props.elevator.floor} {props.elevator.direction}</h3>
                  </Card.Title>
                </Card.Body>
                </Card.ImgOverlay>
                

                
                <Card.Body>
                <ListGroup className="list-group-flush">
                    <UserA />
                    <UserB />
                    <UserC />
                  </ListGroup>
                  <Card.Text>
                  <h4 className="text-danger">{props.message}</h4>
                  </Card.Text>
                </Card.Body>
                
              </Card>
          </Col>

        </Row>
        <Row d-flex="justify-content-center">
          <Col xs={{span:10, offset:1}} sm={{span: 6, offset: 4}} md={{ span: 4, offset:3 }} d-flex="justify-content-center">
         
          </Col>
        </Row>
      </Container>
      
    </div>
  );
}

export default connect(mapStateToProps,mapDispatchToProps)(App)