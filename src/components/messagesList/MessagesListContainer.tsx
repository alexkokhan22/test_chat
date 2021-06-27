import React, {useContext} from "react";
import {MessagesList} from "./MessagesList";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {Context} from "../../index";


export const MessagesListContainer = () => {
    const {firestore} = useContext(Context)
    const [messages] = useCollectionData(
        firestore.collection('messages').orderBy('createdAT')
    )



    return (
        <div>
            <MessagesList messages={messages}/>
        </div>
    )
}