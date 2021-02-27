import React, {useState} from 'react'
import {Tab, Nav, Button, Modal, Navbar} from 'react-bootstrap'
import Chats from './Tabs/Chats'
import Contacts from './Tabs/Contacts'
import ContactsModal from './Modals/ContactsModal'
import ChatsModal from './Modals/ChatsModal'

function SideBar() {
    const Chats_Key = 'chats';
    const Contacts_Key = 'contacts'

    const [key, setKey] = useState(Chats_Key)
    const [show, setShow] =useState(false)

    const chatsOpen = key === Chats_Key
    const handleOpen = ()=> setShow(true)
    const handleClose = ()=> setShow(false)
    
    return (
        <div style={{width:'20vw'}} className="d-flex flex-column">
            <Tab.Container activeKey= {key} onSelect= {(k)=>setKey(k)}>
                <Nav justify variant="pills" className="my-1">
                    <Nav.Item>
                        <Nav.Link eventKey={Chats_Key}>Chats</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={Contacts_Key}>Contacts</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content className="tab-content overflow-auto flex-grow-1">
                    <Tab.Pane eventKey={Chats_Key}>
                        <Chats />
                    </Tab.Pane>
                    <Tab.Pane eventKey={Contacts_Key}>
                        <Contacts />
                    </Tab.Pane>
                </Tab.Content>
                <div className="id-tab mt-1 text-small text-muted">
                    Your ID: <span></span>
                </div>
                <Button className="mt-1 mb-3" onClick={handleOpen} variant="outline-primary">
                    {
                        (chatsOpen) 
                        ?  'New Chat'
                        :  'New Contact'
                    }
                </Button>
                </Tab.Container>
                <Modal show={show} onHide={handleClose}>
                    {
                        (chatsOpen) 
                        ? <ChatsModal handleClose={handleClose} />
                        : <ContactsModal handleClose={handleClose} />
                    }
                </Modal>
        </div>
    )
}

export default SideBar
