import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { ListGroupItem, Button } from 'react-bootstrap'
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
                <ListGroupItem>
                  <p class="small">User B: Current: <span class="text-primary">4</span>
                   | Destination: <span class="text-primary">6</span> | 
                   <span class="text-primary">OFF
                   </span> </p><input type="number" min="0" max="30"></input> 
                   <Button type='submit'>Press Button</Button>
                   </ListGroupItem>
            </Fragment>
        )
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(userB)