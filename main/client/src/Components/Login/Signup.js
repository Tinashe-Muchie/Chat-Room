import React, {useState} from 'react'
import axios from 'axios'

function Signup() {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    function Signup(e) {
        e.preventDefault();

        axios.post('http://localhost:9000/users/signup', {
            username: username,
            password: password,
        })
            .then((res)=>{
                console.log(res)
            })
            .catch((error)=>{
                console.error(error)
            })
        
        setUsername('');
        setPassword('');
    }

    function Login(e) {
        e.preventDefault()

        axios.post('http://localhost:9000/users/login', {
            username: username,
            password: password,
        })
            .then(res=>{console.log(res)})
            .catch(error=>{
                console.error(error)
            })
    }

    return (
        <div>
            <div className="container">
                <form className="form-wrapper">
                <div className="form-group mb-3">
                    <input 
                        type="text" 
                        id="username"
                        placeholder="&#61447; username"
                        value= {username}
                        onChange = {(e)=>{setUsername(e.target.value)}}
                        className="form-control-lg"
                    />
                </div>
                <div className="form-group mb-5">
                    <input 
                        type="password"
                        id="password"
                        placeholder="&#xf023; password"
                        value= {password}
                        onChange = {(e)=>{setPassword(e.target.value)}}
                        className="form-control-lg"
                    />
                </div>
                <div>
                    <button type="submit" className="btn btn-outline-primary mx-2" onClick={Login}>Login</button>
                    <button type="submit" className="btn btn-outline-primary mx-2" onClick={Signup}>Signup</button>
                </div>   
                </form>
            </div>   
        </div>
    )
}

export default Signup
