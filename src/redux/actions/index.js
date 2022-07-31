import axios from "axios";

export function getSongs(params) {
    return function(dispatch) {
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/${params}`)
            .then(response => {
                console.log('response', response)
                return dispatch({
                    type: 'GET_RECENTS',
                    payload: response.data
                })
            })
    }
}

export function playTrack (track) {
    return function(dispatch) {
        return dispatch ({
            type: 'PLAY_TRACK',
            track
        })
    }
}