import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useCoinPrice } from '../../Hooks/useCoinPrice';
import { CoinPrice } from '../../Types/CoinPrice';
import { useMantineTheme,Skeleton } from '@mantine/core';



function getOptions(data: CoinPrice, time: string, compTheme: string) {
  return (
    {
      chart: {
        zoomType: 'x',
        backgroundColor: null
      },
      yAxis: {
        gridLineColor: compTheme === 'dark' ? '#454545' : '#e6e6e6',
        title: {
          text: null
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      tooltip: {
        useHTML: true,
        backgroundColor: "rgba(255,255,255,1)",
        xDateFormat: '%Y-%m-%d %H:%M',
        // formatter: function(): any {
        //   //return 'The value for <b>' + this.x + '</b> is <b>' + this.y + '</b>, in series '+ this.series.name;
        //   return this.series.name + ': ' + '<b>' + (this.y).toFixed(2) + '</b><br />' + this.x;
        // }
        pointFormat: 'Price (USD): <b>${point.y:,.2f}</b><br/>',
      },
      title: {
        text: `Bitcoin price ${time} ${time === '1' ? 'day' : 'days'}`,
        style: {
          color: `${compTheme === 'dark' ? 'white' : 'black'}`,
          font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
        }
      },
      xAxis: {
        type: 'datetime',
        crosshair: {
          width: 1,
          color: `${compTheme === 'dark' ? 'white' : 'black'}`,
          zIndex: 7
        }
      },
      plotOptions: {
        area: {
          fillColor: {
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1
            },
            stops: [
              [0, '#4949FF'], //#0000FF-#4949FF
              [1, Highcharts.color('#4949FF').setOpacity(0).get('rgba')]
            ]
          },
          marker: {
            radius: 2
          },
          lineWidth: 1,
          states: {
            hover: {
              lineWidth: 1
            }
          },
          threshold: null
        }
      },
      series: [
        {
          type: 'area',
          name: "Bitcoin",
          data: data.prices,
        }
      ]
    }
  )
}

interface Iprops {
  time: string;
}

export function Chart({ time }: Iprops) {
  const theme = useMantineTheme();
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    Highcharts.setOptions({ //can't male this global???.....
      lang: {
        decimalPoint: '.',
        thousandsSep: ','
      }
    });
  }, []);

  let { data, error } = useCoinPrice(time);
  if (error) return <div>failed to load</div>
  if (!data) return <Skeleton height={400} width={855} />





  return (
    <>

        <HighchartsReact highcharts={Highcharts} options={getOptions(data, time, theme.colorScheme)} />

    </>
    
    
  )
}