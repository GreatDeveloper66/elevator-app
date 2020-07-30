const elevatorReducer = (state={ Floor: 1, Direction: 'N'},action) => {
    switch(action.type){
      case 'setcategorylabel':
        return action.categorylabel
      default:
        return state
    }
  }
  
  export default elevatorReducer