import {React} from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Toolbar, Container, Grid, Paper } from '@mui/material';
import AdditionalInfo from './AdditionalInfo.js';
import TeamLogo from './TeamLogo.js';
import Roster from './Roster.js';
import Base from '../base/Base.js';
import Copyright from '../base/Copyright.js';
import BarGraph from './overview_charts/BarGraph.js';
import LineGraph from './overview_charts/LineGraph.js';

const mdTheme = createTheme();

const Overview = () => {

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>
                <Base title={"Team Overview"} />
                <Box component="main" sx={{ backgroundColor: (theme) => theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[900], flexGrow: 1, height: '100vh', overflow: 'auto' }}>
                    <Toolbar />
                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                        <Grid container spacing={3}>
                            {/* Team Logo */}
                            <Grid item xs={12} md={4} lg={3}>
                                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240 }}>
                                    <TeamLogo />
                                </Paper>
                            </Grid>
                            {/* Additional Info */}
                            <Grid item xs={12} md={8} lg={9}>
                                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240 }}>
                                    <AdditionalInfo />
                                </Paper>
                            </Grid>
                            {/* Team Roster */}
                            <Grid item xs={12}>
                                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                                    <Roster />
                                </Paper>
                            </Grid>
                            {/* Team Logo */}
                            <Grid item xs={12} md={6} lg={6}>
                                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                                    <LineGraph />
                                </Paper>
                            </Grid>
                            {/* Additional Info */}
                            <Grid item xs={12} md={6} lg={6}>
                                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                                    <BarGraph />
                                </Paper>
                            </Grid>
                        </Grid>
                        <Copyright sx={{ pt: 4 }} />
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default Overview;