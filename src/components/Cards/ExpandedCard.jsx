import React from 'react'
import { UilTimes } from "@iconscout/react-unicons"
import ApexCharts from 'react-apexcharts';
import { motion } from 'framer-motion'
import "./ExpandedCard.css"

const ExpandedCard = ({title, color, barValue, value, png, series, toggleExpand}) => {
  const IconClass = png;
  const inputStyle = {
    background: color.background,
    boxShadow: color.boxShadow,
  };

  const primaryCardFontColor = getComputedStyle(document.documentElement)
    .getPropertyValue('--primary-card-font-color'); // #999999
  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },
      dropShadow: {
        enabled: false,
        enabledOnSeries: false,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },
      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: [primaryCardFontColor],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-20T00:00:00.000Z",
          "2018-09-21T00:00:00.000Z",
          "2018-09-22T00:00:00.000Z",
          "2018-09-23T00:00:00.000Z",
          "2018-09-24T00:00:00.000Z",
        ]
      }
    }
  }

  return (
    <motion.div style={inputStyle} className='ExpandedCard' layoutId="expandableCard">
      <div className='ExpandedCard__close'>
        <UilTimes onClick={toggleExpand} />
      </div>
      <span className='ExpandedCard__title'>{title}</span>
      <div className='ExpandedCard__chart'>
        <ApexCharts series={series} type="area" options={data.options}/>
      </div>
      <span className='ExpandedCard__footer'>Last 24 hours</span>
    </motion.div>
  )
}

export default ExpandedCard