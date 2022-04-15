import React from 'react';
import { connect } from 'react-redux';
import { fetchSongsDetails } from "../../Store/Actions/singers";
import ItemList from '../List/ItemList';
import "./Songs.css";

function Songs(props) {
    const [checked, setChecked] = React.useState([]);
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