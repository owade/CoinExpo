import React, { useEffect, useState } from 'react';
import { Button, Tabs, Group, Space } from '@mantine/core';
import { Chart } from './Chart';


export function BitcoinData() {
  const [active, setActive] = useState<string>('1d');
  const [time, setTime] = useState<string>("1");

  //console.log(time,active)

  const handleClick = (e) => {
    setTime("1");
    setActive("1d");
  }


  // useEffect(() => {
  //    Highcharts.setOptions({
  //       lang: {
  //         decimalPoint: '.',
  //         thousandsSep: ','
  //       }
  //   });
  //  }, []);

  return (

    <>
      <Group position="right" spacing={2}>
        <Button name="1d" color={active === "1d" ? 'green' : 'blue'} 
                onClick={()=>{setTime("1"); setActive("1d")}}>
          1d
        </Button>
        <Button name="7d" color={active === "7d" ? 'green' : 'blue'} 
                onClick={()=>{setTime("7"); setActive("7d")}}>
          7d
        </Button>
        <Button name="1M" color={active === "1M" ? 'green' : 'blue'} 
                onClick={()=>{setTime("30"); setActive("1M")}}>
          1M
        </Button>
        <Button name="3M" color={active === "3M" ? 'green' : 'blue'} 
                onClick={()=>{setTime("90"); setActive("3M")}}>
          3M
        </Button>
        <Button name="6M" color={active === "6M" ? 'green' : 'blue'} 
                onClick={()=>{setTime("180"); setActive("6M")}}>
          6M
        </Button>
        <Button name="1Y" color={active === "1Y" ? 'green' : 'blue'} 
                onClick={()=>{setTime("365"); setActive("1Y")}}>
          1Y
        </Button>
        <Button name="All" color={active === "All" ? 'green' : 'blue'} 
                onClick={()=>{setTime("max"); setActive("All")}}>
          All
        </Button>
      </Group>
       <Space h="lg" />
       <Chart time={time}/>
    </>


  )
}

