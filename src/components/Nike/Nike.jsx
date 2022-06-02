import React from 'react'
import Nik from "../../images/logonike.jpg"
import "../../styles/Nike.css"
import Tennisuno from "../../images/tennisniku.png"
import Tennisdos from "../../images/tennisnikd.png"
import { CardsNike } from './CardsNike'


const cards = [
    {
        id:"1",
        img: Tennisuno
    },
    {
        id:"2",
        img: Tennisdos
    }
]
function Nike(props) {
    return (
        <div > 
       <div className='nike'>
                <img className='Nik' src={Nik} alt="Logo nike" />
            </div>
        <div className='nik'>
        {
            cards.map(card => (
                <CardsNike img={card.img}  />
            ))
        }
        </div>
    
    </div>
    )
}
export {Nike}