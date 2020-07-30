import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { ListGroupItem } from 'react-bootstrap'
import UpdateUserBDestination from '../Actions/UpdateUserBDestination'

const mapStateToProps = state => {
    return {
      userBFloor: state.userBFloor,
      userBDestination: state.userBDestination
    }
  }
  
  
  const mapDispatchToProps = dispatch => {
    return {
      updateDestination: (newfloor) => {
        dispatch(UpdateUserBDestination(newfloor))
      }
  }
}

  class userB extends Component {
    render(){
        return(
            <Fragment>
                <ListGroupItem>User A: Floor 4 </ListGroupItem>
                <ListGroupItem>User A Destination: Floor 6</ListGroupItem>
                <ListGroupItem><input type="number"></input></ListGroupItem>
            </Fragment>
        )
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(userB)