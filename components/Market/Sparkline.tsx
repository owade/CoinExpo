import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';



export function Sparkline({ data }: { data: number[] }) {

  const status = () => {
    let temp = (data)?.[data.length-1] - data?.[0];
    if(temp < 0){
      return "red";
    }else if(temp === 0){
      return "blue";
    }else if(temp > 0){
      return "green";
    }
    return "yellow"
  }


  const defaultOptions = {
    chart: {
      backgroundColor: null,
      borderWidth: 0,
      //type: 'area',
      margin: [2, 0, 2, 0],
      width: 150,
      height: 30,
      style: {
        overflow: 'visible'
      },

      // small optimalization, saves 1-2 ms each sparkline
      skipClone: true
    },
    title: {
      text: ''
    },
    credits: {
      enabled: false
    },
    xAxis: {
      lineWidth: 0,
      minorGridLineWidth: 0,
      lineColor: 'transparent',
      labels: {
        enabled: false
      },
      title: {
        text: null
      },
      startOnTick: false,
      endOnTick: false,
      tickPositions: []
    },
    yAxis: {
      endOnTick: false,
      startOnTick: false,
      labels: {
        enabled: false
      },
      title: {
        text: null
      },
      tickPositions: [0]
    },
    legend: {
      enabled: false
    },
    // tooltip: {
    //   backgroundColor: 'white',
    //   borderWidth: 1,
    //   hideDelay: 0,
    //   shared: true,
    //   padding: 8,
    //   borderColor: 'silver',
    //   borderRadius: 3,
    //   positioner: function(w, h, point) {
    //     return { x: point.plotX - w / 2, y: point.plotY - h };
    //   }
    // },
    tooltip: {
      enabled: false
    },
    plotOptions: {
      series: {
        animation: false,
        color: status(),
        lineWidth: 1,
        shadow: false,
        states: {
          hover: {
            lineWidth: 1
          }
        },
        marker: {
          radius: 1,
          states: {
            hover: {
              radius: 2
            }
          }
        },
        fillOpacity: 0.25
      },
      column: {
        negativeColor: '#910000',
        borderColor: 'silver'
      }
    },

    series: [{
      data: data
    }]
  };

  return (
    <HighchartsReact highcharts={Highcharts} options={defaultOptions} />
  )
}