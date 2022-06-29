import * as React from 'react';
import { Link, Table, Typography, TableBody } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// Generate Order Data
function createData(id, name, grade, position, height, weight, hometown) {
  return {id, name, grade, position, height, weight, hometown};
}

const rows = [
  createData( 0, 'Beecher, Johnny', 'Jr', 'Forward', '6-3', 209, 'Elmira, N.Y.'),
  createData( 1, 'Beniers, Matty', 'So', 'Forward', '6-1', 175, 'Hingham, Mass.'),
  createData( 2, 'Blankenburg, Nick (C)', 'Sr', 'Defenseman', '5-9', 160, 'Washington, Mich.'),
  createData( 3, 'Bordeleau, Thomas', 'So', 'Forward', '5-9', 179, 'Terrebonne, Que.'),
  createData( 4, 'Brisson, Brendan', 'So', 'Forward', '6-0', 180, 'Manhattan Beach, Calif.'),
];

function preventDefault(event) {
  event.preventDefault();
}

const Roster = () => {
  return (
    <React.Fragment>
      <Typography color="primary">Current Roster</Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Grade</TableCell>
            <TableCell>Position</TableCell>
            <TableCell align="right">Height &#40;ft&#41;</TableCell>
            <TableCell align="right">Weight &#40;lbs&#41;</TableCell>
            <TableCell>Hometown</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.grade}</TableCell>
              <TableCell>{row.position}</TableCell>
              <TableCell align="right">{row.height}</TableCell>
              <TableCell align="right">{row.weight}</TableCell>
              <TableCell>{row.hometown}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more ...
      </Link>
    </React.Fragment>
  );
};

export default Roster;