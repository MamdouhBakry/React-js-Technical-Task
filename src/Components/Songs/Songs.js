import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSongsDetails } from "../../Store/Actions/singers";
import ItemList from '../List/ItemList';
import "./Songs.css";

function Songs(props) {
    let SelectedSongs = JSON.parse(localStorage.getItem("SelectedSongs"));
    let SelectedSongsIds = [];
    SelectedSongs && SelectedSongs.map(singer => {
        SelectedSongsIds.push(singer.id);
    })
    const [checked, setChecked] = React.useState(SelectedSongsIds ? SelectedSongsIds : []);
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
        props.fetchSongsDetails(newChecked);

    };
    useEffect(() => {
        props.fetchSongsDetails(checked);

    }, [])
    return (
        <>
            <ItemList
                itemList={props.SongsList}
                handleToggle={handleToggle}
                checked={checked}
                itemType="SongsList"
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
        SongsList: state.singerList.songs
    }
}, { fetchSongsDetails })(Songs)