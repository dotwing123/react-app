import { Box, Typography } from "@mui/material";
import "./circleCard.css";

const CircleCard = ({ image, title }) => {
  return (
    <div className="circleCard">
      <Box
        sx={{
          borderRadius: "50%",
          background: "#000",
          height: 190,
          width: 190,
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          boxShadow: "0px 2px 6px 3px rgba(0, 0, 0, 0.25)",
        }}
      ></Box>
      <Typography variant="body1" fontWeight={500} sx={{ my: 2 }}>
        {title}
      </Typography>
    </div>
  );
};

export default CircleCard;
