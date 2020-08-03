//import { combineReducers } from 'redux'
//import userAReducer from './userAReducer.js'
//import userBReducer from './userBReducer.js'
//import userCReducer from './userCReducer.js'
//import elevatorReducer from './elevatorReducer.js'

const defaultState = {
    elevator: {
        floor: 1,
        direction: 'N'
    },
    userA: {
        floor: 1,
        destination: '',
        status: 'OFF'
    },
    userB: {
        floor: 1,
        destination: '',
        status: 'OFF'
    },
    userC: {
        floor: 1,
        destination: '',
        status: 'OFF'
    }
    
}

/*
const rootReducer = combineReducers({
    elevator: elevatorReducer,
    userA: userAReducer,
    userB: userBReducer,
    userC: userCReducer
})
*/

const rootReducer = (state = defaultState, action) => {
    switch(action.type) {
    case 'UpdateUserADestination':
        const levA = state.elevator.floor - state.userA.destination
        console.log(levA)
        const dirA = levA > 0 ? "D" : levA < 0 ? "U" : "N"
        return { ...state, userA: {...state.userA, destination: action.newfloor}, 
                elevator: {...state.elevator, direction: dirA} }
    case 'UpdateUserBDestination':
        const levB = state.elevator.floor - state.userB.destination
        const dirB = levB > 0 ? "D" : levB < 0 ? "U" : "N"
        return { ...state, userB: {...state.userB, destination: action.newfloor}, 
                elevator: {...state.elevator, direction: dirB} }
    case 'UpdateUserCDestination':
        const levC = state.elevator.floor - state.userC.destination
        const dirC = levC > 0 ? "D" : levC < 0 ? "U" : "N"
        return { ...state, userC: {...state.userC, destination: action.newfloor}, 
                elevator: {...state.elevator, direction: dirC} }
      default:
        return state
    }
}
/*
const userCReducer = (state={Floor: 1,Destination: '',Status: 'OFF'},action) => {
    switch(action.type){
      case 'UpdateUserCDestination':
        return { ...state, Destination: action.newfloor }
      default:
        return state
    }
  }
  
  export default userCReducer
  */

export default rootReducer