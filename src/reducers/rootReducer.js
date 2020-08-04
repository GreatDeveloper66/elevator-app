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
    let [ Efloor, Afloor, AStatus, ADestination, Bfloor, BStatus, BDestination, Cfloor, CStatus, CDestination, direction, Nfloor ] = 
        [ state.elevator.floor, state.userA.floor, state.userA.status, state.userA.destination,
      state.userB.floor, state.userB.status, state.userB.destination, state.userC.floor,
      state.userC.status, state.userC.destination, state.elevator.direction, state.elevator.floor ];

    switch(action.type) {
    case 'MoveElevatorFloor':
        Nfloor = direction === "U" ? Efloor + 1 : direction === "D" ? Efloor - 1: Efloor
        if(AStatus === "ON"){
            Afloor = Nfloor
        }
        if(BStatus === "ON"){
            Bfloor = Nfloor
        }
        if(CStatus === "ON"){
            Cfloor = Nfloor
        }
    return { elevator: {...state.elevator, floor: Nfloor}, userA: {...state.userA, floor: Nfloor},
            userB: {...state.userB, floor: Nfloor},userC: {...state.userC,floor: Nfloor}}
            
    case 'UpdateUserADestination':
        AStatus = Afloor === Efloor ? "ON": "OFF"
        const levA = Efloor - ADestination
        const dirA = levA > 0 ? "D" : levA < 0 ? "U" : "N"
        return { ...state, 
                userA: {...state.userA, destination: action.newfloor, 
                        status: AStatus,place: 'AW'}, 
                elevator: {...state.elevator, direction: dirA} }
    case 'UpdateUserBDestination':
        BStatus = Bfloor === Efloor ? "ON": "OFF"
        const levB = Efloor - BDestination
        const dirB = levB > 0 ? "D" : levB < 0 ? "U" : "N"
        return { ...state, 
                userB: {...state.userB, destination: action.newfloor,
                status: BStatus, place: 'AW'}, 
                elevator: {...state.elevator, direction: dirB} }
    case 'UpdateUserCDestination':
        CStatus = Cfloor === Efloor ? "ON": "OFF"
        const levC = Efloor - CDestination
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