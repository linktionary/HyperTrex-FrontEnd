import React from 'react';
import './App.scss';
import Nav from './components/Nav'
import CardCreater from './components/cards/CardCreator'
import ClipboardNav from './components/clipboardNav/ClipboardNav'

import {testData} from './data/languageData'

function App() {
  return (
    <div className="App">

      <Nav />
      <ClipboardNav/>
<div className='card-container'>
{testData.map(data => {
    return <CardCreater data={data}/>
})}
</div>

    </div>
  );
}

export default App;
