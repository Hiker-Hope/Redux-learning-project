const INITIAL_STATE = {
    count: 0
}

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_COUNT':
            return {
                ...state,
                count: state.count + 1
            }

        case 'SUBTRACT_COUNT':
            return {
                ...state,
                count: state.count - 1
            }

        case 'RESET_COUNT':
            return {
                ...state,
                count: 0
            }

        default:
            return state
    }
}
