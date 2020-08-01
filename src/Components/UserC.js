import React, { useState , Fragment } from 'react'
import { connect } from 'react-redux'
import { ListGroupItem, Button } from 'react-bootstrap'
import UpdateUserCDestination from '../Actions/UpdateUserCDestination'
import { propTypes } from 'react-bootstrap/esm/Image'


const mapStateToProps = state => {
    return {
      userC: state.userC
    }
  }

  
  
  const mapDispatchToProps = dispatch => {
    return {
      updateDestination: (newfloor) => {
        dispatch(UpdateUserCDestination(newfloor))
      }
  }
}

  function UserC(props) {

    const [destinationFloor, setdestinationFloor ] = useState('')
    const handleChange = event => setdestinationFloor(event.target.value)
        return(
            <Fragment>
                <ListGroupItem>
                  <p className="small">User C: Current: <span className="text-primary">{props.userC.Floor}</span> 
                  | Destination: <span className="text-primary">{props.userC.Destination}</span> 
                  | <span className="text-primary">{props.userC.Status}
                  </span> </p><input type="number" min="0" max="30"
                   value={destinationFloor} onChange={handleChange}>
                     </input> 
                  <Button type="submit">Press Button</Button>
                  </ListGroupItem>
            </Fragment>
        )
    
}

export default connect(mapStateToProps,mapDispatchToProps)(UserC)