import { Howl, Howler } from 'howler'

const defaultState = {
    elevator: {
        floor: 6,
        direction: 'N',
        destination: false
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
    },
    serviceQueue: []
    
}

let bellSound = new Howl({
    src: '../Sounds/elevator_bell.mp3'
})

let rideSound = new Howl({
    src: '../Sounds/elevator_ride.mp3'
})



const rootReducer = (state = defaultState, action) => {
    let { floor: elevatorFloor, direction: elevatorDirection, destination: elevatorDestination } = state.elevator
    let { floor: AFloor, destination: ADestination, onelevator: Aonelevator, waiting: Awaiting } = state.userA
    let { floor: BFloor, destination: BDestination, onelevator: Bonelevator, waiting: Bwaiting } = state.userB
    let { floor: CFloor, destination: CDestination, onelevator: Conelevator, waiting: Cwaiting } = state.userC
    let newfloor

    switch(action.type) {
    case 'MoveElevatorFloor':
        //use a queue to determine which user to service next

        const gap = elevatorDestination ? elevatorDestination - elevatorFloor : 0
        const newDirection = gap > 0 ? "U" : gap < 0 ? "D" : "N"
        AFloor = Aonelevator ? elevatorFloor : AFloor
        BFloor = Bonelevator ? elevatorFloor : BFloor
        CFloor = Conelevator ? elevatorFloor : CFloor
        newfloor = gap > 0 ? elevatorFloor + 1 : gap < 0 ? elevatorFloor - 1 : elevatorFloor

        if(!Aonelevator && Awaiting) {
                if(AFloor !== elevatorFloor){
                    return {...state,
                            elevator: {floor: newfloor, direction: newDirection, destination: AFloor }}
                }
                return {...state, 
                    userA: {...state.userA, onelevator: true, floor: elevatorFloor },
                    elevator: {...state.elevator, destination: ADestination}}
        }
        if(Aonelevator && Awaiting) { 
                if(elevatorFloor === elevatorDestination){
                return {...state,
                    userA: {...state.userA, onelevator: false, waiting: false, destination: ''},
                    elevator: {...state.elevator, destination: false}}
            }
            return {...state, 
                    elevator: {...state.elevator, direction: newDirection, floor: newfloor },
                    userA: {...state.userA, floor: newfloor }}
        }
        return {...state, elevator: {...state.elevator, direction: newDirection, floor: newfloor}}
    

    case 'UpdateUserADestination':
        newfloor = parseInt(action.newfloor)
        return {...state, userA: {...state.userA, destination: newfloor,waiting: true}, 
               serviceQueue: state.serviceQueue.unshift('userA')}
    case 'UpdateUserBDestination':
        newfloor = parseInt(action.newfloor)
        return {...state, userB: {...state.userB, destination: newfloor,waiting: true },
                serviceQueue: state.serviceQueue.unshift('userB')}
    case 'UpdateUserCDestination':
        newfloor = parseInt(action.newfloor)
        return {...state, userC: {...state.userC, destination: newfloor,waiting: true },
                serviceQueue: state.serviceQueue.unshift('userC')}
      default:
        return state
    }
}

export default rootReducer