import React from "react";
import {Data} from "react-firebase-hooks/firestore/dist/firestore/types";
import {DocumentData} from "@firebase/firestore-types";
import "./MessagesList.less"


/**
 * Presentation component of message list
 * @component
 *@param{object} props data from container component
 */

export const MessagesList = (props: messageListPropsType) => {
    return (
        <div className="ListContainer">
            {props.messages?.map(m => {
                return <div className="MessagesContainer" key={m.nameUser}>
                    <div>{m.createdAT.value}</div>
                    <div className="MessageElement">{m.nameUser}</div>
                    <div className="MessageElement">{m.text}</div>
                </div>

            })}
        </div>
    )
}

//type
type messageListPropsType = {
    messages: Data<DocumentData>[] | undefined
}