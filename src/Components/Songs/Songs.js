import React from 'react';
import { connect } from 'react-redux';
import { fetchSongsDetails } from "../../Store/Actions/singers";
import ItemList from '../List/ItemList';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import "./Songs.css";
import { Button } from '@mui/material';

function Songs(props) {
    const [checked, setChecked] = React.useState([]);
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
            {/* <ItemList itemList={props.SongsList} handleToggle={handleToggle} checked={checked} /> */}
            <List>
                {props.SongsList ?
                    props.SongsList.map((item, index) => {
                        const labelId = `checkbox-list-label-${index}`;
                        return (
                            <ListItem
                                key={index}
                                disablePadding
                                className="songList"
                            >
                                <ListItemButton role={undefined} onClick={handleToggle(item.id)} dense>
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            checked={checked.indexOf(item.id) !== -1}
                                            tabIndex={-1}
                                            disableRipple
                                            inputProps={{ 'aria-labelledby': labelId }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText id={labelId} primary={item.title} />
                                </ListItemButton>
                            </ListItem>
                        );
                    }) : ""
                }
            </List>
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
        SongsList: state.singerList.songs
    }
}, { fetchSongsDetails })(Songs)