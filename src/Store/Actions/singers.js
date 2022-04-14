import singerList from "../../Data.json";
import { GET_ALBUMS_SONGS, GET_ALL_SINGERS, GET_SINGER_ALBUMS, GET_SONGS_COUNT_AMOUNT } from "./types";
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
        let count = 0, amount = 0;
        singerIds.map(id => {
            singerList.filter((singer) => {
                if (id === singer.id) {
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
    }
}

export const fetchAlbumSongs = (albumIds) => {
    console.log("ids", albumIds);
    return (dispatch) => {
        const selectedSongs = [];
        let count = 0, amount = 0;
        albumIds.map(id => {
            singerList.map((singer) => {
                singer.Alboums.map(alboum => {
                    if (id === alboum.id) {
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
    }
}

export const fetchSongsDetails = (songIds) => {
    return (dispatch) => {
        let count = 0, amount = 0;
        songIds.map(id => {
            singerList.map(singer => {
                singer.Alboums.map(alboum => {
                    alboum.songs.map(song => {
                        if (song.id === id) {
                            count++;
                            amount += song.price;
                        }
                    })
                })
            })
        })
        dispatch({
            type: GET_SONGS_COUNT_AMOUNT,
            data: {
                count: count,
                amount: amount
            }
        })

    }
}