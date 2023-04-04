import React from "react";

const Login = ({username,setUsername,password,setPassword, setLoggedIn}) => {
    const handleLogin = (e) => { 
        e.preventDefault()
        if (username!=="" && password!=="") {
            setLoggedIn(true)
            console.log("helo word")
        }
    }
    return (
        <div id="loginMain">
            <h3>Login or Create an Account</h3>
            <form onSubmit={e=>{handleLogin(e)}}>
                <input 
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                />
                <input 
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                />
                <button id="loginSubmit" type="submit">Login</button>
            </form>
        </div>

        )
}

export default Login