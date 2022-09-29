

import { Table, Container, Grid, Skeleton, Title, Space } from '@mantine/core';

export function MarketSkeleton() {

  const rows = Array(100).fill(0).map((_, idx) => (
    <tr key={idx}>
      <td><Skeleton height={10} radius="xl" /></td>
      <td><Skeleton height={10} radius="xl" /></td>
      <td><Skeleton height={10} radius="xl" /></td>
      <td><Skeleton height={10} radius="xl" /></td>
      <td><Skeleton height={10} radius="xl" /></td>
      <td><Skeleton height={10} radius="xl" /></td>
    </tr>
  ));

  return (
    <Container size={1269}>
      <Title order={1}>Today's Cryptocurrency Prices</Title>
      <Space h="xl" />
      <Grid justify="center" align="center">
        <Grid.Col >
          <Table striped highlightOnHover verticalSpacing="md" fontSize="md" horizontalSpacing="md">
            <thead>
              <tr>
                <th>Name</th>
                <th>Current Price</th>
                <th>Market Cap</th>
                <th>Total Volume</th>
                <th>Ath</th>
                <th>7D Chart</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        </Grid.Col>
      </Grid>


    </Container>
  )
}