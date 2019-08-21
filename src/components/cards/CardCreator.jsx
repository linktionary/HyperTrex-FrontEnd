import React, {useState, useEffect} from 'react';

import './CardCreator.scss'

import {typeArr} from '../../data/languageData'

function CardCreator(props) {

    
    const [moreOptions, setMoreOptions] = useState(false)

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
                <button className="delete-button">Delete</button>
                <button className="less-options" style={dot_style} onClick={() => setMoreOptions(false)}>✖</button>
            </div>

        </div>
    )

}

export default CardCreator