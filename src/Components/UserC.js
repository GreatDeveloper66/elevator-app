import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { ListGroupItem, Button } from 'react-bootstrap'
import UpdateUserCDestination from '../Actions/UpdateUserCDestination'


const mapStateToProps = state => {
    return {
      userCFloor: state.userCFloor,
      userCDestination: state.userCDestination
    }
  }

  
  
  const mapDispatchToProps = dispatch => {
    return {
      updateDestination: (newfloor) => {
        dispatch(UpdateUserCDestination(newfloor))
      }
  }
}

  function userC() {
        return(
            <Fragment>
                <ListGroupItem>
                  <p className="small">User C: Current: <span className="text-primary">4</span> 
                  | Destination: <span className="text-primary">6</span> 
                  | <span className="text-primary">OFF
                  </span> </p><input type="number" min="0" max="30"></input> 
                  <Button type="submit">Press Button</Button>
                  </ListGroupItem>
            </Fragment>
        )
    
}

export default connect(mapStateToProps,mapDispatchToProps)(userC)