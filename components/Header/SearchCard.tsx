import { createStyles, Paper, Group } from '@mantine/core';


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
}

const SearchCard = ({ item, photo }: ItemProps) => {
  const { classes, cx } = useStyles();
  return (
    <Paper
      className={classes.card}
      shadow="lg"
      p="md"
      withBorder
      m="md"
      component="a"
      href="#">
      <Group>
        <img
          src={photo}
          alt="coin image" />
        {item}
      </Group>

    </Paper>
  );
}

export { SearchCard }