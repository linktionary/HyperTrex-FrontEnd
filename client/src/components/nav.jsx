import React from 'react'
import img from '../assets/logo.gif'
import {Link} from 'react-router-dom'

const nav_container = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 15px 10px 15px',
    background: 'black'
}

const nav_logo = {
    lineHeight: '0',
    color: 'white',
    fontFamily: 'Raleway',
}

const nav_style = {
    display: 'flex',
}

const nav_link = {
    marginRight: '10px', 
    textDecoration: 'none',
    fontSize: '20px',
    color: 'white',
    transition: '.5s',
    borderBottom: '1px solid black',
    fontFamily: 'Raleway'
}

const logo_container = {
    display: 'flex',
    alignItems: 'baseline'
}

const nav_logo_img = {
    width: '43px',
    height: '42px',
    
}

function Nav() {

    return(

        <div style={nav_container}>
            <div style={logo_container}>
                <img style={nav_logo_img} src={img}/>
                <h1 style={nav_logo}>Hyper<b>Trex</b></h1>
            </div>
            <nav style={nav_style}>
                <Link style={nav_link} to="/">Atlas</Link>
                <Link style={nav_link} to='/clipboard'>Clipboard</Link>
                <Link style={nav_link} to='/login'>Login</Link>
            </nav>
        </div>

    )

}

export default Nav

