const elevatorReducer = (state={ Floor: 1, Direction: 'N'},action) => {
    switch(action.type){
      case 'MoveElevatorFloor':
        if(state.direction === "U"){
          return {...state, Floor: state.Floor + 1}
        } 
        if(state.direction === "D") {
          return {...state, Floor: state.Floor - 1}
        }
      case 'UpdateUserADestination':
        console.log(store.getState())
        return state
      default:
        return state
    }
  }
  
  export default elevatorReducer