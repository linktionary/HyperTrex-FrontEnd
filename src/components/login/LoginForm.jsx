import React from 'react'
import './LoginForm.scss'

function LoginForm() {
    return (
        <div id='login-form'>
            <h1>Login</h1>
            <form>

                <input placeholder='Email' className='text-input'></input>
                <input type="password" placeholder='Password' className='text-input'></input>
                <div className='keep-signed-in'>
                    <input type='checkbox'></input>
                    <label>Keep me logged in.</label>
                </div>
                <button>Sign in to HyperTrex</button>
            </form>
        </div>
    )
}


export default LoginForm