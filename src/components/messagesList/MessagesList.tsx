import React from "react";
import {Data} from "react-firebase-hooks/firestore/dist/firestore/types";
import firebase from "firebase";
import {DocumentData} from "@firebase/firestore-types";


export const MessagesList = (props: messageListPropsType) => {
    return (
        <div>
            {props.messages?.map(m => {
                return <div>
                    <div>{m.nameUser}</div>
                    <div>{m.text}</div>
                </div>

            })}
        </div>
    )
}

type messageListPropsType = {
    messages: Data<DocumentData, "", "">[] | undefined
}