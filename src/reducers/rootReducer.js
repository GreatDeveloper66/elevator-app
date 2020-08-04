const defaultState = {
    elevator: {
        floor: 6,
        direction: 'N',
        destination: null
    },
    userA: {
        floor: 1,
        destination: '',
        onelevator: false,
        waiting: false

    },
    userB: {
        floor: 5,
        destination: '',
        onelevator: false,
        waiting: false
    },
    userC: {
        floor: 8,
        destination: '',
        onelevator: false,
        waiting: false
    }
    
}

const rootReducer = (state = defaultState, action) => {
    let { floor: elevatorFloor, direction: elevatorDirection, destination: elevatorDestination } = state.elevator
    let { floor: AFloor, destination: ADestination, onelevator: Aonelevator, waiting: Awaiting } = state.userA
    let { floor: BFloor, destination: BDestination, onelevator: Bonelevator, waiting: Bwaiting } = state.userB
    let { floor: CFloor, destination: CDestination, onelevator: Conelevator, waiting: Cwaiting } = state.userC
    let newfloor
    
    /*
    let [ Efloor, Afloor, AStatus, ADestination, 
        APlace, Bfloor, BStatus, BDestination, 
        Cfloor, CStatus, CDestination, direction, 
        Nfloor, newfloor, EDestination ] = 
        [ state.elevator.floor, state.userA.floor, state.userA.status, state.userA.destination,state.userA.place,
      state.userB.floor, state.userB.status, state.userB.destination, state.userC.floor,
      state.userC.status, state.userC.destination, state.elevator.direction, state.elevator.floor, null, state.elevator.destination ];
            */
    switch(action.type) {
    case 'MoveElevatorFloor':
        //case1: userA is getting on elevator to got to destination
        //case2: userA is getting off elevator after arriviing at destination
        //case3: userA is going nowhere
        const gap = elevatorDestination ? elevatorDestination - elevatorFloor : 0
        const newDirection = gap > 0 ? "U" : gap < 0 ? "D" : "N"
        AFloor = Aonelevator ? elevatorFloor : AFloor
        BFloor = Bonelevator ? elevatorFloor : BFloor
        CFloor = Conelevator ? elevatorFloor : CFloor
        

        if(!Aonelevator && Awaiting) {
                if(AFloor !== elevatorFloor){
                    return {...state,
                            elevator: {...state.elevator, destination: AFloor, direction: newDirection }}
                }
                return {...state, 
                    userA: {...state.userA, onelevator: true, floor: elevatorFloor },
                    elevator: {...state.elevator, destination: ADestination}}
        }
        if(Aonelevator && Awaiting && elevatorFloor === elevatorDestination){
            return {...state,
                    userA: {...state.userA, onelevator: false, waiting: false},
                    elevator: {...state.elevator, destination: null}}
        }
        return state
    

    case 'UpdateUserADestination':
        newfloor = parseInt(action.newfloor)
        return {...state, userA: {...state.userA, destination: newfloor,waiting: true}}

        /*
        if(AStatus === "OFF"){
            //new elevator destination equals wherever 
        }
        
        AStatus = Afloor === Efloor ? "ON": "OFF"
        const levA = Efloor - newfloor
        const dirA = levA > 0 ? "D" : levA < 0 ? "U" : "N"
        return { ...state, 
                userA: {...state.userA, destination: newfloor, 
                        status: AStatus,place: 'AW'}, 
                elevator: {...state.elevator, direction: dirA} }
                */
    case 'UpdateUserBDestination':
        newfloor = parseInt(action.newfloor)
        return {...state, userB: {...state.userB, destination: newfloor,waiting: true }}
        /*
        BStatus = Bfloor === Efloor ? "ON": "OFF"
        const levB = Efloor - newfloor
        const dirB = levB > 0 ? "D" : levB < 0 ? "U" : "N"
        return { ...state, 
                userB: {...state.userB, destination: newfloor,
                status: BStatus, place: 'AW'}, 
                elevator: {...state.elevator, direction: dirB} }
                */
    case 'UpdateUserCDestination':
        newfloor = parseInt(action.newfloor)
        return {...state, userC: {...state.userC, destination: newfloor,waiting: true }}
        /*
        CStatus = Cfloor === Efloor ? "ON": "OFF"
        const levC = Efloor - newfloor
        const dirC = levC > 0 ? "D" : levC < 0 ? "U" : "N"
        return { ...state, 
                userC: {...state.userC, destination: newfloor,
                status: CStatus, place: 'AW'}, 
                elevator: {...state.elevator, direction: dirC} }
                */
      default:
        return state
    }
}

export default rootReducer