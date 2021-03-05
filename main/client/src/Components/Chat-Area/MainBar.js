import React, {useState, useContext} from 'react'
import { Form, InputGroup, Button} from 'react-bootstrap'
import { Context } from './Context/GlobalContext'

function MainBar() {

    const {createMessage, selectedChatIndex} = useContext(Context)
    const [text, setText] = useState('')

    function handleSubmit(e){
        e.preventDefault()

        setText('')
    }

    const message = selectedChatIndex.map((chat)=>{
        const contactId = chat.Chat.map(cha=>cha.id)
        return {id: contactId, message: text}
    })
    console.log(message)

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
