import { Card, Image, Text, Badge, Button, Group, Container, Avatar, createStyles, Center } from '@mantine/core';


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
    score: number
}

function CardItem({ name, price, url, score }: Iprops) {
    const { classes, cx, theme } = useStyles();

    return (
        <Container size={300}>
            <Card shadow="sm" p="lg" radius="xl" withBorder className={classes.card}>


                <Avatar size="xl" src={url} />
                <Badge className={classes.rating} variant="gradient" gradient={{ from: 'yellow', to: 'red' }}>
                    {score + 1}
                </Badge>

                <Text weight={700} size={14} mt="md">{name}</Text>
                <Text weight={700} size={18}>{price.toFixed(5)} btc</Text>



            </Card>
        </Container>

    )
}

export { CardItem }