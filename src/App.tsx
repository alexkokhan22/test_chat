import React from 'react';
import './App.css';
import {MessagesListContainer} from "./components/messagesList/MessagesListContainer";
import {MessageFormContainer} from "./components/messageForm/MessageFormContainer";

/**
 * Component for rendering the entire application
 *
 * @component
 */


function App() {
    return (
        <div className="App">
            <MessagesListContainer/>
            <MessageFormContainer/>
        </div>
    );
}

export default App;
