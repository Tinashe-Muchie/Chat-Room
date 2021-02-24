import React, {createContext, useReducer, useEffect} from 'react'
import Reducer from './Reducer'

export const Context = createContext()
const initialState = {
    contacts: localStorage.getItem('contacts')
            ? JSON.parse(localStorage.getItem('contacts'))
            : [],
    chats: localStorage.getItem('chats')
            ? JSON.parse(localStorage.getItem('chats'))
            : [],
}

function GlobalContext({children}) {

    const [state, dispatch] = useReducer(Reducer, initialState)

    const createContact = (idRef, nameRef)=> {
        dispatch({
            type: 'contact',
            value: {
                ID: idRef,
                username: nameRef,
            }
        })
    }

    useEffect(()=>{
        localStorage.setItem('contacts', JSON.stringify(state.contacts))
        localStorage.setItem('chats', JSON.stringify(state.chats))
    }, [state])

    return (
        <div>
            <Context.Provider value = {
                createContact
            }>
                {children}
            </Context.Provider>
        </div>
    )
}

export default GlobalContext
