import React, { useState } from 'react'
import "./Card.css"
import { AnimateSharedLayout } from 'framer-motion'
import CompactCard from './CompactCard';
import ExpanedCard from './ExpanedCard';
const Card = (props) => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <AnimateSharedLayout>
            {
                isExpanded ? <ExpanedCard {...props}/> : <CompactCard {...props}/>
            }
        </AnimateSharedLayout>
    )
}

export default Card