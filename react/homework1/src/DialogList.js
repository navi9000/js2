import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    demo: {
        backgroundColor: theme.palette.background.paper,
    }
}));

function generate(arr = []) {
    return arr.map((value) =>
        React.cloneElement(
            <Link to={'/dialogs/' + value.id}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary="Single-line item"
                    />
                </ListItem>
            </Link>, {
            key: value.id,
        }),
    );
}

function DialogList(props) {

    const classes = useStyles();

    return (
        <div className={classes.demo}>
            <List>
                {generate(props.dialogs)}
            </List>
        </div>
    )
}

export default DialogList;