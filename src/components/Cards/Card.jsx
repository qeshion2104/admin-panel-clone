import React, { useState } from 'react'
import "./Card.css"
import { AnimateSharedLayout } from 'framer-motion'
import CompactCard from './CompactCard';
import ExpandedCard from './ExpandedCard';
const Card = (props) => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <div className="Card">
            <AnimateSharedLayout>
                {
                    isExpanded 
                        ? <ExpandedCard {...props} toggleExpand={() => setIsExpanded(false)}/> 
                        : <CompactCard {...props} toggleExpand={() => setIsExpanded(true)}/>
                }
            </AnimateSharedLayout>
        </div>
    )
}

export default Card