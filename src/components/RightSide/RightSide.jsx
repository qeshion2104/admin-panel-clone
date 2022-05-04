import React from 'react'
import Updates from '../Updates/Updates'
import "./RightSide.css"
import { UpdatesData } from '../../Data'

function RightSide(props) {
  return (
    <div className='RightSide'>
        <div>
            <h3>Updates</h3>
            <Updates updateDatas={UpdatesData}/>
        </div>
        <div>
            <h3>Customer Review</h3>
        </div>        
    </div>
  )
}

export default RightSide
