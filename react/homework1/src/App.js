import './App.css';
import React, { useState } from "react";
import MessageList from './MessageList.js';
import InputArea from './InputArea.js';
import Dialog from './Dialog/';
import DialogList from './DialogList.js';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux'
import { toggle } from './features/checkbox/checkboxSlice'

function App() {

  const checkbox = useSelector(state => state.checkbox.value)
  const dispatch = useDispatch()

  // const [messagesArray, setMessagesArray] = useState([]);
  const [dialogsArray, setDialogArray] = useState([]);

  const userName = 'User1';

  const useStyles = makeStyles(() => ({
    button: {
      margin: "0 10px 0 0",
      backgroundColor: "#c20e0e",
      color: "#ffffff"
    }
  }));

  const classes = useStyles();

  const onNewDialog = () => {
    setDialogArray(prev => [...prev, { id: prev.length + 1, dialog: [] }]);
  }

  return (
    <Router>
      <Link to="/">Home</Link>
      <div className="outerWrapper">
        <DialogList dialogs={dialogsArray} />
        <Switch>
          <Route path='/dialogs/:id' children={<Dialog data={dialogsArray} />}></Route>
          <Route path="/users">
            <div className="mainWrapper">
              <div>Profile
                <input type="checkbox" onChange={() => dispatch(toggle())} />
              </div>
            </div>
          </Route>
          <Route path="/">
            <div className="mainWrapper">
              <Button onClick={onNewDialog} variant="contained" className={classes.button}>Start New Dialog</Button>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
