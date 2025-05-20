import { Box, Typography } from '@mui/material';
import chinese from '../../../assets/chinese.png'
import './circleCard.css'

const CircleCard = () => {
    return (
        <div className='circleCard'>
            <Box
                sx={{
                    borderRadius: '50%',
                    background: '#000',
                    height: 200,
                    width: 200,
                    backgroundImage: `url(${chinese})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}>

            </Box>
            <Typography sx={{my : 2}}>Chinese</Typography>
        </div>
    );
}

export default CircleCard;