import {React} from 'react';
import { Typography, Link } from '@mui/material';

const Copyright = (props) => {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" target="_blank" rel="noreferrer" href="https://www.wolverinesportsanalytics.com/">
          Wolverine Sports Analytics
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}

export default Copyright;