import React from 'react'
import "../../styles/CardsNike.css"

function CardsNike({img}) {
    return (
       
        <div  className='nike'>
           
            <div className='nikeimg'>
                <img src={img}  />
            </div>
        </div>
    )
}
export {CardsNike}