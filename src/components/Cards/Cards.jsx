import React from 'react'
import "./Cards.css"
import { cardsData } from 'Data'
import Card from './Card'

const Cards = () => {
  return (
    <div className='Cards'>
        { 
            cardsData.map((cardData, index) => {
                return <Card key={index} {...cardData} />
            }) 
        }
    </div>
  )
}

export default Cards
