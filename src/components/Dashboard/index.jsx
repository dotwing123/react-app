import { Box, Container, Grid, Typography } from '@mui/material';
import CircleCard from '../CommonComponents/CircleCard';
import Card from '../CommonComponents/Card';

const Dashboard = () => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid xs={3}>
                    <CircleCard />
                </Grid>
                <Grid xs={3}>
                    <CircleCard />
                </Grid>
                <Grid xs={3}>
                    <CircleCard />
                </Grid>
                <Grid xs={3}>
                    <CircleCard />
                </Grid>
            </Grid>

            <Grid container spacing={2}>
                <Grid xs={3}>
                    <Card />

                </Grid>
                
            </Grid>

        </Container>
    );
}

export default Dashboard;