let number = 0;

function Message(props) {
    return (
        <p key={number++} className="message-text">{props.text}</p>
    )
}

export default Message;