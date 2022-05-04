import React from 'react'
import Update from './Update'
import "./Updates.css"


const Updates = ({updateDatas}) => {
  return (
      <div className="Updates">
          { 
              updateDatas != null
                  ? updateDatas.map((data, index) => {
                    return <Update key={`updateDatas_${index}`} { ...data }/>
                  })
                  : null
          }
      </div>
  )
}

export default Updates