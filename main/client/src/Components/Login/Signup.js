import React, {useRef} from 'react'
import { v4 as uuidv4 } from 'uuid'

function Signup({onIdSubmit}) {
    
    const idRef = useRef()

    function handleSubmit(e){
        e.preventDefault()

        onIdSubmit(idRef.current.value)
        idRef.current.value = null
    }
    
    function generateID(){
        onIdSubmit(uuidv4())
    }

    return (
        <div>
            <div className="container">
                <form onSubmit={handleSubmit} className="form-wrapper">
                <div className="form-group mb-4">
                    <input 
                        type="text" 
                        id="username"
                        ref = {idRef}
                        placeholder="Enter your ID"
                        className="form-control-lg"
                    />
                </div>
                <div>
                    <button type="submit" className="btn btn-outline-primary mx-2">Login</button>
                    <button type="button" className="btn btn-primary mx-2" onClick={generateID}>Autogenerate Id</button>
                </div>   
                </form>
            </div>   
        </div>
    )
}

export default Signup
