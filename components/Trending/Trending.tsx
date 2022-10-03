import { Card, Image, Text, Badge, Button, Group, Container, SimpleGrid } from '@mantine/core';
import { useTrending } from 'Hooks/useTrending';
import { CardItem } from './CardItem';

function TrendCard() {

    let { data, error } = useTrending();

    return (
        <Container >
             <SimpleGrid cols={3} >
                {data?.coins.map(x => {
                    return <CardItem name={x.item.name} key={x.item.id} price={x.item.price_btc} url={x.item.large} score={x.item.score} />
                })}
            </SimpleGrid>



        </Container>

    );
}

export { TrendCard };