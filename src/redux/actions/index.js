import axios from "axios";

export function getSongs(params) {
    return function(dispatch) {
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/${params}`)
            .then(response => {
                console.log('getSongs', response.data.data);

                return dispatch({
                    type: 'GET_SONGS',
                    payload: response.data.data
                });
            })
    }
}
