
import React, { useState, Fragment } from 'react'
import { connect } from 'react-redux'
import { ListGroupItem, Button } from 'react-bootstrap'
import UpdateUserADestination from '../Actions/UpdateUserADestination'




const mapStateToProps = state => {
    return{
      userA: state.userA
    }
  }
  
  
  const mapDispatchToProps = dispatch => {
    return {
      updateDestination: (newfloor) => {
        dispatch(UpdateUserADestination(newfloor))
      }
  }
}


  function UserA(props) {
      

    const [destinationFloor, setdestinationFloor ] = useState('')
    const handleChange = event => setdestinationFloor(event.target.value)
    const handleSubmit = () => {
      props.updateDestination(destinationFloor)
    }
    
    

          return(
              <Fragment>
                 <ListGroupItem>
                   <p className="small">
                     User A: Current: 
          <span className="text-primary">{props.userA.Floor}</span> 
                     | Destination: <span className="text-primary">{props.userA.Destination}</span> | 
                     <span className="text-primary">{props.userA.Status}
                     </span> </p><input type="number" min="0" max="30" 
                      value={destinationFloor} onChange={handleChange}></input> 
                     <Button type='submit' onClick={handleSubmit}>Press Button</Button>
                    </ListGroupItem>
              </Fragment>
          )
      
  }



export default connect(mapStateToProps,mapDispatchToProps)(UserA)




