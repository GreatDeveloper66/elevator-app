const userBReducer = (state={Floor: 1,Destination: '',Status: 'OFF'},action) => {
    switch(action.type){
      case 'setcategorylabel':
        return action.categorylabel
      default:
        return state
    }
  }
  
  export default userBReducer