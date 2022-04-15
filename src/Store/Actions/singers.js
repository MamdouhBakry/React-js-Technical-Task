import singerList from "../../Data.json";
import { CLEAR_STEPPER, GET_ALBUMS_SONGS, GET_ALL_SINGERS, GET_SINGER_ALBUMS, GET_SONGS_COUNT_AMOUNT } from "./types";
export const fetchSingers = () => {
    return (dispatch) => {
        dispatch({
            type: GET_ALL_SINGERS,
            data: singerList
        })
    }
}
export const fetchAlbums = (singerIds) => {
    console.log("ids", singerIds);
    return (dispatch) => {
        const selectedAlbums = [];
        const selectedSingers = [];
        let count = 0, amount = 0;
        singerIds.map(id => {
            singerList.filter((singer) => {
                if (id === singer.id) {
                    selectedSingers.push(singer);
                    singer.Alboums.map(alboum => {
                        count += alboum.songs.length;
                        alboum.songs.map(song => {
                            amount += song.price
                        })
                        selectedAlbums.push({
                            id: alboum.id,
                            title: alboum.title
                        });
                    })
                }
            })
        })
        dispatch({
            type: GET_SINGER_ALBUMS,
            data: {
                selectedAlbums: selectedAlbums,
                count: count,
                amount: amount
            }
        })
        localStorage.setItem("selectedSingers", JSON.stringify(selectedSingers));

    }
}

export const fetchAlbumSongs = (albumIds) => {
    console.log("ids", albumIds);
    return (dispatch) => {
        const selectedSongs = [];
        const selectedAlbums = [];
        let count = 0, amount = 0;
        albumIds.map(id => {
            singerList.map((singer) => {
                singer.Alboums.map(alboum => {
                    if (id === alboum.id) {
                        selectedAlbums.push(alboum);
                        count += alboum.songs.length;
                        alboum.songs.map(song => {
                            amount += song.price;
                            selectedSongs.push({
                                id: song.id,
                                title: song.title,
                            })
                        })
                    }

                });
            })
        })
        dispatch({
            type: GET_ALBUMS_SONGS,
            data: {
                selectedSongs: selectedSongs,
                count: count,
                amount: amount
            }
        })
        localStorage.setItem("selectedAlbums", JSON.stringify(selectedAlbums));
    }
}

export const fetchSongsDetails = (songIds) => {
    return (dispatch) => {
        let count = 0, amount = 0;
        let SelectedSongs = [];
        songIds.map(id => {
            singerList.map(singer => {
                singer.Alboums.map(alboum => {
                    alboum.songs.map(song => {
                        if (song.id === id) {
                            count++;
                            amount += song.price;
                            SelectedSongs.push(song);
                        }
                    })
                })
            })
        })
        dispatch({
            type: GET_SONGS_COUNT_AMOUNT,
            data: {
                count: count,
                amount: amount,
                SelectedSongs: SelectedSongs
            }
        })
        localStorage.setItem("SelectedSongs", JSON.stringify(SelectedSongs));
    }
}
export const clearStepper = () => {
    return (dispatch) => {
        dispatch({
            type: CLEAR_STEPPER,
        })
        localStorage.clear();
    }
}