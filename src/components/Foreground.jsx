import React, { useEffect } from 'react'
import Card from './Card'
import Add from './Add'
import { useState } from 'react'

const Foreground = () => {
    const [cards, setCards] = useState([]);

    // loading data from the local storage..
    useEffect(() => {
        const savedCards = JSON.parse(localStorage.getItem("cards"));
        if (savedCards) {
            setCards(savedCards);
        }
    }, []);

    // update localstorage whenever changes made..
    useEffect(() => {
        if(cards.length > 0){
            localStorage.setItem("cards", JSON.stringify(cards));
        }
    }, [cards]);

    // const addNewCard = (newCard) => {
    //     setCards([...cards, newCard]);
    // }

    return (
        <div className='w-full h-screen z-[3] fixed top-0 left-0 flex flex-wrap gap-5 overflow-y-scroll'>
            {cards.map((item, index) => (
                <Card key={index} data={item} />
            ))}

            <Add setCards={setCards}/>
        </div>
    )
}

export default Foreground