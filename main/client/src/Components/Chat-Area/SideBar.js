import React, {useState} from 'react'
import {Tab, Nav, Button, Modal} from 'react-bootstrap'
import Chats from './Tabs/Chats'
import Contacts from './Tabs/Contacts'
import History from './Tabs/History'
import ContactsModal from './Modals/ContactsModal'
import ChatsModal from './Modals/ContactsModal'
import HistoryyModal from './Modals/HistoryyModal'

function SideBar() {
    const Chats_Key = 'chats';
    const Contacts_Key = 'contacts'
    const History_Key = 'history'

    const [key, setKey] = useState(Chats_Key)
    const [show, setShow] =useState(false)

    const chatOpen = key === Chats_Key
    const contactsOpen = key === Contacts_Key
    const handleClose = ()=> setShow(false)
    
    return (
        <div style={{width:'20vw'}} className="d-flex flex-column">
            <Tab.Container activeKey= {key} onSelect= {(k)=>setKey(k)}>
                <Nav variant="tabs" className="justify-content-center">
                    <Nav.Item>
                        <Nav.Link eventKey={Chats_Key}>Chats</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={Contacts_Key}>Contacts</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={History_Key}>History</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content className="tab-content overflow-auto flex-grow-1">
                    <Tab.Pane eventKey={Chats_Key}>
                        <Chats />
                    </Tab.Pane>
                    <Tab.Pane eventKey={Contacts_Key}>
                        <Contacts />
                    </Tab.Pane>
                    <Tab.Pane eventKey={History_Key}>
                        <History />
                    </Tab.Pane>
                </Tab.Content>
                <div className="id-tab mt-1 text-small text-muted">
                    Your ID: <span></span>
                </div>
                <Button className="my-1" onClick={()=>setShow(true)} variant="outline-primary">
                    {
                          (chatOpen) ?  'New Chat'
                        : (contactsOpen) ? 'New Contact'
                        : 'History'
                    }
                </Button>
                </Tab.Container>
                <Modal show={show} onHide={handleClose}>
                    {
                          (chatOpen) ? <ChatsModal handleClose={handleClose} />
                        : (contactsOpen) ? <ContactsModal handleClose={handleClose}/>
                        : <HistoryyModal />
                    }
                </Modal>
        </div>
    )
}

export default SideBar
