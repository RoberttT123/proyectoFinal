import React from 'react'
import '../styles/PageContainer.css'
import suchas from '../images/SUCHAS_SPORT.png'

function PageContainer() {
  return (
    <div>
        <div className='container'>
        <div className='text'><h2>Unete a nuestra Tienda y obten un 15% de descuento</h2></div>
        <button className='button'>Registrate Gratis</button>
        </div>
        <div className='suchas'>
            <img src={suchas} alt="suchas_logo" />
        </div>
        <div>
        LEMA: SI NO PUEDES CON ELLA RECUERDA QUE TIENES A SU AMIGA RAAAA!!!!
        </div>  
    </div>
  )
}

export {PageContainer}