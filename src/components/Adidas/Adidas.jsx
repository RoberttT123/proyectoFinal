import React from 'react'
import "../../styles/Adidas.css"
import Pruno from "../../images/tennisadi.png"
import Pelota from "../../images/pelotadi.png"
import Adid from "../../images/adidas.jpg"
import { CardsAdi } from './CardsAdi'

const cards = [
    {
        id:"1",
        img: Pruno
    },
    {
        id:"2",
        img: Pelota
    }
]
function Adidas(props) {
    return (
        <div > 
        <div className='adidas'> 
            <img src={Adid} alt="Logo Adidas" />  
        </div>
        <div className='adi'>
        {
            cards.map(card => (
                <CardsAdi img={card.img}  />
            ))
        }
        </div>
    
    </div>
    )
}

export {Adidas}