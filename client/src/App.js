import React from 'react';
import './App.scss';
import Nav from './components/Nav'
import CardCreater from './components/cards/CardCreator'

const testData = [
  {
  name: 'React Docs',
  type: 'react',
  description: 'lorem ipsum dolar sit amet.lorem ipsum dolar sit amet.lorem ipsum dolar sit amet.lorem ipsum dolar sit amet.lorem ipsum dolar sit amet.lorem ipsum dolar sit amet.lorem ipsum dolar sit amet.'
  },
  {
  name: 'HTML Docs',
  type: 'html',
  description: 'lorem ipsum dolar sit amet.lorem ipsum dolar sit amet.lorem ipsum dolar sit amet.lorem ipsum dolar sit amet.lorem ipsum dolar sit amet.lorem ipsum dolar sit amet.lorem ipsum dolar sit amet.'
  },
  {
  name: 'CSS Docs',
  type: 'css',
  description: 'lorem ipsum dolar sit amet.lorem ipsum dolar sit amet.lorem ipsum dolar sit amet.lorem ipsum dolar sit amet.lorem ipsum dolar sit amet.lorem ipsum dolar sit amet.lorem ipsum dolar sit amet.'
  },
  {
  name: 'Javascript Docs',
  type: 'javascript',
  description: 'lorem ipsum dolar sit amet.lorem ipsum dolar sit amet.lorem ipsum dolar sit amet.lorem ipsum dolar sit amet.lorem ipsum dolar sit amet.lorem ipsum dolar sit amet.lorem ipsum dolar sit amet.'
  },
  {
  name: 'Python Docs',
  type: 'python',
  description: 'lorem ipsum dolar sit amet.lorem ipsum dolar sit amet.lorem ipsum dolar sit amet.lorem ipsum dolar sit amet.lorem ipsum dolar sit amet.lorem ipsum dolar sit amet.lorem ipsum dolar sit amet.'
  },
]

function App() {
  return (
    <div className="App">

      <Nav />
<div className='card-container'>
{testData.map(data => {
    return <CardCreater data={data}/>
})}
</div>

    </div>
  );
}

export default App;
