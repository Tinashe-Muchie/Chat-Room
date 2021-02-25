import React, {useContext} from 'react'
import {ListGroup} from 'react-bootstrap'
import {Context} from '../Context/GlobalContext'

function Chats() {

    const {Chats} = useContext(Context)

    return (
        <div>
             <ListGroup variant="flush">
                {Chats.map((chat)=>(
                    <ListGroup.Item 
                        key={0} 
                        action
                        active
                        onClick
                        className="list-item-wrapper text-left"
                    >
                            {chat.username.join(',')}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    )
}

export default Chats
