import React, { useState } from "react";
import MessageList from '../MessageList.js';
import InputArea from '../InputArea.js';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";

function Dialog(props) {

    let { id } = useParams();
    let item = props.data.filter(item => item.id === id)

    // let item = { id: 1, dialog: [{ id: 1, message: 'Hello', user: 'User1' }] }

    const [messagesArray, setMessagesArray] = useState([...item]);
    // const [messagesArray, setMessagesArray] = useState([]);


    const userName = 'User1';

    return (
        <div className="mainWrapper">
            <MessageList list={messagesArray} />
            <InputArea arr={messagesArray} add={setMessagesArray} user={userName} />
        </div>
    )
}

export default Dialog;