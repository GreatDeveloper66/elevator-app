const defaultState = {
    elevator: {
        floor: 1,
        direction: 'N'
    },
    userA: {
        floor: 1,
        destination: '',
        status: 'OFF',
        place: 'RD'

    },
    userB: {
        floor: 5,
        destination: '',
        status: 'OFF',
        place: 'RD'
    },
    userC: {
        floor: 8,
        destination: '',
        status: 'OFF',
        place: 'RD'
    }
    
}

const rootReducer = (state = defaultState, action) => {


    switch(action.type) {
    case 'UpdateUserADestination':
        const AStatus = state.userA.floor === state.elevator.floor ? "ON": "OFF"
        const levA = state.elevator.floor - state.userA.destination
        console.log(levA)
        const dirA = levA > 0 ? "D" : levA < 0 ? "U" : "N"
        return { ...state, 
                userA: {...state.userA, destination: action.newfloor, 
                        status: AStatus,place: 'AW'}, 
                elevator: {...state.elevator, direction: dirA} }
    case 'UpdateUserBDestination':
        const BStatus = state.userB.floor === state.elevator.floor ? "ON": "OFF"
        const levB = state.elevator.floor - state.userB.destination
        const dirB = levB > 0 ? "D" : levB < 0 ? "U" : "N"
        return { ...state, 
                userB: {...state.userB, destination: action.newfloor,
                status: BStatus, place: 'AW'}, 
                elevator: {...state.elevator, direction: dirB} }
    case 'UpdateUserCDestination':
        const CStatus = state.userB.floor === state.elevator.floor ? "ON": "OFF"
        const levC = state.elevator.floor - state.userC.destination
        const dirC = levC > 0 ? "D" : levC < 0 ? "U" : "N"
        return { ...state, 
                userC: {...state.userC, destination: action.newfloor,
                status: CStatus, place: 'AW'}, 
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