import * as React from 'react';
import { connect } from 'react-redux';
import { fetchSingers, fetchAlbums } from '../../Store/Actions/singers';
import ItemList from "../List/ItemList";
import { Button } from '@mui/material';
import "./Singers.css";
function Singers(props) {

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

        props.fetchAlbums(newChecked);
        setChecked(newChecked);
        localStorage.setItem("checkedItems", [newChecked]);
    };

    React.useEffect(() => {
        props.fetchSingers();
        console.log(props.singerList)
    }, [])
    return (
        <>
            <ItemList itemList={props.singerList} handleToggle={handleToggle} checked={checked} />
            <div className="btnGroup2">
                <Button

                    disabled={props.activeStep === 0}
                    onClick={props.handleBack}
                >
                    back
                </Button>
                {
                    checked.length === 0 ? (<Button
                        variant="contained"
                        color="primary"
                        onClick={props.handleNext}
                        disabled
                    >
                        {props.activeStep === props.steps.length - 1 ? "SUBMIT" : "Next"}
                    </Button>)
                        : (<Button
                            variant="contained"
                            color="primary"
                            onClick={props.handleNext}

                        >
                            {props.activeStep === props.steps.length - 1 ? "SUBMIT" : "Next"}
                        </Button>)
                }
            </div>

        </>
    );
}

export default connect((state) => {
    return {
        singerList: state.singerList.singers
    }
}, { fetchSingers, fetchAlbums })(Singers)