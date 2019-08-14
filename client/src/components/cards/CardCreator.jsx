import React from 'react';

import './CardCreator.scss'

const typeArr = {
    html :{ imgUrl: 'https://ui-ex.com/images/html5-svg-html-5.png', 
            accentColor: 'red'},
    react: {imgUrl: 'https://www.bryntum.com/wp-content/uploads/2018/10/reactlogo-400x357.png',
            accentColor: 'skyblue'},
    css: {imgUrl: 'https://files.gitter.im/scala-js/scala-js-website/iXXo/thumb/Shield-CSS.png',
            accentColor: 'blue'},
    javascript: {imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/dc/Javascript-shield.png',
            accentColor: 'gold'},
    python: {imgUrl: 'https://aptonic.com/blog/wp-content/uploads/2015/08/python-logo.png',
            accentColor: 'steelblue'}
}

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