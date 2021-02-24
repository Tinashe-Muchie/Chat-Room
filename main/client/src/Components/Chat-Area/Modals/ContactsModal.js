import React, {useRef, useContext} from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { Context } from '../Context/GlobalContext'

function ContactsModal({handleClose}) {

    const idRef = useRef()
    const nameRef = useRef()
    const { createContact } = useContext(Context)

    function handleSubmit(e){
        e.preventDefault()

        createContact(idRef.current.value, nameRef.current.value)
        handleClose()
    }

    return (
        <div className="modal-wrapper">
        <Modal.Header closeButton>
                <Modal.Title>Create New Contact</Modal.Title>
            </Modal.Header>  
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Enter ID" ref={idRef}required/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Enter Username" ref={nameRef} required/>
                    </Form.Group>
                    <Button type="submit" variant="outline-primary" className="mb-3 float-right">
                        Save
                    </Button>
                </Form>
            </Modal.Body>
                
        </div>
    )
}

export default ContactsModal
