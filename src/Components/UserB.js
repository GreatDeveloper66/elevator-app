import React, { useState, Fragment } from 'react'
import { connect } from 'react-redux'
import { ListGroupItem, Button } from 'react-bootstrap'
import UpdateUserBDestination from '../Actions/UpdateUserBDestination'

const mapStateToProps = state => {
    return {
      userB: state.userB
    }
  }
  
  
  const mapDispatchToProps = dispatch => {
    return {
      updateDestination: (newfloor) => {
        dispatch(UpdateUserBDestination(newfloor))
      }
  }
}

  function UserB(props) {
    const [destinationFloor, setdestinationFloor ] = useState('')
    const handleChange = event => setdestinationFloor(event.target.value)
    const handleSubmit = () => props.updateDestination(destinationFloor)
    
        return(
            <Fragment>
                <ListGroupItem>
                  <p className="small">User B: Current: <span className="text-primary">4</span>
                   | Destination: <span className="text-primary">6</span> | 
                   <span className="text-primary">OFF
                   </span> </p><input type="number" min="0" max="30"
                    value={destinationFloor} onChange={handleChange}>
                      </input> 
                   <Button type='submit' onClick={handleSubmit}>Press Button</Button>
                   </ListGroupItem>
            </Fragment>
        )
    
}



export default connect(mapStateToProps,mapDispatchToProps)(UserB)