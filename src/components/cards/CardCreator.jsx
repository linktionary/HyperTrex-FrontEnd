import React, {useState, useEffect} from 'react';

import './CardCreator.scss'

import {typeArr} from '../../data/languageData'

function CardCreator(props) {

    
    const [moreOptions, setMoreOptions] = useState(false)
    const [deleteMode, setDeleteMode] = useState(false)

    useEffect(() => {
        
    }, [])



    const card_style = {
        borderBottom: `5px solid ${typeArr[props.data.type].accentColor}`,
    }
    
    const button_style = {
        background: typeArr[props.data.type].accentColor
    }
    
    const dot_style = {
        color: typeArr[props.data.type].accentColor
    }

    const display_none = {
        display: 'none'
    }

    //this function on click invokes a method in app.js that removes a card based upon its id
    function deleteHandler() {
        props.deleteCard(props.data.id);
    }

    console.log("FROM CARD CREATOR", props.data.id);
    return(
        <div style={card_style} className={`card-${props.cardSize}`}>
            
            <div className='card-header'>
                <h2>{props.data.name}</h2>
                {/*render card with the url that matches the type*/}
                <img className='card-img' src={typeArr[props.data.type].imgUrl}/>
            </div>
            
            <hr/>
            
            <p>{props.data.description}</p>
            
            <hr/>
            
            <div style={moreOptions ? display_none : null } className='button-container'>
                <a 
                    href={props.data.link} 
                    target="_blank">
                    <button style={button_style} className='link-button'>Open Link</button>
                </a>
                <button style={dot_style} onClick={() => setMoreOptions(true)} className="more-options">•••</button>
            </div>

            <div style={!moreOptions ? display_none : null } className='button-container'>
                <button className="edit-button" style={button_style}>Edit</button>
                <div className="delete-container">

                    <button 
                        className="delete-button" 
                        style={deleteMode ? display_none : null}
                        onClick={() => setDeleteMode(true)}>
                        Delete
                    </button>

                    <button 
                        className="confirm-delete"
                        style={!deleteMode ? display_none : null } 
                        onClick={deleteHandler}>
                        ✔
                    </button>

                    <button
                        className="cancel-delete" 
                        style={!deleteMode ? display_none : null }
                        onClick={() => {
                            setDeleteMode(false);
                        }}
                        >✖</button>
                </div>
                <button 
                    className="less-options" 
                    style={dot_style} 
                    onClick={() => {
                        setMoreOptions(false)
                        setDeleteMode(false)
                    }}>
                    ✖
                    </button>
            </div>

        </div>
    )

}

export default CardCreator

