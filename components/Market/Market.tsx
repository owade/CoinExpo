import { useMarket } from '../../Hooks/useMarket';
import { useState } from 'react';
import { MarketSkeleton } from '../../components/Market/SkeletonMarket';
import { THeader } from '../../components/Market/THeader';
import { Table, Container, Grid, Pagination, Center, createStyles, UnstyledButton } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  header: {
    position: 'sticky',
    top: 0,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transition: 'box-shadow 150ms ease',

    '&::after': {
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[2]
        }`,
    },
  },

  th: {
    padding: '0 !important',
  },

  control: {
    width: '100%',
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

}));

export function MarketData() {
  const [activePage, setPage] = useState<number>(1);
  const [order, setOrder] = useState<string>("market_cap_desc");
  const { classes, cx } = useStyles();


  let { data, error } = useMarket(activePage, order);
  if (error) return <div>failed to load</div>
  if (!data) return <MarketSkeleton />

  const rows = data.map((element, idx) => (
    <tr key={element.id}>
      <td>{element.name}</td>
      <td>{element.current_price}</td>
      <td>{element.market_cap}</td>
      <td>{element.total_supply}</td>
      <td>{element.ath}</td>
    </tr>
  ));

  return (
    <Container>
      <Grid justify="center" align="center">
        <Grid.Col >
          <Table striped highlightOnHover verticalSpacing="md" fontSize="md" horizontalSpacing="sm">
            <thead className={classes.header}>
              <tr>
                <THeader header={"name"} setOrder={setOrder} order={order} />
                <THeader header={"Current_price"} setOrder={setOrder} order={order} />
                <THeader header={"Market_cap"} setOrder={setOrder} order={order} />
                <THeader header={"Total_supply"} setOrder={setOrder} order={order} />
                <THeader header={"Ath"} setOrder={setOrder} order={order} />
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
          <Center mt={10}>
            <Pagination page={activePage} onChange={setPage} total={129} />
          </Center>
        </Grid.Col>
      </Grid>


    </Container>
  )
}