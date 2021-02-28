import React, {createContext, useReducer, useEffect, useState} from 'react'
import Reducer from './Reducer'

export const Context = createContext()
const initialState = {
    contacts: localStorage.getItem('contacts')
            ? JSON.parse(localStorage.getItem('contacts'))
            : [],
    Chats: localStorage.getItem('Chats')
            ? JSON.parse(localStorage.getItem('Chats'))
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

    const selected = state.Chats.map((chat, index)=>{
        return selectedChatIndex === chat.map((cha)=>(cha.index))
    })


    useEffect(()=>{
        localStorage.setItem('contacts', JSON.stringify(state.contacts))
        localStorage.setItem('Chats', JSON.stringify(state.Chats))
    }, [state])

    const value = {
        createContact,
        Contacts: state.contacts,
        createChats,
        Chats:state.Chats,
        selected,
        selectChatIndex: setSelectedChatIndex
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
