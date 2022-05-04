import React from 'react'
import "./Update.css"

const Update = ({img, name, notification, time}) => {
  return (
    <div className="Update">
      <img className='Update__image' src={img} alt="" />
      <div>
        <div className='Update__notification'>
          <span className='Update__name'>{name}</span>
          <span>{notification}</span>
        </div>
        <span>{time}</span>
      </div>
    </div>
  )
}

export default Update