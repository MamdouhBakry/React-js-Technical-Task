import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ItemList from '../List/ItemList';
import { fetchAlbumSongs } from "../../Store/Actions/singers";

function Albums(props) {
    const [checked, setChecked] = React.useState([]);
    console.log(checked);
    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
        props.fetchAlbumSongs(newChecked);

    };
    return (
        <>
            <ItemList itemList={props.AlbumList} handleToggle={handleToggle} checked={checked} />
        </>
    )
}
export default connect((state) => {
    return {
        AlbumList: state.singerList.albums
    }
}, { fetchAlbumSongs })(Albums)