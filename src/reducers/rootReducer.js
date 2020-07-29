const rootReducer = (state = '', action) => {
    switch(action.type) {
        case 'clear':
            return 0
        default: 
            return state
    }
}

export default rootReducer