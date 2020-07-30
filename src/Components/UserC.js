import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { ListGroupItem } from 'react-bootstrap'
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

  class userC extends Component {
    render(){
        return(
            <Fragment>
                <ListGroupItem><p class="small">User C: Current: <span class="text-primary">4</span> | Destination: <span class="text-primary">6</span> | <span class="text-primary">OFF</span> </p><input type="number" min="0" max="30"></input> </ListGroupItem>
            </Fragment>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(userC)