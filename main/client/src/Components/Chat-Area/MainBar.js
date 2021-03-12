import React, {useState, useContext} from 'react'
import { Form, InputGroup, Button} from 'react-bootstrap'
import { Context } from './Context/GlobalContext'

function MainBar({id}) {

    const {createMessage, selectedChatIndex, Message} = useContext(Context)
    const [text, setText] = useState('')


    function handleSubmit(e){
        e.preventDefault()
        sendMessage()
        setText('')
    }

    function addMessageToChat(recipientIds, text, sender){
        const newMessage = {sender, text}
        const messageExists = Message.map((msg)=>msg.recipients).includes(recipientIds)

        if(messageExists){

            const msgs = Message.map((msg)=>msg.recipients).findIndex((recipient)=>{return recipient===recipientIds})
            const {messages} = Message[msgs]
            messages.push(newMessage) 

        } else {

            const message = {recipients: recipientIds, messages: [newMessage]}
            createMessage(message)

        }    
    }

    function sendMessage(){
        addMessageToChat(selectedChatIndex, text, id)
    }

    const messageExists = Message.map((msg)=>msg.recipients).includes(selectedChatIndex)
    if(messageExists){
            var msgs = Message.map((msg)=>msg.recipients).findIndex((recipient)=>{return recipient===selectedChatIndex})
            var {messages} = Message[msgs]
        }
    console.log(messages)
    return (
        <div className="d-flex flex-column flex-grow-1 ml-1">
            <Button variant="outline-primary" type="submit" className="float-right my-1" size="small">
                Logout
            </Button>
            <div className="tab-content flex-grow-1 overflow-auto mb-1">
                <div className="d-flex flex-column align-items-start justify-content-end px-2">
                    {messages && messages.map((msg, index)=>{
                        return (
                            <div
                            key={index}
                            className={`my-1 d-flex flex-column ${(msg.sender === id) ? 'align-self-end' : ''}`}
                            >
                                <div className = "rounded bg-dark px-2 py-1">
                                    {msg.text}
                                </div>
                                <div className = {`small ${(msg.sender===id) ? 'text-right': ''}`}>

                                    {   
                                        (msg.sender === id)
                                        ? 'You'
                                        :msg.sender
                                    }
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <InputGroup>
                        <Form.Control
                            as="textarea"
                            required
                            value={text}
                            onChange={(e)=>setText(e.target.value)}
                            style={{height:'10vh',resize:'none'}}
                        />
                        <InputGroup.Append>
                            <Button type="submit">Send</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Form.Group>
            </Form>
        </div>
    )
}

export default MainBar
