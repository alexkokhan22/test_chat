import React from "react";
import {Data} from "react-firebase-hooks/firestore/dist/firestore/types";
import {DocumentData} from "@firebase/firestore-types";


/**
 * Presentation component of message list
 * @component
 *@param{object} props data from container component
 */

export const MessagesList = (props: messageListPropsType) => {
    return (
        <div>
            {props.messages?.map(m => {
                return <div key={m.nameUser}>
                    <div>{m.nameUser}</div>
                    <div>{m.text}</div>
                </div>

            })}
        </div>
    )
}

//type
type messageListPropsType = {
    messages: Data<DocumentData>[] | undefined
}