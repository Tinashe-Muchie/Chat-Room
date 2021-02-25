function Reducer(state, action) {
    switch(action.type){
        case 'contact':
            return {
                ...state,
                contacts: [...state.contacts, action.value]
            }
        case 'chat':
            return {
                ...state,
                chats: [...state.chats, action.value]
            }
        default:
            return state
    }
}

export default Reducer
