import React, {useContext, useState} from "react";
import {Message} from "./Message";
import {Context} from "../../index";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {Loader} from "../loader/Loader";
import firebase from "firebase";


export const MessageContainer = () => {
    const {firestore} = useContext(Context)
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAT')
    )
    const [value, setValue] = useState<string>('')
    const [nameUser, setNameUser] = useState<string>('')

    const onChangeTextarea = (setFunction: Function) => (e: React.FormEvent<HTMLTextAreaElement>) => {
        return setFunction(e.currentTarget.value)
    }

    const sendMessage = async () => {
        await firestore.collection('messages').add({
            nameUser: nameUser,
            text: value,
            createdAT: firebase.firestore.FieldValue.serverTimestamp()
        })
        setValue('')
        setNameUser('')
    }

    if (loading) {
        return <Loader/>
    }

    return (
        <div>
            <Message
                value={value}
                nameUser={nameUser}
                onChangeTextarea={onChangeTextarea}
                setNameUser={setNameUser}
                setValue={setValue}
                sendMessage={sendMessage}/>
        </div>
    )
}