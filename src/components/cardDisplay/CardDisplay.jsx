import React from 'react'
import CardCreator from '../cards/CardCreator'


function CardDisplay(props) {
    

    console.log("FROM CARD DISPLAY COMPONENT", props.filteredCardList)
    return (
        <div className='card-container'>
            {props.filteredCardList.map(data => {
                return <CardCreator key={data.id} data={data} cardSize={props.cardSize}/>
            })}
        </div>
    )
}

export default CardDisplay