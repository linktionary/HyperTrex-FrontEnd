import React, {useState, useEffect} from 'react';
import { typeArr } from '../../data/languageData'
import './ClipboardNav.scss'




function ClipboardNav(props) {
    
    const [filterData, setFilterData] = useState({language: 'all', size: 'regular', display: 'both', search: ''})
    
    useEffect(() => {
        if (filterData.search.length > 0) {
            props.setFilteredCardList(props.cardList.filter(card => 
                card.name.toLowerCase().includes(filterData.search.toLowerCase()) ||
                card.description.toLowerCase().includes(filterData.search.toLowerCase())
            ))
        } else if (filterData.language == 'all') {
            props.setFilteredCardList(props.cardList)
        } else {
            props.setFilteredCardList(props.cardList.filter(card => card.type == filterData.language))
        }
        props.setCardSize(filterData.size)
    }, [filterData, props.cardList])
    
    function handleChanges(event) {
        setFilterData({...filterData, [event.target.name]: event.target.value})
    }

    function beginAdding() {
        props.toggleAddingCard(true)
    }

    return (
        <>
        <div className='clipboard-nav'>
            <div>
                <label>Filter: </label>
                <select name="language" defaultValue='all' onChange={handleChanges}>
                    <option value='all'>All</option>
                    {Object.keys(typeArr).map(key => {
                        return <option key={key} value={key}>{key.charAt(0).toUpperCase()+key.substring(1)}</option>
                    })}
                </select>
                <label>Size: </label>
                <select name="size" defaultValue='regular' onChange={handleChanges}>
                    <option value="compact">Compact</option>
                    <option value="regular">Regular</option>
                    <option value="large">Large</option>
                </select>
                <label>Display: </label>
                <select name="display" defaultValue='both'>
                    <option value='both'>Both</option>
                    <option value="public">Only Public</option>
                    <option value="private">Only Private</option>
                </select>
            </div>
            <div className='align-center'>
            <input name='search' type='search' placeholder='🔎Search your links..' onChange={handleChanges}></input>
            <div className='create-card-button' onClick={beginAdding}>+</div>
            </div>
        </div>
        <hr className='nav-hr'/>
        </>
    )
}

export default ClipboardNav