// Lib Imports
import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

//Component imports
// import Nav from './components/Nav'
import LoginPage from './components/login/LoginPage'
import Nav from './components/nav'
import Home from './components/Home'
import Atlas from './components/atlas/Atlas'

//Data and stylesheets
import './App.scss';
import { testData, welcome } from './data/languageData'

function App() {

	const [cardList, setCardList] = useState(localStorage.getItem('localCardList') ? JSON.parse(localStorage.getItem('localCardList')) : welcome)
	const [filteredCardList, setFilteredCardList] = useState(cardList)
	const [cardSize, setCardSize] = useState('regular')
	const [addingCard, toggleAddingCard] = useState(false);
	const [editingCard, toggleEditingCard] = useState(false);

	useEffect(() => {
		localStorage.setItem('localCardList', JSON.stringify(cardList))
	}, [cardList])

	function deleteCard(id) {

		console.log("THIS IS FROM THE DELETE FUNCTION", id)
		setCardList(cardList.filter(card => card.id !== id))

	}

	console.log(cardList)

	return (
		<div className="App">
			<Nav />

			{/* Home Page Route */}
			<Route exact path="/clipboard" render={() => {
				return <Home
					setCardList={setCardList}
					setFilteredCardList={setFilteredCardList}
					cardList={cardList}
					setCardSize={setCardSize}
					toggleAddingCard={toggleAddingCard}
					filteredCardList={filteredCardList}
					cardSize={cardSize}
					addingCard={addingCard}
					deleteCard={deleteCard}
				/>
			}} />

			<Route exact path="/" render={() => <Atlas />} />

			{/* Route to Login Page */}
			<Route exact path="/login" render={() => <LoginPage />} />


		</div>
	);
}

export default App;
