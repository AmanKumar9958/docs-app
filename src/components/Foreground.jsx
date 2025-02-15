import React from 'react'
import Card from './Card'
import Add from './Add'
import { useState } from 'react'

const Foreground = () => {
    const [cards, setCards] = useState([
        {
            description: "My name is Aman Kumar",
        }
    ]);

    const addNewCard = (newCard) => {
        setCards([...cards, newCard]);
    }

    return (
        <div className='w-full h-screen z-[3] fixed top-0 left-0 flex flex-wrap gap-5 overflow-y-scroll'>
            {cards.map((item, index) => (
                <Card key={index} data={item} />
            ))}

            <Add addNewCard={addNewCard}/>
        </div>
    )
}

export default Foreground