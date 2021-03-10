import React, {createContext, useReducer, useEffect, useCallback, useState} from 'react'
import Reducer from './Reducer'

export const Context = createContext()
const initialState = {
    contacts: localStorage.getItem('contacts')
            ? JSON.parse(localStorage.getItem('contacts'))
            : [],
    Chats: localStorage.getItem('Chats')
            ? JSON.parse(localStorage.getItem('Chats'))
            : [],
    chats: localStorage.getItem('chats')
            ? JSON.parse(localStorage.getItem('chats'))
            : [],
    message: localStorage.getItem('message')
            ? JSON.parse(localStorage.getItem('message'))
            : [],
}

function GlobalContext({children}) {

    const [state, dispatch] = useReducer(Reducer, initialState)
    const [selectedChatIndex, setSelectedChatIndex] = useState(0)

    const createContact = (idRef, nameRef)=> {
        dispatch({
            type: 'contact',
            value: {
                id: idRef,
                username: nameRef,
            }
        })
    }

    const createChats = (chat)=> {
        dispatch({
            type: 'Chats',
            value: chat,
        })
    }
    
    const createChat = useCallback(
        (chat)=> {
            dispatch({
                type: 'chats',
                value: chat,
            })
        }, []
    )
    
    useEffect(()=>{
        const chat_s = state.Chats.map((chats, index)=>{
            const selected = index === selectedChatIndex
            return {Chat: chats, index: index, selected}
        })
        createChat(chat_s)
    }, [state.Chats, createChat,selectedChatIndex])

    const createMessage = (message)=>{
        dispatch({
            type: 'message',
            value: message,
        })
    }

    useEffect(()=>{
        localStorage.setItem('contacts', JSON.stringify(state.contacts))
        localStorage.setItem('Chats', JSON.stringify(state.Chats))
        localStorage.setItem('chats', JSON.stringify(state.chats))
        localStorage.setItem('message', JSON.stringify(state.message))
    }, [state])

    const value = {
        createContact,
        Contacts: state.contacts,
        createChats,
        selectChatIndex: setSelectedChatIndex,
        selectedChatIndex: state.Chats[selectedChatIndex],
        chats: state.chats,
        createMessage,
        Message: state.message,
    }

    return (
        <div>
            <Context.Provider value={value}>
                {children}
            </Context.Provider>
        </div>
    )
}

export default GlobalContext
