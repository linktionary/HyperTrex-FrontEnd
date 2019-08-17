import React from 'react'
import CardCreator from '../cards/CardCreator'

function CardDisplay(props) {
    

    
    return (
        <div className='card-container'>
            {props.filteredCardList.map(data => {
                return <CardCreator data={data} cardSize={props.cardSize}/>
            })}
        </div>
    )
}

export default CardDisplay