import { createStyles, Paper, Group } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { Dispatch, SetStateAction } from 'react';


const useStyles = createStyles((theme) => ({
  card: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.dark[8],
    fontSize: theme.fontSizes.lg,
    textTransform: 'uppercase',
    transition: 'color 100ms ease',

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? '#373a40' : theme.colors.gray[5],
    },
  },


}));

interface ItemProps {
  item: string;
  photo: string;
  id: string;
  setMopened: Dispatch<SetStateAction<boolean>>;
  //setMopened: any;
}

export const SearchCard = ({ item, photo, id, setMopened }: ItemProps) => {
  const { classes, cx } = useStyles();
  const router = useRouter();


  const handleClick = () => {
    setMopened(false);
    router.push(`/coins/${id}`);    
  }

  return (
    // <Link href={`/coins/${id}`} passHref>
    <Paper
      className={classes.card}
      shadow="lg"
      p="md"
      withBorder
      m="md"
      onClick={handleClick}
      component="a"
    >
      <Group>
        <img
          src={photo}
          alt="coin image" />
        {item}
      </Group>

    </Paper>

  );
}

