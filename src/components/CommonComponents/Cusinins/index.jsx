import { Box, Button, Card, CardContent, Chip, Stack, Typography } from "@mui/material";
import dish from '../../../assets/dish.png';
import { Star } from "@mui/icons-material";

const Cuisine = (props) => {
    const {
        title = 'Caprese Salad',
        rating = '4.2',
        price = '2.7',
        description = 'A South Indian dish made with a thick pancake-like batter that includes a mix of different toppings such as onions, tomatoes, coriander, Spicy podi powder and carrot.',
        image = dish,
        onClickAdd = () => { },
        isClickable = true
    } = props;
    return (
        <Card sx={{ display: 'flex', m: 2, border: '0', borderBottom: '1px solid #D3D3D3', borderRadius: 0 }} variant="outlined">
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography variant="h6" fontWeight={600} gutterBottom sx={{ m: 0 }}>
                        {title}
                    </Typography>
                    <Chip
                        avatar={<Star fontSize="small" sx={{ color: "#fff !important" }} />}
                        color="warning"
                        label={rating}
                        size="small"
                        sx={{ my: 0.5, color: "#fff", borderRadius: 0.7 }}
                    />
                    <Typography component="div" variant="h6" fontWeight={600}>
                        $ {price}
                    </Typography>
                    <Typography variant="body2" fontWeight={500} sx={{ color: '#6f6c90', maxWidth: '50%' }}>
                        {description}
                    </Typography>
                </CardContent>

            </Box>
            <Box>
                <Stack direction="column" alignItems="center" spacing={1} my={1} pt={2} pr={2}>
                    <Box sx={{
                        background: "#000",
                        height: 130,
                        width: 130,
                        backgroundImage: `url(${image})`,
                        borderRadius: 2,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }} />
                    <Button variant="contained" onClick={onClickAdd} size="small" sx={{
                        width: 100,
                        fontSize: 12,
                        background: '#fff',
                        color: '#5DA571',
                        fontWeight: 'bold',
                        marginTop: '-16px !important',
                    }}>
                        ADD
                    </Button>
                    {isClickable && <Typography variant="caption" sx={{ mt: 1, color: '#6f6c90' }}>Customizable</Typography>}
                </Stack>
            </Box>
        </Card>
    );
}

export default Cuisine;