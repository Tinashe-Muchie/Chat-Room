import React from 'react'

function Signup() {
    return (
        <div className="container">
            <form className="border border-primary rounded py-5">
            <div className="form-group mb-3">
                <input 
                    type="text" 
                    id="username"
                    placeholder="Username"
                    className="form-control-lg"
                />
            </div>
            <div className="form-group mb-5">
                <input 
                    type="password"
                    id="password"
                    placeholder="Password"
                    className="form-control-lg"
                />
            </div>
            <div>
                <button type="submit" className="btn btn-outline-primary mx-2">Login</button>
                <button type="submit" className="btn btn-primary mx-2">Signup</button>
            </div>   
            </form>
        </div>
    )
}

export default Signup
