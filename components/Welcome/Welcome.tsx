import { Title, Text, Anchor } from '@mantine/core';
import Link from 'next/link';
import useStyles from './Welcome.styles';

export function Welcome() {
  const { classes } = useStyles();

  return (
    <>
      <Title className={classes.title} align="center" mt={100}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span">
          CoinExpo
        </Text>
      </Title>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        View the most popular cryptocurrencies list and their details..
        <Link href="/market" passHref>
          <Anchor component="a">View Markets</Anchor>
        </Link>

      </Text>
    </>
  );
}
