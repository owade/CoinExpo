import { Card, Image, Text, Badge, Button, Group, Container, SimpleGrid, Paper, Stack, SegmentedControl, Center, Box } from '@mantine/core';
import { useChain } from 'Hooks/useChain';
import { Dispatch, SetStateAction } from 'react';
import { IconLayoutGrid, IconList } from '@tabler/icons';


function ChainList({ view, setView }: { view: string, setView: Dispatch<SetStateAction<string>> }) {

    let { data, error } = useChain();

    return (
        <Container>
            <Group position="right">
                <SegmentedControl
                    mb={20}
                    value={view}
                    onChange={setView}
                    data={[
                        {
                            label: (
                                <Center>
                                    <IconLayoutGrid size={16} />
                                    <Box ml={10}>Grid</Box>
                                </Center>
                            ),
                            value: 'grid'
                        },
                        {
                            label: (
                                <Center>
                                    <IconList size={16} />
                                    <Box ml={10}>List</Box>
                                </Center>
                            ),
                            value: 'list'
                        },

                    ]}
                />
            </Group>

            {view === "grid" ? (<SimpleGrid cols={3} >
                {data?.map(x => {
                    return (
                        <Paper
                            shadow="xs"
                            p="md"
                            key={x.id}>
                            <Text weight={500}>{x.name}</Text>
                        </Paper>)
                })}
            </SimpleGrid>) : (
                <Stack >
                    {data?.map(x => {
                        return (
                            <Paper
                                shadow="xs"
                                p="md"
                                key={x.id}>
                                <Text weight={500}>{x.name}</Text>
                            </Paper>)
                    })}
                </Stack >

            )}



        </Container>

    );
}

export { ChainList }