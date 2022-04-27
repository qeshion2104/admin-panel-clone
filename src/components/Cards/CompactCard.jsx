import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./CompactCard.css";
import { motion } from 'framer-motion'

const CompactCard = ({
  title,
  color,
  barValue,
  value,
  png,
  series,
  toggleExpand,
}) => {
  const IconClass = png;
  const inputStyle = {
    background: color.background,
    boxShadow: color.boxShadow,
  };
  return (
    <motion.div style={inputStyle} className="CompactCard" onClick={toggleExpand} layoutId="expandableCard">
      <div className="CompactCard__radialBar">
        <CircularProgressbar value={barValue} text={`${barValue}%`} />
        <span>{title}</span>
      </div>
      <div className="CompactCard__detail">
        <IconClass className="CompactCard__icon" />
        <span className="CompactCard__value">${value}</span>
        <span className="CompactCard__time">Last 24 hours</span>
      </div>
    </motion.div>
  );
};

export default CompactCard;
