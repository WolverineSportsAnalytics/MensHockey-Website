import {React, useState} from "react";
import { Link } from "react-router-dom";
import {AppBar, Box, Toolbar, Typography, Button, Menu, MenuItem, Grid} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = (props) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'black'
    };

    const [isPage, setPage] = useState(props.ispage);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar style={{backgroundColor: "#FFCB05"}}>
                    <Grid container spacing={2}>
                        <Grid container item xs = {3} alignItems = "center">
                            <Typography variant="h5" component="div"  >
                                NCAA Hockey Analytics Portal
                            </Typography>
                        </Grid>
                        <Grid container item xs={8} justifyContent="flex-start">
                            <Link to="/overview" style={linkStyle}>
                                <Button style={{backgroundColor: isPage[0] ? '#C1ECFA' : "#FFCB05"}} color="inherit">Overview</Button>
                            </Link>
                            <Link to="/predictions" style={linkStyle}>
                                <Button style={{backgroundColor: isPage[1] ? '#C1ECFA' : "#FFCB05"}} color="inherit">Predictions</Button>
                            </Link>
                        </Grid>
                        <Grid container item xs={1}>
                            <Button id="basic-button" aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}
                                    style={{color: "black", position: "relative"}}>
                                <AccountCircleIcon/>
                            </Button>
                            <Menu id="basic-menu" anchorEl={anchorEl} open={open}
                                  onClose={handleClose} MenuListProps={{'aria-labelledby': 'basic-button'}}>
                                <MenuItem component={Link} to="/">Logout</MenuItem>
                            </Menu>
                        </Grid>
                    </Grid>
                    </Toolbar>
            </AppBar>
        </Box>
    );
    
}

export default Navbar;