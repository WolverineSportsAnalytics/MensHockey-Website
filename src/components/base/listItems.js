import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PersonIcon from '@mui/icons-material/Person';
import ScienceIcon from '@mui/icons-material/Science';
import SettingsIcon from '@mui/icons-material/Settings';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

export const mainListItems = (
    <>
    <ListSubheader component="div" inset>
        Analytics
    </ListSubheader>

    <ListItemButton>
        <ListItemIcon>
            <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Team Overview" />
    </ListItemButton>

    <ListItemButton>
        <ListItemIcon>
            <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="Player Overview" />
    </ListItemButton>

    <ListItemButton>
        <ListItemIcon>
            <ScienceIcon />
        </ListItemIcon>
        <ListItemText primary="Predictions" />
    </ListItemButton>
    </>
);

export const secondaryListItems = (
    <>
    <ListSubheader component="div" inset>
        Your Profile
    </ListSubheader>

    <ListItemButton>
        <ListItemIcon>
            <ManageAccountsIcon />
        </ListItemIcon>
        <ListItemText primary="Manage Account" />
    </ListItemButton>

    <ListItemButton>
        <ListItemIcon>
            <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
    </ListItemButton>

    <ListItemButton>
        <ListItemIcon>
            <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
    </ListItemButton>
    </>
);