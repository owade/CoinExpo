import { useState, SetStateAction } from 'react';
import { Market } from '../../Types/Market';
import { Sparkline } from './Sparkline';
import Link from 'next/link';
import { SparklineV2 } from './SparklineV2';
import {
  createStyles,
  Table,
  ScrollArea,
  UnstyledButton,
  Group,
  Text,
  Center,
  TextInput, Avatar, Pagination,Anchor
} from '@mantine/core';
import { keys } from '@mantine/utils';
import { IconSelector, IconChevronDown, IconChevronUp, IconSearch } from '@tabler/icons';

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
    width: 21,
    height: 21,
    borderRadius: 21,
  },
}));

// interface RowData {
//   name: string;
//   email: string;
//   company: string;
// }

interface TableSortProps {
  data: Market[];
  activePage: number;
  setPage: React.Dispatch<SetStateAction<number>>;
}

interface ThProps {
  children: React.ReactNode;
  reversed?: boolean;
  sorted?: boolean;
  onSort?(): void;
}

function Th({ children, reversed, sorted, onSort }: ThProps) {
  const { classes } = useStyles();
  const Icon = sorted ? (reversed ? IconChevronUp : IconChevronDown) : IconSelector;
  let ch = children?.props?.children?.toString();
  return (
    <th className={classes.th}>
      {ch !== "7D Chart" && <UnstyledButton onClick={onSort} className={classes.control}>
        <Group position="apart">
          <Text weight={500} size="sm">
            {children}
          </Text>
          <Center className={classes.icon}>
            <Icon size={14} stroke={1.5} />
          </Center>
        </Group>
      </UnstyledButton>}
      {ch === "7D Chart" && <UnstyledButton className={classes.control}>
        <Group position="apart">
          <Text weight={500} size="sm">
            {children}
          </Text>
        </Group>
      </UnstyledButton>}
    </th>
  );
}

function filterData(data: Market[], search: string) {
  const query = search.toLowerCase().trim();
  return data.filter((item) =>
    keys(data[0]).some((key) => item[key]?.toString().toLowerCase().includes(query))
  );
}

function sortData(
  data: Market[],
  payload: { sortBy: keyof Market | null; reversed: boolean; search: string }
) {
  const { sortBy } = payload;

  if (!sortBy) {
    return filterData(data, payload.search);
  }

  return filterData(
    [...data].sort((a, b) => {
      if (payload.reversed) {
        return a?.[sortBy!] > b?.[sortBy] ? -1 : 1
      }
      return a?.[sortBy] > b?.[sortBy] ? 1 : -1
    }),
    payload.search
  );
}

export function TableSort(data: TableSortProps) {
  //data:TableSortProps = props.data;
  const [search, setSearch] = useState('');
  const [sortedData, setSortedData] = useState(data.data);
  const [sortBy, setSortBy] = useState<keyof Market | null>(null);
  const [reverseSortDirection, setReverseSortDirection] = useState(false);

  //console.log(data.data.length);
  const setSorting = (field: keyof Market) => {
    const reversed = field === sortBy ? !reverseSortDirection : false;
    setReverseSortDirection(reversed);
    setSortBy(field);
    setSortedData(sortData(data.data, { sortBy: field, reversed, search }));
  };



  const rows = sortedData.map((row) => (
    <tr key={row.name}>
      <td>
        <Group spacing="sm">
          <Avatar size={26} src={row.image} radius={26} />
          <Link href={`/coins/${row.id}`} passHref>
          <Anchor component="a">{row.name}</Anchor>
         </Link>
          {/* <Text size="md" weight={500}>
            {row.name}
          </Text> */}
        </Group>

      </td>
      <td> <Text size="sm" weight={600}>${row.current_price?.toLocaleString()}</Text></td>
      <td> <Text size="sm" weight={600}>${row.market_cap?.toLocaleString()}</Text></td>
      <td> <Text size="sm" weight={600}>${row.total_volume?.toLocaleString()}</Text></td>
      <td> <Text size="sm" weight={600}>${row.ath?.toLocaleString()}</Text></td>
      <td><SparklineV2 data={row?.sparkline_in_7d?.price} /></td>
    </tr>
  ));


  return (
    <>
      <ScrollArea>

        <Table
          horizontalSpacing="md"
          verticalSpacing="sm"
          highlightOnHover
          sx={{ tableLayout: 'fixed', minWidth: 800 }}
        >
          <thead>
            <tr>
              <Th
                sorted={sortBy === 'name'}
                reversed={reverseSortDirection}
                onSort={() => setSorting('name')}
              >
                <Text weight={700}>Name</Text>
              </Th>
              <Th
                sorted={sortBy === 'current_price'}
                reversed={reverseSortDirection}
                onSort={() => setSorting('current_price')}
              >
                <Text weight={700}>Current Price</Text>
              </Th>
              <Th
                sorted={sortBy === 'market_cap'}
                reversed={reverseSortDirection}
                onSort={() => setSorting('market_cap')}
              >
                <Text weight={700}>Market Cap</Text>
              </Th>
              <Th
                sorted={sortBy === 'total_volume'}
                reversed={reverseSortDirection}
                onSort={() => setSorting('total_volume')}
              >
                <Text weight={700}>Total Volume</Text>
              </Th>
              <Th
                sorted={sortBy === 'ath'}
                reversed={reverseSortDirection}
                onSort={() => setSorting('ath')}
              >
                <Text weight={700}>ATH</Text>
              </Th>
              <Th>
                <Text weight={700}>7D Chart</Text>
              </Th>
            </tr>
          </thead>
          <tbody>
            {rows.length > 0 ? (
              rows
            ) : (
              <tr>
                <td colSpan={Object.keys(data.data[0]).length}>
                  <Text weight={500} align="center">
                    Nothing found
                  </Text>
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </ScrollArea>
      <Center mt={10}>
        <Pagination page={data.activePage} onChange={data.setPage} total={130} />
      </Center>
    </>
  );
}