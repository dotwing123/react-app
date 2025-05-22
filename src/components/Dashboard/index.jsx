import { Box, Container, Grid, Typography } from "@mui/material";
import CircleCard from "../CommonComponents/CircleCard";
import Card from "../CommonComponents/Card";
import SquareCard from "../CommonComponents/SquareCard";
import Cuisine from "../CommonComponents/Cusinins";

const Dashboard = () => {
  return (
    <>
      <Container>
        <Grid container spacing={2} justifyContent={"space-between"}>
          <Grid xs={2}>
            <CircleCard />
          </Grid>
          <Grid xs={2}>
            <CircleCard />
          </Grid>
          <Grid xs={2}>
            <CircleCard />
          </Grid>
          <Grid xs={2}>
            <CircleCard />
          </Grid>
          <Grid xs={2}>
            <CircleCard />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid xs={3}>
            <Card />
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent={"space-between"}>
          <Grid xs={3} sx={{ py: 2 }}>
            <SquareCard />
          </Grid>
          <Grid xs={3} sx={{ py: 2 }}>
            <SquareCard />
          </Grid>
          <Grid xs={3} sx={{ py: 2 }}>
            <SquareCard />
          </Grid>
        </Grid>
        <Grid xs={12}>
          <Cuisine />
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;
