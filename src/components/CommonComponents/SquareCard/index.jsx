import { Box, Typography } from "@mui/material";
import dish from '../../../assets/dish.png';
import './squareCard.css';

const SquareCard = () => {
    return (
        <div className="squareCard">
            <Box
                sx={{
                    background: "#000",
                    height: 250,
                    width: '100%',
                    backgroundImage: `url(${dish})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    boxShadow: "0px 2px 6px 3px rgba(0, 0, 0, 0.25)",
                }}
            ></Box>
            <Typography variant="body1" fontWeight={500} sx={{ my: 2 }}>
                {'Appetizers'}
            </Typography>
        </div >
    );
}

export default SquareCard;