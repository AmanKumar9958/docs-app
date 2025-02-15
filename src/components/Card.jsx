import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import './card.css';

const Card = ({data}) => {
    return (
        <div className='relative w-56 h-64 rounded-[25px] bg-zinc-900/90 text-white p-5 flex flex-col overflow-hidden'>
            <FaRegFileAlt /> {/* Icon */}

            <div className='flex-1 overflow-y-auto custom-scrollbar mt-2'>
                <p>{data.description}</p>
            </div>
        </div>
    );
}

export default Card;
