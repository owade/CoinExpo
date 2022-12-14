import { createStyles, Container, Text, Button, Group } from '@mantine/core';
import Head from 'next/head';
import Link from 'next/link';


const BREAKPOINT = '@media (max-width: 755px)';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    boxSizing: 'border-box',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  inner: {
    position: 'relative',
    paddingTop: 70,
    paddingBottom: 120,

    [BREAKPOINT]: {
      paddingBottom: 80,
      paddingTop: 80,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 62,
    fontWeight: 900,
    lineHeight: 1.1,
    margin: 0,
    padding: 0,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,

    [BREAKPOINT]: {
      fontSize: 42,
      lineHeight: 1.2,
    },
  },

  description: {
    marginTop: theme.spacing.xl,
    fontSize: 24,

    [BREAKPOINT]: {
      fontSize: 18,
    },
  },

  controls: {
    marginTop: theme.spacing.xl * 2,

    [BREAKPOINT]: {
      marginTop: theme.spacing.xl,
    },
  },

  control: {
    height: 54,
    paddingLeft: 38,
    paddingRight: 38,

    [BREAKPOINT]: {
      height: 54,
      paddingLeft: 18,
      paddingRight: 18,
      flex: 1,
    },
  },
}));

export function Welcome() {
  const { classes } = useStyles();

  return (
    <>
      <Head>
        <title>Crypto Price Tracker</title>
        <meta name="google-site-verification" content="0JejSSzxygMxVxk0GpcxvVsu5K3Qb0E0j8DH5RElQ_A" />
        <meta
          property="og:title"
          content="Cryptocurrency price tracker using coingecko api; independently sourced crypto data such as live prices, trading volume, exchange volumes, trading pairs, &amp; more."
           />
      </Head>
      <div className={classes.wrapper}>
        <Container size={1000} className={classes.inner}>
          <h1 className={classes.title}>
            View{' '}
            <Text component="span" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} inherit>
              top cryptocurrencies
            </Text>{' '}
            Details, Prices and Historical Charts
          </h1>

          <Text className={classes.description} color="dimmed">
            Do you want to know the top trending coins and their details? ??? CoinExpo includes more than
            1000 coins from coingecko and their corresponding detailed information
          </Text>

          <Group className={classes.controls}>
            <Link href="/market" passHref>
              <Button
                size="xl"
                className={classes.control}
                variant="gradient"
                gradient={{ from: 'blue', to: 'cyan' }}
              >
                Markets
              </Button>

            </Link>


          </Group>
        </Container>
      </div>
    </>

  );
}