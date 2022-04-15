import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ItemList from '../List/ItemList';
import { fetchAlbumSongs } from "../../Store/Actions/singers";

function Albums(props) {

    let selectedAlbums = JSON.parse(localStorage.getItem("selectedAlbums"));
    let selectedAlbumsIds = [];
    selectedAlbums && selectedAlbums.map(singer => {
        selectedAlbumsIds.push(singer.id);
    })
    const [checked, setChecked] = React.useState(selectedAlbumsIds ? selectedAlbumsIds : []);
    const { handleNext, steps, activeStep, handleBack } = props;
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
    useEffect(() => {
        props.fetchAlbumSongs(checked);
    }, [])
    return (
        <>
            <ItemList
                itemList={props.AlbumList}
                handleToggle={handleToggle}
                checked={checked}
                handleNext={handleNext}
                steps={steps}
                activeStep={activeStep}
                handleBack={handleBack}
            />
        </>
    )
}
export default connect((state) => {
    return {
        AlbumList: state.singerList.albums
    }
}, { fetchAlbumSongs })(Albums)
