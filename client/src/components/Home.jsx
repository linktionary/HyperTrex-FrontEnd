import React from 'react';
import CardDisplay from './cardDisplay/CardDisplay'
import ClipboardNav from './clipboardNav/ClipboardNav'
import AddCardModal from './addCardModal/AddCardModal'

function Home (props) {

	return (
		<>
			<ClipboardNav 
        setFilteredCardList={props.setFilteredCardList} 
        cardList={props.cardList} 
        setCardSize={props.setCardSize}
        toggleAddingCard={props.toggleAddingCard}
      />

      <CardDisplay 
        filteredCardList={props.filteredCardList}
        cardSize={props.cardSize}
      />


      <AddCardModal 
        toggleAddingCard={props.toggleAddingCard} 
        addingCard={props.addingCard}
        cardList={props.cardList}
        setCardList={props.setCardList}
      />
		</>
	)
}

export default Home;