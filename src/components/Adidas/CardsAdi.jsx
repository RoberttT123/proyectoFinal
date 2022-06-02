import React from 'react'
import "../../styles/CardsAdi.css"
function CardsAdi({img}) {
    return (
       
        <div  className='adi'>
           
            <div className='adiimg'>
                <img src={img}  />
            </div>
        </div>
        
    )
}
export {CardsAdi}