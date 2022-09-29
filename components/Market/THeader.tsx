import { Center, createStyles, UnstyledButton, Group, Text } from '@mantine/core';
import { IconChevronDown, IconChevronUp } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
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

  icon: {
    width: 18,
    height: 18,
    borderRadius: 18,
  },
}));

interface ThProps {
  header: string;
  setOrder: (h: string) => void;
  order: string
};



export function THeader({ header, setOrder, order }: ThProps) {
  const { classes } = useStyles();
  const Icon = (order === "market_cap_desc") ? IconChevronDown : IconChevronUp;

  const doSum = (h: string) => {
    if (order === "market_cap_desc" && h === "Market_cap") {
      setOrder("market_cap_asc");
    } else if (order === "market_cap_asc" && h === "Market_cap") {
      setOrder("market_cap_desc");
    }
  }

  return (
    <th className={classes.th}>
      <UnstyledButton onClick={() => doSum(header)} className={classes.control}>
        <Group position="apart">
          <Text weight={500} size="sm">
            {header}
          </Text>
          {header === "Market_cap" &&
            <Center className={classes.icon}>
              <Icon size={14} stroke={2} />
            </Center>
          }

        </Group>
      </UnstyledButton>
    </th>
  );
}