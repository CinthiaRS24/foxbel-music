import axios from "axios";

export function getSongsRecent() {
    return function(dispatch) {
        axios.get("https://api.deezer.com/radio/37151/tracks")
            .then(response => {
                console.log('response', response)
                return dispatch({
                    type: 'GET_RECENTS',
                    payload: response.data
                })
            })
    }
}