const initialState = {
    results: [],
    track: {},
    play: false,
}

function rootReducer (state = initialState, action) {
    switch (action.type) {

        case 'GET_SONGS':
            return {
                ...state,
                results: action.payload,
            }

        case 'PLAY_TRACK':
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

        case 'NEXT_TRACK':
            return {
                ...state,
                track: nextOrPreviou(state.results, action.index, true),
            }

        case 'PREVIOUS_TRACK':
            return {
                ...state,
                track: nextOrPreviou(state.results, action.index, false),
            }
          
        default:
            return state;
    }

}

export default rootReducer;


const nextOrPreviou = (results, index, next) => {

    const newIndex = next ? index + 1 : index - 1

    if (newIndex < 0 || newIndex >= results.length) {
        return {
            img: results[index].album.cover,
            title: results[index].title,
            artist: results[index].artist.name,
            url: results[index].preview,
            index
        }
    }

    return {
        img: results[newIndex].album.cover,
        title: results[newIndex].title,
        artist: results[newIndex].artist.name,
        url: results[newIndex].preview,
        index: newIndex
    }
}