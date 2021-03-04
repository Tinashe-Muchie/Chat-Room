import React, {useContext} from 'react'
import {ListGroup} from 'react-bootstrap'
import {Context} from '../Context/GlobalContext'

function Chats() {

    const {Chats, selectChatIndex,chats} = useContext(Context)
    //const chats_s = [...chats].pop()
    //const cha = chats_s.map((ch)=>ch.selected)
    //console.log(cha)
    return (
        <div>
             <ListGroup variant="flush">
                {Chats.map((chat, index)=>(
                    <ListGroup.Item 
                        key={index} 
                        action
                        onClick={()=>selectChatIndex(index)}
                        className="list-item-wrapper text-left"
                    >
                            {chat.map(cha=>(cha.username)).join(', ')}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    )
}

export default Chats
