import React from 'react'
import {Helmet} from 'react-helmet'
import SideBar from './SideBar'
import MainBar from './MainBar'

function ChatArea() {
    return (
        <div>
           <Helmet>
                <style>{'body {background-color: #222629}'}</style>
           </Helmet>
            <div className="d-flex container" style= {{height: '100vh' }}>
                <SideBar />
                <MainBar />
            </div>
        </div>
    )
}

export default ChatArea
