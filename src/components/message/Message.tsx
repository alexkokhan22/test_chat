import React from "react";


export const Message = (props: MessagePropsType) => {
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