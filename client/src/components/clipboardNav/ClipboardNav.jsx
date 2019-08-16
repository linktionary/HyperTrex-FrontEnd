import React, {useState, useEffect} from 'react';
import { typeArr } from '../../data/languageData'
import './ClipboardNav.scss'




function ClipboardNav(props) {
    
    const [filterData, setFilterData] = useState({language: 'all', size: 'large', display: 'both'})
    
    useEffect(() => {
        if (filterData.language == 'all') {
            props.setFilteredCardList(props.cardList)
        } else {
            props.setFilteredCardList(props.cardList.filter(card => card.type == filterData.language))
        }
    }, [filterData])
    
    function handleChanges(event) {
        setFilterData({...filterData, [event.target.name]: event.target.value})
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
                <select name="size" defaultValue='large'>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
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
            <input type='search' placeholder='🔎Search your links..'></input>
            <button>+</button>
            </div>
        </div>
        <hr className='nav-hr'/>
        </>
    )
}

export default ClipboardNav