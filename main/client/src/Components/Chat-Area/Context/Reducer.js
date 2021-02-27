function Reducer(state, action) {
    switch(action.type){
        case 'contact':
            return {
                ...state,
                contacts: [...state.contacts, action.value]
            }
        case 'Chats':
            return {
                ...state,
                Chats: [...state.Chats, action.value]
            }
        default:
            return state
    }
}

export default Reducer
