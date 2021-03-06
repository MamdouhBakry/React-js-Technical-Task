import * as React from 'react';
import { connect } from 'react-redux';
import { fetchSingers, fetchAlbums } from '../../Store/Actions/singers';
import ItemList from "../List/ItemList";
import "./Singers.css";
function Singers(props) {

    let selectedSingers = JSON.parse(localStorage.getItem("selectedSingers"));
    let selectedSingersIds = [];
    selectedSingers && selectedSingers.map(singer => {
        selectedSingersIds.push(singer.id);
    })
    const [checked, setChecked] = React.useState(selectedSingersIds ? selectedSingersIds : []);
    console.log(checked);
    const { handleNext, steps, activeStep, handleBack } = props

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        props.fetchAlbums(newChecked);
        setChecked(newChecked);
    };

    React.useEffect(() => {
        props.fetchSingers();
        props.fetchAlbums(checked);
        console.log(props.singerList)
    }, [])
    return (
        <>
            <ItemList
                itemList={props.singerList}
                handleToggle={handleToggle}
                checked={checked}
                handleNext={handleNext}
                steps={steps}
                activeStep={activeStep}
                handleBack={handleBack}
            />


        </>
    );
}

export default connect((state) => {
    return {
        singerList: state.singerList.singers
    }
}, { fetchSingers, fetchAlbums })(Singers)