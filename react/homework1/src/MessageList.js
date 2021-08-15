function MessageList(props) {
    return (
        <div className="messageList">
            {
                props.list.map((object, i) => (
                    <div key={i}>
                        <div className="message">{object.message}</div>
                        <div className="username">{object.user}</div>
                    </div>))
            }
        </div>
    )
}

export default MessageList;