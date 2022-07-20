import React from 'react'
import './App.css'

const Card = ({ cardNo, title, rect, content, overlay }) => {
  return (
    <div className={`card ${cardNo}`}>
        {
            overlay
            ?
            <div className='overlay'>
                <div className='rectangle'><img src={rect} alt={rect}/></div>
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
            :
            <div>
                <div className='rectangle'><img src={rect} alt={rect}/></div>
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
        }
    </div>
  )
}

export default Card