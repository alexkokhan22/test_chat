import React, {useContext, useState} from "react";
import {MessageForm} from "./MessageForm";
import {Context} from "../../index";
import firebase from "firebase";


/**
 * Container component for the message submit form
 *
 * @component
 */

export const MessageFormContainer = () => {
    const {firestore} = useContext(Context)
    const [value, setValue] = useState<string>('')
    const [nameUser, setNameUser] = useState<string>('')

    /**
     * Function to change values in forms
     * @function
     *@param {function}  setFunction function that changes the local state
     * @return {function} returns a function to change the message text and name in forms
     */

    const onChangeTextarea = (setFunction: Function) =>
        (e: React.FormEvent<HTMLTextAreaElement | HTMLInputElement>) => {
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

    return (
        <div>
            <MessageForm
                value={value}
                nameUser={nameUser}
                onChangeTextarea={onChangeTextarea}
                setNameUser={setNameUser}
                setValue={setValue}
                sendMessage={sendMessage}
            />
        </div>
    )
}