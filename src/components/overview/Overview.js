import {React, useState} from "react";
import Navbar from "../Navbar.js";
import LineGraph from "./LineGraph.js";
import BarGraph from "./BarGraph.js";
import {InputLabel, MenuItem, FormControl, Select, Divider, Grid} from "@mui/material";

const Overview = () => {

    const [team, setTeam] = useState('');

    const handleChange = (event) => {
      setTeam(event.target.value);
    };

    const handleSubmit = () => {
        console.log("refresh page, and change data displayed according to textfield");
    };

    return (
        <>
            <Navbar ispage={[true, false]}/>
            <h1>Team Overview</h1>
            <p>Select a NCAA Hockey team to view their statistics.</p>
            <FormControl sx={{ m: 2, minWidth: 120 }}>
                <InputLabel>Team Stats</InputLabel>
                <Select value={team} label="Select Team" onChange={handleChange}>
                    <MenuItem value={"Michigan"}>Michigan</MenuItem>
                    <MenuItem value={"Wisconsin"}>Wisconsin</MenuItem>
                    <MenuItem value={"Ontario"}>Ontario</MenuItem>
                    <MenuItem value={"MSU"}>MSU</MenuItem>
                </Select>
            </FormControl>
            <h2>{team} Overview</h2>
            <TeamOverview team={team}/>
            <Divider/>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <LineGraph/>
                </Grid>
                <Grid item xs={6}>
                    <BarGraph/>
                </Grid>

                <Grid item xs={4}>
                    <BarGraph/>
                </Grid>
                <Grid item xs={8}>
                    <LineGraph/>
                </Grid>

                <Grid item xs={4}>
                    <BarGraph/>
                </Grid>
                <Grid item xs={4}>
                    <LineGraph/>
                </Grid>
                <Grid item xs={4}>
                    <BarGraph/>
                </Grid>
            </Grid>
        </>
    )
};

export default Overview;