// import * as React from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import CardActionArea from "@mui/material/CardActionArea";
// import chef from "../../../assets/chef.png";
// import { Avatar, Box, Chip, Divider } from "@mui/material";
// import {
//   BreakfastDiningOutlined,
//   PinDropOutlined,
//   Star,
// } from "@mui/icons-material";

// export default function CardComponent(props) {
//   const { chefImage, shopName, chefName, rating, timing, distance, language } =
//     props?.data;
//   return (
//     <Card sx={{ width: "326px", my: 2 }}>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           height="180"
//           width="326"
//           sx={{
//             borderRadius: "6px",
//           }}
//           image={chefImage}
//           alt="green iguana"
//         />
//         <CardContent>
//           <Typography
//             gutterBottom
//             variant="h5"
//             component="div"
//             fontWeight={600}
//           >
//             {shopName}
//           </Typography>
//           <Typography variant="body2" fontWeight={500}>
//             {chefName}
//           </Typography>
//           <Chip
//             avatar={<Star fontSize="small" sx={{ color: "#fff !important" }} />}
//             color="warning"
//             label={rating}
//             size="small"
//             sx={{ my: 1, color: "#fff", borderRadius: 0.7 }}
//           />
//           <Box
//             sx={{
//               display: "flex",
//               fontSize: 0.5,
//               color: "text.secondary",
//               my: 1,
//             }}
//           >
//             <PinDropOutlined
//               fontSize="small"
//               color="text.secondary"
//               sx={{ mr: 0.5 }}
//             />
//             <Typography variant="body2" fontWeight={400}>
//               {distance}
//             </Typography>
//           </Box>
//           <Box
//             sx={{
//               display: "flex",
//               fontSize: 1,
//               color: "text.secondary",
//               my: 1,
//             }}
//           >
//             <BreakfastDiningOutlined
//               fontSize="small"
//               color="text.secondary"
//               sx={{ mr: 0.5 }}
//             />
//             <Typography variant="body2" fontWeight={400}>
//               {language}
//             </Typography>
//           </Box>
//           <Divider />
//           <Typography
//             variant="body2"
//             fontWeight={400}
//             sx={{ color: "text.secondary", mt: 1 }}
//           >
//             Timings : {timing}
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//   );
// }
import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Box,
  Chip,
  Divider,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  BreakfastDiningOutlined,
  PinDropOutlined,
  Star,
} from "@mui/icons-material";
import chef from "../../../assets/chef.png";
import './style.css';

export default function CardComponent({ data }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { chefImage, shopName, chefName, rating, timing, distance, language, isOffline = true } =
    data || {};

  return (
    <Card
      sx={{ width: "100%", maxWidth: isMobile ? 300 : 326, borderRadius: 2, position: 'relative' }}
      className="cardD"
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={chefImage || chef}
          alt={shopName}
          sx={{ borderRadius: 2 }}
        />
        <CardContent>
          <Typography variant="h6" fontWeight={600} gutterBottom>
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

          <Stack direction="row" alignItems="center" spacing={1} my={1}>
            <PinDropOutlined fontSize="small" color="action" />
            <Typography variant="body2">{distance}</Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1} my={1}>
            <BreakfastDiningOutlined fontSize="small" color="action" />
            <Typography variant="body2">{language}</Typography>
          </Stack>

          <Divider sx={{ my: 1 }} />

          <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
            Timings: {timing}
          </Typography>
        </CardContent>
      </CardActionArea>
      {
        isOffline &&
        <Box sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.4)',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          pt: '25%'
        }}>
          <Chip
            color="error"
            label={'OFFLINE'}
            size="small"
            sx={{ my: 1, color: "#fff", borderRadius: 0.7 }}
          />
        </Box>
      }
    </Card>
  );
}
