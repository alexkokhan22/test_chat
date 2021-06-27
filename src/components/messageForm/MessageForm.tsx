import React from "react";

/**
 * Presentation component of the form for sending messages
 * @component
 *@param{object} props data from container component
 */

export const MessageForm = (props: MessagePropsType) => {
    return (
        <div>
            <textarea value={props.nameUser} onChange={props.onChangeTextarea(props.setNameUser)}/>
            <textarea value={props.value} onChange={props.onChangeTextarea(props.setValue)}/>
            <button onClick={props.sendMessage}>send message</button>
        </div>
    )
}


//type
type MessagePropsType = {
    value: string
    nameUser: string
    onChangeTextarea: (setFunction: Function) => (e: React.FormEvent<HTMLTextAreaElement>) => void
    sendMessage: () => void
    setNameUser: Function
    setValue: Function
}