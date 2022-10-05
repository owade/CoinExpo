import { Card, Image, Text, Badge, Button, Group, Container, Avatar, createStyles, Center } from '@mantine/core';
import Link from 'next/link';


const useStyles = createStyles((theme) => ({
    card: {
        position: 'relative',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        margin: 'auto'
    },

    rating: {
        position: 'absolute',
        top: theme.spacing.xs,
        right: theme.spacing.xs + 2,
        pointerEvents: 'none',
    },


}));

interface Iprops {
    name: string;
    price: number;
    url: string;
    score: number;
    id: string;
}

function CardItem({ name, price, url, score,id }: Iprops) {
    const { classes, cx, theme } = useStyles();

    return (
        <Container size={300}>
            <Link href={`/coins/${id}`} passHref>
                <Card shadow="sm" p="lg" radius="xl" withBorder className={classes.card} component="a">
                    <Avatar size="xl" src={url} />
                    <Badge className={classes.rating} variant="gradient" gradient={{ from: 'yellow', to: 'red' }}>
                        {score + 1}
                    </Badge>

                    <Text weight={700} size={14} mt="md">{name}</Text>
                    <Text weight={700} size={18}>{price.toFixed(5)} btc</Text>
                </Card>
            </Link>
        </Container>

    )
}

export { CardItem }