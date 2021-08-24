import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    button: {
        margin: "0 10px 0 0",
        backgroundColor: "#c20e0e",
        color: "#ffffff"
    }
}));

function InputArea(props) {

    const [inputMessage, setInputMessage] = useState('');

    const onSendMessage = () => {
        props.add(prev => [...prev, { user: props.user, message: inputMessage }]);
        setInputMessage('');
    }

    const arrLength = props.arr.length;

    const classes = useStyles();

    useEffect(() => setTimeout(() => {
        if (arrLength > 0) {
            console.log('Message added');
        }
    }, 1500), [arrLength]);

    return (
        <div className="inputWrapper">
            <input autoFocus={true} placeholder="Enter your message" className="inputArea" value={inputMessage} onChange={e => setInputMessage(e.target.value)} onKeyDown={({ key }) => { if (key === 'Enter') onSendMessage() }} />
            <Button onClick={onSendMessage} variant="contained" className={classes.button}>Отправить</Button>
        </div>
    )
}

export default InputArea;