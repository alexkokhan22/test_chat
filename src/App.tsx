import React from "react";
import "./App.less";
import {MessagesListContainer} from "./components/messagesList/MessagesListContainer";
import {MessageFormContainer} from "./components/messageForm/MessageFormContainer";


/**
 * Component for rendering the entire application
 *
 * @component
 */


function App() {
    return (
        <div className="AppContainer">
            <div className="BorderContainer">
                <MessagesListContainer/>
                <MessageFormContainer/>
            </div>
        </div>
    );
}

export default App;
