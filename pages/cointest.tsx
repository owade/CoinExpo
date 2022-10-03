

import React from 'react';
import { Container } from '@mantine/core';
import {CoinData} from "../components/Details/CoinDetail";


export default function CoinTest() {

  return (
    <Container>
      <CoinData name={name} />
    </Container>
  )
}

