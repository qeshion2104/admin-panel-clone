import React from 'react'
import ApexCharts from 'react-apexcharts';
import "./CustomerReview.css"

const CustomerReview = () => {
    const primaryCardFontColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--primary-card-font-color'); // #999999
    const data = {
        series: [
          {
              name: "Review",
              data: [10,50,40,30,90,120,10],
          }
        ],
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
            show: false,
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
              "2018-09-25T00:00:00.000Z",
            ]
          },
          yaxis: {
            show: false,
          },
          toolbar: {
            show: false,
          }
        }
      }


  return (
    <div className='CustomerReview'>
        <ApexCharts series={data.series} type="area" options={data.options}/>
    </div>
  )
}

export default CustomerReview