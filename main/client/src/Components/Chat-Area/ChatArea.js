import React, {useContext} from 'react'
import {Helmet} from 'react-helmet'
import SideBar from './SideBar'
import MainBar from './MainBar'
import { Context } from './Context/GlobalContext'

function ChatArea() {
    const {selectedChatIndex} = useContext(Context)
     
    return (
        <div>
           <Helmet>
                <style>{'body {background-color: #222629}'}</style>
           </Helmet>
            <div className="d-flex container" style= {{height: '100vh' }}>
                <SideBar />
                {selectedChatIndex && <MainBar />}
            </div>
        </div>
    )
}

export default ChatArea
