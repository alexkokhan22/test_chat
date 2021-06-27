import React, {useContext, useState} from "react";
import {MessageForm} from "./MessageForm";
import {Context} from "../../index";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {Loader} from "../loader/Loader";
import firebase from "firebase";


/**
 * Container component for the message submit form
 *
 * @component
 */

export const MessageFormContainer = () => {
    const {firestore} = useContext(Context)
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAT')
    )
    const [value, setValue] = useState<string>('')
    const [nameUser, setNameUser] = useState<string>('')

    /**
     * Function to change values in forms
     * @function
     *@param {function}  setFunction function that changes the local state
     * @return {function} returns a function to change the message text and name in forms
     */

    const onChangeTextarea = (setFunction: Function) => (e: React.FormEvent<HTMLTextAreaElement>) => {
        return setFunction(e.currentTarget.value)
    }


    /**
     * Sending a message and clearing input fields
     * @function
     */

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
            <MessageForm
                value={value}
                nameUser={nameUser}
                onChangeTextarea={onChangeTextarea}
                setNameUser={setNameUser}
                setValue={setValue}
                sendMessage={sendMessage}/>
        </div>
    )
}