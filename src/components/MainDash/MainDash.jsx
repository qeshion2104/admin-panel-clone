import React from 'react'
import Cards from '../Cards/Cards'
import DataTable from '../DataTable/DataTable'
import "./MainDash.css"

const MainDash = () => {
  return (
    <div className='MainDash'>
        <h1>MainDash</h1>
        <div className="MainDash__cards">
            <Cards/>
        </div>
        <div className="MainDash__table">
            <DataTable/>
        </div>
    </div>
  )
}

export default MainDash