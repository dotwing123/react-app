// import { Box, IconButton, Typography } from "@mui/material";
// import React from "react";
// import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
// import CardComponent from "../../components/CommonComponents/Card";
// import { useSelector } from "react-redux";

// export default function Cuisines() {
//   const nearByShops = useSelector((state) => state?.sampleData?.nearbyShops);

//   return (
//     <Box sx={{ px: { xs: 2, sm: 3, md: 5 }, py: { xs: 2, sm: 3, md: 4 } }}>
//       <Typography
//         variant="h5"
//         fontSize={{ xs: "18px", sm: "20px", md: "22px" }}
//         fontWeight="600"
//         mb={2}
//       >
//         Cuisines
//       </Typography>

//       {/* Cards Container */}
//       <Box
//         sx={{
//           display: "flex",
//           flexWrap: { xs: "nowrap", sm: "wrap" },
//           gap: 2,
//           overflowX: { xs: "auto", sm: "visible" },
//           pb: 2,
//           "&::-webkit-scrollbar": { display: "none" },
//           scrollbarWidth: "none",
//         }}
//       >
//         {nearByShops?.map((item, idx) => (
//           <Box
//             key={idx}
//             sx={{
//               flex: {
//                 xs: "0 0 auto",
//                 sm: "1 1 calc(50% - 16px)",
//                 md: "1 1 calc(33.33% - 16px)",
//               },
//               minWidth: { xs: "280px", sm: "auto" },
//             }}
//           >
//             <CardComponent data={item} />
//           </Box>
//         ))}
//       </Box>
//     </Box>
//   );
// }
import { Box, Grid, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import CardComponent from "../../components/CommonComponents/Card";
import { useSelector } from "react-redux";
import TabList from "../../components/CommonComponents/TabList";
import { useNavigate } from "react-router-dom";
export default function Cuisines() {
  const cuisines = useSelector((state) => state?.sampleData?.cuisinesList);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    if (cuisines && cuisines.length > 0) {
      setCategories(cuisines[0].categories);
    }
  }, []);
  const navigateTo = useNavigate();
  return (
    <Box sx={{ px: 5, py: 4 }}>
      <Grid container justifyContent={"space-between"} alignItems={"center"}>
        <Grid item>
          <Typography
            variant="h5"
            fontSize={"22px"}
            component="h2"
            fontWeight="600"
            pl={2}
          >
            Cuisines
          </Typography>
        </Grid>
        <Grid item>
          <TabList
            renderData={cuisines}
            renderName={"name"}
            renderCount={"count"}
            onClick={(index) => {
              setSelectedIdx(index);
              setCategories(cuisines[index].categories);
            }}
            selectedIdx={selectedIdx}
          />
        </Grid>
      </Grid>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          alignItems: "center",
          justifyContent: "space-evenly",
          overflowX: "auto",
          scrollbarWidth: "none", // Firefox
          px: { xs: 2, md: 0 },
        }}
      >
        {categories.map((item, idx) => (
          <Box key={idx} sx={{ flexShrink: 0, pl: 1 }}>
            <CardComponent
              data={item}
              onClick={() =>
                navigateTo(
                  `/home/cuisines/cuisinedetails/${cuisines[selectedIdx]?.name}`
                )
              }
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
