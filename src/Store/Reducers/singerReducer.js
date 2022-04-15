import { CLEAR_STEPPER, GET_ALBUMS_SONGS, GET_ALL_SINGERS, GET_SINGER_ALBUMS, GET_SONGS_COUNT_AMOUNT } from "../Actions/types";

export const singersReducer = (state = {}, action) => {

    switch (action.type) {
        case GET_ALL_SINGERS:
            return {
                singers: action.data
            }
        case GET_SINGER_ALBUMS:
            return {
                ...state,
                albums: action.data.selectedAlbums,
                count: action.data.count,
                amount: action.data.amount
            }
        case GET_ALBUMS_SONGS:
            return {
                ...state,
                songs: action.data.selectedSongs,
                count: action.data.count,
                amount: action.data.amount
            }
        case GET_SONGS_COUNT_AMOUNT:
            return {
                ...state,
                count: action.data.count,
                amount: action.data.amount
            }
        case CLEAR_STEPPER:
            return state;
        default:
            return state

    }
}