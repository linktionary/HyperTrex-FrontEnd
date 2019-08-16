import React, {useEffect} from 'react'
import CardCreator from '../cards/CardCreator'

function CardDisplay(props) {
    
    useEffect(() => {

    }, [props.cardList])
    
    return (
        <div className='card-container'>
            {props.filteredCardList.map(data => {
                return <CardCreator data={data} />
            })}
        </div>

    )
}

export default CardDisplay