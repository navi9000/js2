import './App.css';
import React, { useState } from "react";
import MessageList from './MessageList.js';
import InputArea from './InputArea.js';
import Dialogs from './Dialogs.js';

function App() {
  const [messagesArray, setMessagesArray] = useState([]);
  const [dialogsArray, setDialogArray] = useState([]);

  const userName = 'User1';

  return (
    <div className="outerWrapper">
      <Dialogs dialogs={dialogsArray} new={setDialogArray} />
      <div className="mainWrapper">
        <MessageList list={messagesArray} />
        <InputArea arr={messagesArray} add={setMessagesArray} user={userName} />
      </div>
    </div>
  );
}

export default App;
