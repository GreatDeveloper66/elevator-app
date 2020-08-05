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
    serviceQueue: [],
    currentUser: false,
    message: "Welcome to the Elevator App. Pick a floor"
    
}

let bellSound = new Howl({
    src: ['../Sounds/elevator_bell.mp3'],
    volume: 0.8
});

let rideSound = new Howl({
    src: ['../Sounds/elevator_ride.mp3']
});

const rootReducer = (state = defaultState, action) => {
    let { floor: elevatorFloor, direction: elevatorDirection, destination: elevatorDestination } = state.elevator
    let { floor: AFloor, destination: ADestination, onelevator: Aonelevator, waiting: Awaiting } = state.userA
    let { floor: BFloor, destination: BDestination, onelevator: Bonelevator, waiting: Bwaiting } = state.userB
    let { floor: CFloor, destination: CDestination, onelevator: Conelevator, waiting: Cwaiting } = state.userC
    let user = state.currentUser
    let queue = state.serviceQueue.slice(0)
    if(!user){
        if(queue.length > 0){
            user = queue.pop()
        }
    }

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
        function userAMove() {
            if(!Aonelevator && Awaiting) {
                if(AFloor !== elevatorFloor){
                    return {...state,
                            elevator: {floor: newfloor, direction: newDirection, destination: AFloor },
                            currentUser: user, serviceQueue: queue }
                }
                bellSound.play()
                return {...state, 
                    userA: {...state.userA, onelevator: true, floor: elevatorFloor },
                    elevator: {...state.elevator, destination: ADestination},
                    currentUser: user, serviceQueue: queue,
                    message: `User A is boarding the elevator at floor ${elevatorFloor}` }
        }
        if(Aonelevator && Awaiting) { 
                if(elevatorFloor === elevatorDestination){
                bellSound.play()
                return {...state,
                    userA: {...state.userA, onelevator: false, waiting: false, destination: ''},
                    elevator: {...state.elevator, destination: false},
                    currentUser: false, serviceQueue: queue,
                    message: `User A has reached the destinaton floor ${elevatorFloor}` }
            }
            return {...state, 
                    elevator: {...state.elevator, direction: newDirection, floor: newfloor },
                    userA: {...state.userA, floor: newfloor },
                    currentUser: user, serviceQueue: queue }
        }
        }
        function userBMove() {
            if(!Bonelevator && Bwaiting) {
                if(BFloor !== elevatorFloor){
                    return {...state,
                            elevator: {floor: newfloor, direction: newDirection, destination: BFloor },
                            currentUser: user, serviceQueue: queue }
                }
                bellSound.play()
                return {...state, 
                    userB: {...state.userB, onelevator: true, floor: elevatorFloor },
                    elevator: {...state.elevator, destination: BDestination},
                    currentUser: user, serviceQueue: queue,
                    message: `User B is boarding the elevator at floor ${elevatorFloor}` }
        }
        if(Bonelevator && Bwaiting) { 
                if(elevatorFloor === elevatorDestination){
                bellSound.play()
                return {...state,
                    userB: {...state.userB, onelevator: false, waiting: false, destination: ''},
                    elevator: {...state.elevator, destination: false},
                    currentUser: false, serviceQueue: queue,
                    message: `User B reached the destination floor ${elevatorFloor}` }
            }
            return {...state, 
                    elevator: {...state.elevator, direction: newDirection, floor: newfloor },
                    userB: {...state.userB, floor: newfloor },
                    currentUser: user, serviceQueue: queue }
        }
        }
        function userCMove() {
            if(!Conelevator && Cwaiting) {
                if(CFloor !== elevatorFloor){
                    return {...state,
                            elevator: {floor: newfloor, direction: newDirection, destination: CFloor },
                            currentUser: user, serviceQueue: queue }
                }
                bellSound.play()
                return {...state, 
                    userC: {...state.userC, onelevator: true, floor: elevatorFloor },
                    elevator: {...state.elevator, destination: CDestination},
                    currentUser: user, serviceQueue: queue,
                    message: `User C is boarding the elevator at floor ${elevatorFloor}` }
        }
        if(Conelevator && Cwaiting) { 
                if(elevatorFloor === elevatorDestination){
                bellSound.play()
                return {...state,
                    userC: {...state.userC, onelevator: false, waiting: false, destination: ''},
                    elevator: {...state.elevator, destination: false},
                    currentUser: false, serviceQueue: queue,
                    message: `User C has reached the destination ${elevatorFloor}` }
            }
            return {...state, 
                    elevator: {...state.elevator, direction: newDirection, floor: newfloor },
                    userC: {...state.userC, floor: newfloor },
                    currentUser: user, serviceQueue: queue }
        }
        }
        if(user) {
            if(user === 'userA'){
                return userAMove()
            }
            if(user === 'userB'){
                return userBMove()
            }
            if(user === 'userC'){
                return userCMove()
            }
            
        }
        return {...state, elevator: {...state.elevator, direction: newDirection, floor: newfloor},
               currentUser: user, serviceQueue: queue }
    

    case 'UpdateUserADestination':
        newfloor = parseInt(action.newfloor)
        queue.unshift('userA')
        return {...state, userA: {...state.userA, destination: newfloor,waiting: true}, 
               serviceQueue: queue}
    case 'UpdateUserBDestination':
        newfloor = parseInt(action.newfloor)
        queue.unshift('userB')
        return {...state, userB: {...state.userB, destination: newfloor,waiting: true },
                serviceQueue: queue}
    case 'UpdateUserCDestination':
        newfloor = parseInt(action.newfloor)
        queue.unshift('userC')
        return {...state, userC: {...state.userC, destination: newfloor,waiting: true },
                serviceQueue: queue}
      default:
        return state
    }
}

export default rootReducer