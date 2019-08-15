import React from 'react';
import { typeArr } from '../../data/languageData'
import './ClipboardNav.scss'



function ClipboardNav() {
    return (
        <>
        <div className='clipboard-nav'>
            <div>
                <label>Filter: </label>
                <select name="language">
                    <option value="all" selected>All</option>
                    {Object.keys(typeArr).map(key => {
                        return <option key={key} value={key}>{key.charAt(0).toUpperCase()+key.substring(1)}</option>
                    })}
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