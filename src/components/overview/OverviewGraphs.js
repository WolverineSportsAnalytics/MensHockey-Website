import React from 'react';
import { Grid, Paper } from '@mui/material';
import BarGraph from './overview_charts/BarGraph';
import LineGraph from './overview_charts/LineGraph';
import PieChart from './overview_charts/PieChart';
import ScatterPlot from './overview_charts/ScatterPlot';
import HorizontalBarGraph from './overview_charts/HorizontalBarGraph';
import BubbleChart from './overview_charts/BubbleChart';
import RadarChart from './overview_charts/RadarChart';

const OverviewGraphs = () => {

    return (
    <>
    <Grid item xs={12} md={6} lg={6}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <LineGraph />
        </Paper>
    </Grid>
    <Grid item xs={12} md={6} lg={6}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <BarGraph />
        </Paper>
    </Grid>
    <Grid item xs={12} md={4.2} lg={4.2}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <PieChart />
        </Paper>
    </Grid>
    <Grid item xs={12} md={7.8} lg={7.8}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <ScatterPlot />
        </Paper>
    </Grid>
    <Grid item xs={12} md={7.8} lg={7.8}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <HorizontalBarGraph />
        </Paper>
    </Grid>
    <Grid item xs={12} md={4.2} lg={4.2}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <RadarChart />
        </Paper>
    </Grid>
    <Grid item xs={12} md={12} lg={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <BubbleChart />
        </Paper>
    </Grid>
    </>
    )
};

export default OverviewGraphs;