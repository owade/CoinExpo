import React, { useEffect, useState } from 'react';
import { Space, SegmentedControl, Group, Text, Stack, useMantineTheme, Image, Loader } from '@mantine/core';
import { useCoinDetailFull } from '../../Hooks/useCoinDetailFull';
import { Chart } from './Chart';


export function BitcoinData() {
  const [value, setValue] = useState('1');
  const theme = useMantineTheme();


  let { data, error } = useCoinDetailFull("bitcoin");
  if (error) return <div>failed to load</div>
  if (!data) return <Loader size="xl" />

  const changePerc24 = () => {
    return data?.market_data.price_change_percentage_24h;
  }

  const setColor = () => {
    let chg = Number(changePerc24());
    let ans = '';
    if (chg < 0) {
      ans = 'red'
    } else if (chg === 0) {
      ans = theme.colorScheme === 'dark' ? "#fff" : "#000";
    } else {
      ans = 'green'
    }
    return ans;
  }

  function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  console.log(data.market_data.current_price.usd)

  return (

    <>
      <Stack spacing="xs">
        <Group>
          <Text size={32} weight={700}>${data.market_data.current_price.usd.toLocaleString()} USD</Text>
          <Text size={24} color={setColor()}>{changePerc24()}%(24H)</Text>
        </Group>
        <Group>
          <img
            src="https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579"
            alt="coin image" />
          <Text size={28} weight={500}>{capitalizeFirstLetter(data.id)} </Text>
          <Text size={22} weight={400}>{data.symbol}</Text>
        </Group>
        <Text size={10}>{data.market_data.last_updated + ''}</Text>

      </Stack>
      <Space h="xl" />
      <Group position="right">
        <SegmentedControl
          value={value}
          onChange={setValue}
          color="blue"
          data={[
            { label: '1d', value: '1' },
            { label: '7d', value: '7' },
            { label: '1M', value: '30' },
            { label: '3M', value: '90' },
            { label: '6M', value: '180' },
            { label: '1Y', value: '365' },
            { label: 'All', value: 'max' },
          ]}
        />
      </Group>

      <Space h="lg" />
      <Chart time={value} />
      <Space h="xl" />
      <Group position="apart">
        <Stack spacing="xs">
          <Text size="md" color="dimmed">Market Cap (USD)</Text>
          <Text size="lg" weight={700}>${data.market_data.market_cap.usd.toLocaleString()}</Text>
        </Stack>
        <Stack spacing="xs">
          <Text size="md" color="dimmed">24H VOLUME (USD)</Text>
          <Text size="lg" weight={700}>${data.market_data.total_volume.usd.toLocaleString()}</Text>
        </Stack>
        <Stack spacing="xs">
          <Text size="md" color="dimmed">Circulating Supply</Text>
          <Text size="lg" weight={700}>{data.market_data.circulating_supply.toLocaleString()} BTC</Text>
        </Stack>
        <Stack spacing="xs">
          <Text size="md" color="dimmed">Max Supply</Text>
          <Text size="lg" weight={700}>{data.market_data.max_supply.toLocaleString()} BTC</Text>
        </Stack>
      </Group>
    </>


  )
}

