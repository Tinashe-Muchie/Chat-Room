import React from 'react'
import {Helmet} from 'react-helmet'
import SideBar from './SideBar'

function ChatArea() {
    return (
        <div>
            <Helmet>
                <style>{'body {background-color: #222629}'}</style>
            </Helmet>
            <div className="d-flex container border" style= {{height: '100vh' }}>
                <SideBar />
            </div>
        </div>
    )
}

export default ChatArea
