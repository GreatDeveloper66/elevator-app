import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { ListGroupItem, Button } from 'react-bootstrap'
import UpdateUserADestination from '../Actions/UpdateUserADestination'



const mapStateToProps = state => {
    return {
      userAFloor: state.userAFloor,
      userADestination: state.userADestination
    }
  }
  
  
  const mapDispatchToProps = dispatch => {
    return {
      updateDestination: (newfloor) => {
        dispatch(UpdateUserADestination(newfloor))
      }
  }
}


  function userA() {
      
          return(
              <Fragment>
                 <ListGroupItem>
                   <p className="small">
                     User A: Current: 
                     <span className="text-primary">4</span> 
                     | Destination: <span className="text-primary">6</span> | 
                     <span className="text-primary">OFF
                     </span> </p><input type="number" min="0" max="30"></input> 
                     <Button type='submit'>Press Button</Button>
                    </ListGroupItem>
              </Fragment>
          )
      
  }



export default connect(mapStateToProps,mapDispatchToProps)(userA)