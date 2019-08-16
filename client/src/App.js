import React, {useState, useEffect} from 'react';

//Component imports
import Nav from './components/Nav'
import LoginPage from './components/login/LoginPage'
import CardDisplay from './components/cardDisplay/CardDisplay'
import ClipboardNav from './components/clipboardNav/ClipboardNav'
import AddCardModal from './components/addCardModal/AddCardModal'

//Data and stylesheets
import './App.scss';
import {testData} from './data/languageData'

function App() {
  
  const [cardList, setCardList] = useState(testData)
  const [filteredCardList, setFilteredCardList] = useState(cardList)
  const [cardSize, setCardSize] = useState('regular')
  const [addingCard, toggleAddingCard] = useState(true);

  useEffect(() => {
    
  }, [cardList])

  console.log(cardList)
  
  return (
    <div className="App">

      <Nav />

      <ClipboardNav 
        setFilteredCardList={setFilteredCardList} 
        cardList={cardList} 
        setCardSize={setCardSize}
        toggleAddingCard={toggleAddingCard}
      />

      <CardDisplay 
        filteredCardList={filteredCardList}
        cardSize={cardSize}
        cardList={cardList}  
      />


      <AddCardModal 
        toggleAddingCard={toggleAddingCard} 
        addingCard={addingCard}
        cardList={cardList}
        setCardList={setCardList}
      />

      {/* <LoginPage/> */}

    </div>
  );
}

export default App;
