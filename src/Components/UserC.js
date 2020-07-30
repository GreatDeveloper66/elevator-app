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
                <ListGroupItem>User A: Floor 4 | User A Destination: Floor 6 | <input type="number"></input> </ListGroupItem>
            </Fragment>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(userC)