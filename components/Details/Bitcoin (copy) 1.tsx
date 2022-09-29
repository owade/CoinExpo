import React, { useEffect, useState } from 'react';
import { Tabs } from '@mantine/core';
import { Chart } from './Chart';


export function BitcoinData() {
  const [activeTab, setActiveTab] = useState<string>('1d');


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
      <Tabs variant="pills" value={activeTab} onTabChange={setActiveTab}>
        <Tabs.List>
          <Tabs.Tab value="1d" >1d</Tabs.Tab>
          <Tabs.Tab value="7d" >7d</Tabs.Tab>
          <Tabs.Tab value="1M" >1M</Tabs.Tab>
          <Tabs.Tab value="3M" >3M</Tabs.Tab>
          <Tabs.Tab value="6M" >6M</Tabs.Tab>
          <Tabs.Tab value="1Y" >1Y</Tabs.Tab>
          <Tabs.Tab value="ALL" >ALL</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="1d" pt="xs">
          1d chart
          <Chart time={"1"} />
        </Tabs.Panel>

        <Tabs.Panel value="7d" pt="xs">
          7d chart
          <Chart time={"7"} />
        </Tabs.Panel>

        <Tabs.Panel value="1M" pt="xs">
          1m chart
          <Chart time={"30"} />
        </Tabs.Panel>

        <Tabs.Panel value="3M" pt="xs">
          3m chart
          <Chart time={"90"} />
        </Tabs.Panel>

        <Tabs.Panel value="6M" pt="xs">
          6m chart
          <Chart time={"180"} />
        </Tabs.Panel>

        <Tabs.Panel value="1Y" pt="xs">
          1yr chart
          <Chart time={"365"} />
        </Tabs.Panel>

        <Tabs.Panel value="ALL" pt="xs">
          ALL chart
          <Chart time={"max"} />
        </Tabs.Panel>

      </Tabs>

    </>


  )
}

