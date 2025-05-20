import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import chef from '../../../assets/chef.png';
import { Avatar, Box, Chip, Divider } from '@mui/material';
import { BreakfastDiningOutlined, PinDropOutlined, Star } from '@mui/icons-material';

export default function CardComponent() {
    return (
        <Card sx={{ maxWidth: '100%', my: 2 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="180"
                    image={chef}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Home Street Kitchen
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Paul Christopher
                    </Typography>
                    <Chip
                        avatar={<Star fontSize='small' sx={{ color: '#fff !important' }} />}
                        color='warning'
                        label="3.5"
                        size='small'
                        sx={{ my: 1, color: '#fff', borderRadius: 0.7 }}
                    />
                    <Box sx={{ display: 'flex', fontSize: 0.5, color: 'text.secondary', my: 1 }}>
                        <PinDropOutlined fontSize='small' color='text.secondary' sx={{mr : 0.5}} />
                        <Typography variant='body2'>0.35 mi</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', fontSize: 1, color: 'text.secondary', my: 1 }}>
                        <BreakfastDiningOutlined fontSize='small' color='text.secondary' sx={{mr : 0.5}} />
                        <Typography variant='body2'>Italian, French +2</Typography>
                    </Box>
                    <Divider />
                    <Typography variant="body2" sx={{ color: 'text.secondary', mt : 1 }}>
                        Timings : 09:00 AM to 05:00 PM
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
