const userCReducer = (state={Floor: 1,Destination: '',Status: 'OFF'},action) => {
  switch(action.type){
    case 'UpdateUserCDestination':
      return { ...state, Destination: action.newfloor }
    default:
      return state
  }
}

export default userCReducer