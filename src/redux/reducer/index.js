const initialState = {
    results: [],
}

function rootReducer (state = initialState, action) {
    switch (action.type) {
        case 'GET_RECENTS':
            return {
                ...state,
                results: action.payload,
            }

        default:
            return state;
    }

}

export default rootReducer;