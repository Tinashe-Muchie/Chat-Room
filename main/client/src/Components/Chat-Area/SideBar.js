import React, {useState} from 'react'
import {Tabs, Tab} from 'react-bootstrap'
import Chats from './Chats'
import Contacts from './Contacts'
import History from './History'

function SideBar() {
    const Chats_Key = 'chats';
    const Contacts_Key = 'contacts'
    const History_Key = 'history'
    const [key, setKey] = useState(Chats_Key)
    

    return (
        <div style={{width:'20vw'}} className="d-flex flex-column">
            <div className="border overflow-auto flex-grow-1 mt-2">
                <Tabs
                    id="controlled-tab"
                    activeKey= {key}
                    onSelect= {()=>setKey()}
                    className="justify-content-around"
                >
                    <Tab eventKey={Chats_Key} title="Chats">
                        <Chats />
                    </Tab>
                    <Tab eventKey={Contacts_Key} title="Contacts">
                        <Contacts />
                    </Tab>
                    <Tab eventKey={History_Key} title="History">
                        <History />
                    </Tab>
                </Tabs>
            </div>
            
        </div>
    )
}

export default SideBar
