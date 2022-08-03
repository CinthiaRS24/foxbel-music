const initialState = {
    results: [],
    track: {},
    play: false,
    trackTime: 0,
}

function rootReducer (state = initialState, action) {
    switch (action.type) {

        case 'GET_SONGS':
            return {
                ...state,
                results: action.payload,
            }

        case 'PLAY_TRACK':
            console.log('PLAY_TRACK');
            return {
                ...state,
                track: action.track,
                play: true,
        }

        case 'PAUSE_TRACK':
            return {
              ...state,
              play: false,
            }
            
        case 'RESUME_TRACK':
            return {
              ...state,
              play: true,
            }
          
        default:
            return state;
    }

}

export default rootReducer;