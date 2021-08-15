import './App.css';
import React, { useState } from "react";
import MessageList from './MessageList.js';
import InputArea from './InputArea.js';

function App() {
  const [messagesArray, setMessagesArray] = useState([]);

  const userName = 'User1';

  return (
    <div className="mainWrapper">
      <MessageList list={messagesArray} />
      <InputArea arr={messagesArray} add={setMessagesArray} user={userName} />
    </div>
  );
}

export default App;
