import React, { useState } from 'react'
import "./Sidebar.css"
import Logo from "imgs/logo.png"
import { sidebarData } from "Data"


const Sidebar = () => {
    const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <div className='Sidebar'>
        {/* Logo */}
        <div className="Sidebar__logo">
            <img src={Logo} alt="logo" />
            <span>
                Sh
                <span>o</span>
                ps
            </span>
        </div>
        {/* MenuItems */}
        <div className="Sidebar__menu">
            {
                sidebarData.map((item, index) => {
                    const className = selectedIndex == index ? "Sidebar__menuItem Sidebar__menuItem--active" : "Sidebar__menuItem"
                    return (
                        <div 
                            key={index} 
                            className={className}
                            onClick={() => setSelectedIndex(index)}
                        >
                            <item.icon/>
                            <span>{item.heading}</span>
                        </div>
                    )
                })
            }
        </div> 

    </div>
  )
}

export default Sidebar