import { combineReducers } from 'redux'
import userAReducer from './userAReducer.js'
import userBReducer from './userBReducer.js'
import userCReducer from './userCReducer.js'
import elevatorReducer from './elevatorReducer.js'
/*
const defaultState = {
    elevator: {
        Floor: 1,
        Direction: 'N'
    },
    userA: {
        Floor: 1,
        Destination: '',
        Status: 'OFF'
    },
    userB: {
        Floor: 1,
        Destination: '',
        Status: 'OFF'
    },
    userC: {
        Floor: 1,
        Destination: '',
        Status: 'OFF'
    }
    
}
*/

const rootReducer = combineReducers({
    elevator: elevatorReducer,
    userA: userAReducer,
    userB: userBReducer,
    userC: userCReducer
})

export default rootReducer