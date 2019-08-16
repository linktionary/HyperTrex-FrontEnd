import React, {useState} from 'react';

//Component imports
import Nav from './components/Nav'
import CardDisplay from './components/cardDisplay/CardDisplay'
import ClipboardNav from './components/clipboardNav/ClipboardNav'

//Data and stylesheets
import './App.scss';
import {testData} from './data/languageData'

function App() {
  
  const [cardList, setCardList] = useState(testData)
  const [filteredCardList, setFilteredCardList] = useState(cardList)
  

  console.log(cardList)
  
  return (
    <div className="App">

      <Nav />
      <ClipboardNav setFilteredCardList={setFilteredCardList} cardList={cardList}/>
      <CardDisplay filteredCardList={filteredCardList}/>

    </div>
  );
}

export default App;
