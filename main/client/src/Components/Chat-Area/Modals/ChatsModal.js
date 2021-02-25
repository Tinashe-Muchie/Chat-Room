import React, {useContext, useState} from 'react'
import {Modal, Form, Button} from 'react-bootstrap'
import {Context} from '../Context/GlobalContext'

function ChatsModal({handleClose}) {

    const {Contacts, createChat} = useContext(Context)
    const [selectedId, setSelectedId] = useState([]) 
    const [selectedUsername, setSelectedUsername] = useState([]) 

    function handleSubmit(e){
        e.preventDefault()
        createChat(selectedId, selectedUsername)
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
    function handleChangeUsername(username){
        setSelectedUsername((prevSelectedUsername)=>{
            if(prevSelectedUsername.includes(username)){
                return selectedId.filter((prevUsername)=>{
                    return prevUsername !== username
                })
            } else {
                return [...prevSelectedUsername, username]
            }
        })
    }
    
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
                                    handleChangeUsername(contact.username)
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
