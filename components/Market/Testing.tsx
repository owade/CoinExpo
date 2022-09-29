import { TableSort } from '../../components/Market/MarketTest';
import { useMarket } from '../../Hooks/useMarket';
import { useState } from 'react';
import { Title, Space } from '@mantine/core';
import { MarketSkeleton } from '../../components/Market/SkeletonMarket';

export function Testing() {

  const [activePage, setPage] = useState<number>(1);

  let { data, error } = useMarket(activePage, "market_cap_desc");
  if (error) return <div>failed to load</div>
  if (!data) return <MarketSkeleton />
  console.log(activePage);
  return (
    <>
      <Title order={1}>Today's Cryptocurrency Prices</Title>
      <Space h="xl" />
      <TableSort data={data} key={activePage} activePage={activePage} setPage={setPage} />
    </>

  )
}