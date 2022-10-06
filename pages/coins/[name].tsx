import React from 'react';
import { Container } from '@mantine/core';

import { useRouter } from 'next/router';
import { CoinData } from 'components/Details/CoinDetail';


export default function CoinTest() {
  const router = useRouter();

 const {name} = router.query;


  //console.log(router.query)


  return (
    <Container>
      <CoinData name={name as string} />
    </Container>
  )
}