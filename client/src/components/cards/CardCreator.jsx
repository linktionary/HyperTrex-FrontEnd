import React from 'react';

import './CardCreator.scss'

import {typeArr} from '../../data/languageData'
function CardCreator(props) {
    
    //dynamic card styling
    const card_style = {
        borderBottom: `5px solid ${typeArr[props.data.type].accentColor}`,
    }
    const button_style = {
        background: typeArr[props.data.type].accentColor
    }

    return(
        <div style={card_style} className='card'>
            
            <div className='card-header'>
                <h2>{props.data.name}</h2>
                {/*render card with the url that matches the type*/}
                <img className='card-img' src={typeArr[props.data.type].imgUrl}/>
            </div>
            
            <hr/>
            <p>{props.data.description}</p>
            <hr/>
            
            <div className='button-container'>
                <button style={button_style} className='link-button'>Open Link</button>
            </div>

        </div>
    )

}

export default CardCreator