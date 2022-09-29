import { createStyles, Header, Menu, Group, Center, Burger, Container, TextInput, Text, Modal, ScrollArea, Divider, Loader } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown, IconSearch } from '@tabler/icons';
import { ColorSchemeToggle } from '../../components/ColorSchemeToggle/ColorSchemeToggle';
import { SearchCard } from '../../components/Header/SearchCard';
import { useState, useEffect } from 'react';
import { useSearch } from '../../Hooks/useSearch';
import { SearchTypes } from '../../Types/Search';
import useSWR, { useSWRConfig } from 'swr';
import Link from 'next/link';




const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
    borderBottom: 0,
  },

  inner: {
    height: 56,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  search: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: 5,
  },
}));

interface HeaderSearchProps {
  links: { link: string; label: string; links?: { link: string; label: string }[] }[];
}

export function HeaderMenuColored({ links }: HeaderSearchProps) {
  const [opened, { toggle }] = useDisclosure(false);
  const [mopened, setMopened] = useState(false);
  const [value, setValue] = useState("btc");
  const { classes } = useStyles();
  const { mutate } = useSWRConfig();

  let { data, error } = useSearch(value);
  if (error) return <div>failed to load</div>


  // useEffect(() => {
  //   //revalidate swr

  // }, [value])

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" exitTransitionDuration={0}>
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size={12} stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <Link 
        key={link.label}
        href={link.link}   
        passHref
        >
       <a className={classes.link}>{link.label}</a>
      </Link>
      // <a
      //   key={link.label}
      //   href={link.link}
      //   className={classes.link}
      // //onClick={(event) => event.preventDefault()}
      // >
      //   {link.label}
      // </a>
    );
  });

  const handleFocus = () => {
    setMopened(true);
  }
  const handleClose = () => {
    setMopened(false);
    //setFiltered([]);
  }

  // const nums = Array.from({ length: 1000 }, (v, i) => i + "");
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   let r = nums.filter(x => x.includes(e.target.value));
  //   setFiltered(r);
  // }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
    // let { data, error } = useSearch(e.currentTarget.value);
    // if (error) return <div>failed to load</div>

  }




  return (
    <Header height={56} mb={80}>
      <Container fluid>
        <Modal
          opened={mopened}
          onClose={handleClose}
          withCloseButton={false}
          size="lg"
          padding={0}
        >
          <TextInput
            placeholder="Search"
            icon={<IconSearch size={18} />}
            size="lg"
            variant="unstyled"
            value={value}
            onChange={handleChange}
          />
          <Divider my="sm" mt={0} />
          {!data &&
            <Center><Loader /></Center>

            // <Text weight={700} size="xl" align="center" p={15}>Try: BTC, ETH or BNB </Text>
          }
          {data?.coins.length === 0 && <Center><Text weight={600}>No result found...</Text></Center>}

          {data &&
            <ScrollArea style={{ height: 250 }} p={10} type="always">
              {data?.coins.map((x) => <SearchCard key={x.id} item={x.name} photo={x.thumb} />)}
            </ScrollArea>}

        </Modal>

        <div className={classes.inner}>
          <Link href="/" passHref>
            <Text color="blue" component="a" weight={700} size="lg">COIN EXPO</Text>
          </Link>

          <Group spacing={5} className={classes.links}>
            {items}
          </Group>
          <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
          <Group>
            <TextInput
              placeholder="Search"
              icon={<IconSearch size={14} />}
              className={classes.search}
              onClick={handleFocus}
            />
            <ColorSchemeToggle />
          </Group>

        </div>

      </Container>
    </Header>
  );
}