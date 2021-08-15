import React, { useState, useEffect } from "react";

function InputArea(props) {

    const [inputMessage, setInputMessage] = useState('');

    const onSendMessage = () => {
        props.add(prev => [...prev, { user: props.user, message: inputMessage }]);
        setInputMessage('');
    }

    const getArrLength = () => {
        return props.arr.filter(el => el.user === props.user).length;
    }

    useEffect(() => setTimeout(() => {
        if (getArrLength() > 0) {
            let datetime = new Date();
            props.add(prev => [...prev, { user: 'Robot', message: 'Added at ' + datetime.getHours() + ':' + datetime.getMinutes() }]);
        }
    }, 1500), [getArrLength()]);

    return (
        <div className="inputWrapper">
            <input placeholder="Enter your message" className="inputArea" value={inputMessage} onChange={e => setInputMessage(e.target.value)} onKeyDown={({ key }) => { if (key === 'Enter') onSendMessage() }} />
            <button className="inputButton" onClick={onSendMessage}>Отправить</button>
        </div>
    )
}

export default InputArea;