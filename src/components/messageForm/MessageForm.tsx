import React from "react";
import "./MessageForm.less"

/**
 * Presentation component of the form for sending messages
 * @component
 *@param{object} props data from container component
 */

export const MessageForm = (props: MessagePropsType) => {
    return (
        <div className="Form">
            <input
                className="FieldForm"
                value={props.nameUser}
                onChange={props.onChangeTextarea(props.setNameUser)}
                placeholder={'your name'}
            />
            <textarea
                className="FieldForm"
                value={props.value}
                onChange={props.onChangeTextarea(props.setValue)}
                placeholder={'your message'}/>

            <button
                className="ButtonForm"
                onClick={props.sendMessage}
            >
                send message
            </button>
        </div>
    )
}


//type
type MessagePropsType = {
    value: string
    nameUser: string
    onChangeTextarea: (setFunction: Function) => (e: React.FormEvent<HTMLTextAreaElement | HTMLInputElement>) => void
    sendMessage: () => void
    setNameUser: Function
    setValue: Function
}