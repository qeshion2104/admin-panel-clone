import React from 'react'
import Cards from '../Cards/Cards'
import "./MainDash.css"

const MainDash = () => {
  return (
    <div className='MainDash'>
        <h1>MainDash</h1>
        <div className="MainDash__cards">
            <Cards/>
        </div>
        <div className="MainDash__table">
            <div>table</div>
        </div>
    </div>
  )
}

export default MainDash