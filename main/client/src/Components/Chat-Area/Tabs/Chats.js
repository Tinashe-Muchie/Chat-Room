import React, {useContext} from 'react'
import {ListGroup} from 'react-bootstrap'
import {Context} from '../Context/GlobalContext'

function Chats() {

    const {selectChatIndex,chats} = useContext(Context)
    const Chats = [...chats].pop()
    return (
        <div>
             <ListGroup variant="flush">
                {Chats && Chats.map((chat, index)=>(
                    <ListGroup.Item 
                        key={index} 
                        action
                        onClick={()=>selectChatIndex(index)}
                        active={chat.selected}
                        className="text-left"
                    >
                        {chat.Chat.map(cha=>(cha.username)).join(', ')}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    )
}

export default Chats
