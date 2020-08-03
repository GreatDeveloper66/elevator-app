const userBReducer = (state={Floor: 1,Destination: '',Status: 'OFF'},action) => {
    switch(action.type){
      case 'UpdateUserBDestination':
        return { ...state, Destination: action.newfloor }
      default:
        return state
    }
  }
  
  export default userBReducer