const userAReducer = (state={Floor: 1,Destination: '',Status: 'OFF'},action) => {
    switch(action.type){
      case 'UpdateUserADestination':
        return { ...state, Destination: action.newfloor }
      default:
        return state
    }
  }
  
  export default userAReducer