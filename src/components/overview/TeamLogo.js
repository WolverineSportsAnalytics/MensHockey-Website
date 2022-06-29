import React from 'react';
import {Box, Typography} from '@mui/material';

const TeamLogo = () => {

return (
  <>
    <Typography color="primary">Michigan Wolverines</Typography>
    <Box component="img" margin='auto' sx={{ height: '60%', width: '60%' }}
        alt="<Michigan Logo>"
        src="https://i.pinimg.com/originals/c4/be/be/c4bebefd551d5df00777557bf2741565.png"/>
    <Typography>Location: Ann Arbor</Typography>
  </>
  );
}

export default TeamLogo;