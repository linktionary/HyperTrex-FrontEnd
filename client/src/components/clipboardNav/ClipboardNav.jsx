import React from 'react';

import './ClipboardNav.scss'

function ClipboardNav() {
    return (
        <>
        <div className='clipboard-nav'>
            <div>
                <label>Filter: </label>
                <select name="language">
                    <option value="all" selected>All</option>
                    <option value="javascript">Javascript</option>
                    <option value="css">CSS</option>
                    <option value="html">Html</option>
                    <option value="python">Python</option>
                </select>
                <label>Size: </label>
                <select name="size">
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large" selected>Large</option>
                </select>
                <label>Display: </label>
                <select name="display">
                    <option value="both" selected>Both</option>
                    <option value="public">Only Public</option>
                    <option value="private">Only Private</option>
                </select>
            </div>
            <div className='align-center'>
            <input type='search' placeholder='🔎Search your links..'></input>
            <button>+</button>
            </div>
        </div>
        <hr className='nav-hr'/>
        </>
    )
}

export default ClipboardNav