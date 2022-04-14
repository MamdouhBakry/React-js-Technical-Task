import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import "./ItemList.css";
import { connect } from 'react-redux';
export default function ItemList(props) {

    return (
        <List className="listItems">
            {props.itemList ?
                props.itemList.map((item, index) => {
                    const labelId = `checkbox-list-label-${index}`;
                    return (
                        <ListItem
                            key={index}
                            disablePadding
                            className="listItem"
                        >
                            <ListItemButton role={undefined} onClick={props.handleToggle(item.id)} dense>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={props.checked.indexOf(item.id) !== -1}
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
    )
}
