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
                <ListGroupItem>User B: Floor 4 | User B Destination: Floor 6 | <input type="number"></input> </ListGroupItem>
            </Fragment>
        )
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(userB)