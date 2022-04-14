import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ItemList from '../List/ItemList';
import { fetchAlbumSongs } from "../../Store/Actions/singers";
import { Button } from "@mui/material";

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
    )
}
export default connect((state) => {
    return {
        AlbumList: state.singerList.albums
    }
}, { fetchAlbumSongs })(Albums)
