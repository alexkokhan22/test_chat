import React from 'react';
import './App.css';
import {MessagesListContainer} from "./components/messagesList/MessagesListContainer";
import {MessageContainer} from "./components/message/MessageContainer";

function App() {

    return (
        <div className="App">
            <MessagesListContainer/>
            <MessageContainer/>
        </div>
    );
}

export default App;
