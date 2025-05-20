import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import chef from "../../../assets/chef.png";
import { Avatar, Box, Chip, Divider } from "@mui/material";
import {
  BreakfastDiningOutlined,
  PinDropOutlined,
  Star,
} from "@mui/icons-material";

export default function CardComponent(props) {
  const { chefImage, shopName, chefName, rating, timing, distance, language } =
    props?.data;
  return (
    <Card sx={{ width: "326px", my: 2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          width="326"
          sx={{
            borderRadius: "6px",
          }}
          image={chefImage}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontWeight={600}
          >
            {shopName}
          </Typography>
          <Typography variant="body2" fontWeight={500}>
            {chefName}
          </Typography>
          <Chip
            avatar={<Star fontSize="small" sx={{ color: "#fff !important" }} />}
            color="warning"
            label={rating}
            size="small"
            sx={{ my: 1, color: "#fff", borderRadius: 0.7 }}
          />
          <Box
            sx={{
              display: "flex",
              fontSize: 0.5,
              color: "text.secondary",
              my: 1,
            }}
          >
            <PinDropOutlined
              fontSize="small"
              color="text.secondary"
              sx={{ mr: 0.5 }}
            />
            <Typography variant="body2" fontWeight={400}>
              {distance}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              fontSize: 1,
              color: "text.secondary",
              my: 1,
            }}
          >
            <BreakfastDiningOutlined
              fontSize="small"
              color="text.secondary"
              sx={{ mr: 0.5 }}
            />
            <Typography variant="body2" fontWeight={400}>
              {language}
            </Typography>
          </Box>
          <Divider />
          <Typography
            variant="body2"
            fontWeight={400}
            sx={{ color: "text.secondary", mt: 1 }}
          >
            Timings : {timing}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
