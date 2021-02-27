import React, {useContext, useState} from 'react'
import {Modal, Form, Button} from 'react-bootstrap'
import {Context} from '../Context/GlobalContext'

function ChatsModal({handleClose}) {

    const {Contacts, createChats} = useContext(Context)
    const [selectedId, setSelectedId] = useState([])  

    function handleSubmit(e){
        e.preventDefault()
        createChats(Chats)
        handleClose()
    }
    function handleChangeContact(id){
        setSelectedId((prevSelectedId)=>{
            if(prevSelectedId.includes(id)){
                return selectedId.filter((prevId)=>{
                    return prevId !== id
                })
            } else {
                return [...prevSelectedId, id]
            }
        })
    }
    
    const Chats =  selectedId.map((selected)=>{
        const contact = Contacts.find(({id})=>{
            return selected === id
        })
        const name = (contact && contact.username) || selected
        return {id: selected, username: name}
    })
    
    return (
        <div className="modal-wrapper">
            <Modal.Header closeButton>
                <Modal.Title>Create New Chat</Modal.Title>
            </Modal.Header>  
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    {Contacts.map((contact)=>(
                        <Form.Group controlledId={contact.id} key={contact.id}>
                            <Form.Check
                                type="checkbox"
                                label={contact.username}
                                value={selectedId}
                                onChange={()=>{
                                    handleChangeContact(contact.id)
                                }}
                            />
                        </Form.Group>
                    ))}
                    
                    <Button type="submit" variant="outline-primary" className="mb-3 float-right">
                        Create
                    </Button>
                </Form>
            </Modal.Body> 
        </div>
    )
}

export default ChatsModal
