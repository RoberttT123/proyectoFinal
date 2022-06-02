import React from 'react'
import "../../styles/Puma.css"
import Pumi from "../../images/logopuma.png"
import Pumone from "../../images/pummoch.png"
import Pumdos from "../../images/pumtennis.png"
import { CardsPuma } from './CardsPuma'

const cards = [
    {
        id:"1",
        img: Pumone
    },
    {
        id:"2",
        img: Pumdos
    }
]
function Puma(props) {
    return (
        <div > 
       <div className='puma'>
                <img className='Nik' src={Pumi} alt="Logo nike" />
            </div>
        <div className='pum'>
        {
            cards.map(card => (
                <CardsPuma img={card.img}  />
            ))
        }
        </div>
    
    </div>
    )
}

export {Puma}