import axios from 'axios';

export function getSongById(id) {
    return dispatch => {
        axios.get(`https://itunes.apple.com/lookup?id=${id}&enity=song&limit=1`, {
            method: 'GET',
            maxRedirects: 10,
            proxy: false,
            host: 'localhost:4000',
            headers: {
                "Access-Control-Allow-Origin": "http://localhost:3000",
                "Access-Control-Allow-Headers": "X-Custom-Header, Upgrade-Insecure-Requests"
            },
        })
            .then(response => {
                dispatch({
                    type: 'GET_SONG_BY_ID',
                    song: response.data.results
                });
            }).catch(err => {
            console.log(err)
        })
    }
}

const initialState = [];

export default function reducer(song = initialState, action) {
    switch (action.type) {
        case 'GET_SONG_BY_ID':
            return action.song;
        default:
            return song
    }
}