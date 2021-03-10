import React, {useState, useContext} from 'react'
import { Form, InputGroup, Button} from 'react-bootstrap'
import { Context } from './Context/GlobalContext'

function equalityArray(a, b){
    if(a.length !== b.length) return false

    a.sort()
    b.sort()
    
    return a.every((item, index)=>{
        return item === b[index]
    })
}

function MainBar() {

    const {createMessage, selectedChatIndex, Message} = useContext(Context)
    const [text, setText] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        sendMessage()
        setText('')
    }

    const recipient = selectedChatIndex.map((chat)=>(chat.id))
    const msgs = Message.map((msg)=>msg.recipients).find((recipient)=>{return recipient===selectedChatIndex})
    console.log(msgs)

    function addMessageToChat(recipientIds, text, sender){
        const newMessage = {sender, text}
        const messageExists = Message.map((msg)=>msg.recipients).includes(recipientIds)

        if(messageExists){
            const msgs = Message.map((msg)=>msg.recipients).find((recipient)=>{return recipient===recipientIds})
        } else {
            const message = {recipients: recipientIds, messages: [newMessage]}
            createMessage(message)
        }    
    }

    function sendMessage(){
        addMessageToChat(selectedChatIndex, text)
    }

    return (
        <div className="d-flex flex-column flex-grow-1 ml-1">
            <Button variant="outline-primary" type="submit" className="float-right my-1" size="small">
                Logout
            </Button>
            <div className="tab-content flex-grow-1 overflow-auto mb-1">

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
