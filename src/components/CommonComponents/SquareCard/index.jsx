import { Box, Typography } from "@mui/material";
import dish from "../../../assets/dish.png";
import "./squareCard.css";

const SquareCard = ({ name, image }) => {
  return (
    <div className="squareCard">
      <Box
        sx={{
          background: "#000",
          height: 300,
          width: 300,
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          borderRadius: "6px",
          boxShadow: "0px 2px 6px 3px rgba(0, 0, 0, 0.25)",
        }}
      ></Box>
      <Typography variant="body1" fontWeight={500} sx={{ my: 2 }}>
        {name}
      </Typography>
    </div>
  );
};

export default SquareCard;
