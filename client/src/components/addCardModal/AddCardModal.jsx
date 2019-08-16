import React, {useState} from 'react'
import { typeArr } from '../../data/languageData'
import './AddCardModal.scss'



function AddCardModal(props) {  
    
    const [newCardData, setNewCardData] = useState({name: '', type: '', description: ''})
    
    function handleChanges(event) {
        setNewCardData({...newCardData, [event.target.name] : event.target.value})
    }

    function submitChanges(event) {
        event.preventDefault()
        props.setCardList([...props.cardList, {...newCardData}])
        
    }

    
    function cancelAdding() {
        props.toggleAddingCard(false)
    }
    
    return(
        <>
        {props.addingCard !== false ? 
        
        
        <div id='modal-container'>
            <div id='modal-body'>
                <h2>Add a new link</h2>
                <form onSubmit={submitChanges}> 
                    <div className="top-inputs">
                    <input name='name' onChange={handleChanges} placeholder='Title'></input>
                    <select name='type' onChange={handleChanges}>
                    {Object.keys(typeArr).map(key => {
                        return <option key={key} value={key}>{key.charAt(0).toUpperCase()+key.substring(1)}</option>
                    })}
                    </select>
                    </div>
                    <textarea rows='10' name='description' onChange={handleChanges}placeholder='Describe your link (optional)'></textarea>
                    <button>Submit</button>
                </form>
            <div id='modal-background' onClick={cancelAdding}></div>
            </div>
        </div> 
        
        
        : null}
        </>
    )
}

export default AddCardModal