import React, {useEffect} from 'react';

import './CardCreator.scss'

import {typeArr} from '../../data/languageData'

function CardCreator(props) {
    
    // useEffect(() => {

    // },[props.cardSize])
    
    //dynamic card styling
    const card_style = {
        borderBottom: `5px solid ${typeArr[props.data.type].accentColor}`,
    }
    const button_style = {
        background: typeArr[props.data.type].accentColor
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
            
            <div className='button-container'>
                <a href="#" target="_blank"><button style={button_style} className='link-button'>Open Link</button></a>
            </div>

        </div>
    )

}

export default CardCreator