import React from 'react'
import "../../styles/CardsPuma.css"


function CardsPuma({img}) {
    return (
       
        <div  className='puma'>
           
            <div className='pumaimg'>
                <img src={img}  />
            </div>
        </div>
    )
}
export {CardsPuma}