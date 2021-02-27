import React, {useContext} from 'react'
import {ListGroup} from 'react-bootstrap'
import {Context} from '../Context/GlobalContext'

function Chats() {

    const {Chats} = useContext(Context)

    return (
        <div>
             <ListGroup variant="flush">
                {Chats.map((chat, index)=>(
                    <ListGroup.Item 
                        key={index} 
                        action
                        active={chat.selected}
                        className="list-item-wrapper text-left"
                    >
                            {[chat.map(cha=>(cha.username)).join(',')]}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    )
}

export default Chats
