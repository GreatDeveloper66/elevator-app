const defaultState = {
    elevator: {
        floor: 6,
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
    let [ Efloor, Afloor, AStatus, ADestination, Bfloor, BStatus, BDestination, Cfloor, CStatus, CDestination, direction, Nfloor, newfloor ] = 
        [ state.elevator.floor, state.userA.floor, state.userA.status, state.userA.destination,
      state.userB.floor, state.userB.status, state.userB.destination, state.userC.floor,
      state.userC.status, state.userC.destination, state.elevator.direction, state.elevator.floor, null ];

    switch(action.type) {
    case 'MoveElevatorFloor':
        Nfloor = direction === "U" ? Efloor + 1 : direction === "D" ? Efloor - 1: Efloor
        Afloor = AStatus === "ON" ? Nfloor : Afloor
        Bfloor = BStatus === "ON" ? Nfloor: Bfloor
        Cfloor = CStatus === "ON" ? Nfloor: Cfloor
        
    return { elevator: {...state.elevator, floor: Nfloor}, userA: {...state.userA, floor: Afloor},
            userB: {...state.userB, floor: Bfloor},userC: {...state.userC,floor: Cfloor}}

    case 'UpdateUserADestination':
        newfloor = parseInt(action.newfloor)
        AStatus = Afloor === Efloor ? "ON": "OFF"
        const levA = Efloor - newfloor
        const dirA = levA > 0 ? "D" : levA < 0 ? "U" : "N"
        return { ...state, 
                userA: {...state.userA, destination: newfloor, 
                        status: AStatus,place: 'AW'}, 
                elevator: {...state.elevator, direction: dirA} }
    case 'UpdateUserBDestination':
        newfloor = parseInt(action.newfloor)
        BStatus = Bfloor === Efloor ? "ON": "OFF"
        const levB = Efloor - newfloor
        const dirB = levB > 0 ? "D" : levB < 0 ? "U" : "N"
        return { ...state, 
                userB: {...state.userB, destination: newfloor,
                status: BStatus, place: 'AW'}, 
                elevator: {...state.elevator, direction: dirB} }
    case 'UpdateUserCDestination':
        newfloor = parseInt(action.newfloor)
        CStatus = Cfloor === Efloor ? "ON": "OFF"
        const levC = Efloor - newfloor
        const dirC = levC > 0 ? "D" : levC < 0 ? "U" : "N"
        return { ...state, 
                userC: {...state.userC, destination: newfloor,
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