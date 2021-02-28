import React, {useContext} from 'react'
import {ListGroup} from 'react-bootstrap'
import { Context } from '../Context/GlobalContext'

function Contacts() {

    const { Contacts } = useContext(Context)

    return (
        <div>
            <ListGroup variant="flush">
                {Contacts.map((contact)=>{
                    return (
                    <ListGroup.Item 
                        key={contact.id} 
                        className="list-item-wrapper text-left"
                    >
                        {contact.username}
                    </ListGroup.Item>
                )})
            }
            </ListGroup>
        </div>
    )
}

export default Contacts
